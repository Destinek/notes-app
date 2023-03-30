const notesModel = require('./notesmodel')
const NotesView = require('./notesView.js')
const NotesClient = require('./notesclient')

const client = new NotesClient();
const model = new notesModel;
model.addNote('This is an example note');
const view = new NotesView(model,client);
view.displayNotesFromApi();
view.displayNotes();

console.log('The notes app is running');
console.log(model.getNotes());