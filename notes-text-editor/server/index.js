const express = require('express');
const fs = require('fs');
const filepath = './notes.json';

const PORT = process.env.PORT || 3001;

const app = express();

const bodyParser = require('body-parser');

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});

const notes = [
    {
        id: Date.now(),
        name: 'The name of note',
        description: 'The description of note #firstTag, #secondTag',
        descriptionTag: ['#firstTag', '#secondTag'],
    },
    {
        id: Date.now(),
        name: 'The name of note',
        description: 'The description of note #firstTag, #secondTag',
        descriptionTag: ['#firstTag', '#secondTag'],
    },
    {
        id: Date.now(),
        name: 'The name of note',
        description: 'The description of note #firstTag, #secondTag',
        descriptionTag: ['#firstTag', '#secondTag'],
    },
    {
        id: Date.now(),
        name: 'The name of note',
        description: 'The description of note #firstTag, #secondTag',
        descriptionTag: ['#firstTag', '#secondTag'],
    },
];

app.get('/notes', (req, res) => {
    fs.writeFile(filepath, JSON.stringify(notes, null, 2), (err) => {
        if (err) {
            return res.sendStatus(500).send('Something went wrong...'); // Error
        }
        return res.json(notes);
    });
});

app.post('/notes', function (req, res) {
    
});
