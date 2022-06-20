const fs = require('fs');
const path = require('path');

const notes = require('./notes.json');

// fs.writeFile('notes.txt', 'utf-8', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

/*
 *   Запись json-файла
 */

const notes = {
    id: Date.now(),
    name: 'The name of note',
    description: 'The description of note #firstTag, #secondTag',
    descriptionTag: ['#firstTag', '#secondTag'],
};

const saveData = (data, file) => {
    const finished = (error) => {
        if (error) {
            console.error(error);
            return;
        }
    };

    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile(file, jsonData, finished);
};

saveData(notes, 'notes.json');
/*
 *   Чтение json-файла
 */

console.log(notes);

/*
 * Чтение CSV file
 */
