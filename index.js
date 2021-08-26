const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

fakeApi = () => {
return [
        {
            name: 'WHO',
            lane: 'midlaner'
        },
        {
            name: 'Jayce',
            lane: '22222toplaner'
        },
        {
            name: 'Heimerdinger',
            lane: 'toplaner'
        },
        {
            name: 'Zed',
            lane: 'midlaner'
        },
        {
            name: 'Azir',
            lane: 'midlaner'
        }
];
}

app.get('/', (req, res) => {
    res.render('main', {
        layout: 'index', 
        suggestedChamps: fakeApi(), 
        listExists: true
    });
});

app.listen(port, () => console.log(`App listening to port ${port}`));