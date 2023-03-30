/**
 * @jest-environment jsdom
 */

const Model = require('./notesmodel')
const NotesView = require('./notesview')
const Client = require('./notesClient')

const fs = require('fs');

// jest.mock('./notesClient', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       loadData: jest.fn(),
//     }
//   })
// })

describe('Notes View', () => {
  let model;
  let view;
  let client;
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new Model();
    view = new NotesView(model, client);
    client = new Client;
  });

  it ('can view all current paragraphs', () => {
    model.addNote('1st Note');
    model.addNote('2nd Note');
    view.displayNotes();
    expect(document.querySelectorAll('div').length).toBe(3);
  })

  it('creates each new div with HTML class of note', () => {
    model.addNote('1st Note');
    model.addNote('2nd Note');
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })

  it('can add new notes by button', () =>{
    const button= document.querySelector('#button');
    const input= document.querySelector('#message-input');
    input.value = 'Go gym';
    button.click();
   

    expect(document.querySelectorAll('div.note').length).toBe(1);
  })

  it('', () => {
    const button= document.querySelector('#button');
    const input= document.querySelector('#message-input');
    input.value = 'Go gym';
    button.click();
    input.value = 'Take Shower';
    button.click();
    expect(document.querySelectorAll('div.note').length).toBe(2)
  })

  it('recieve data from api, set list of notes, call displayNotes', () => {
    const mockData = ['mock note 1', 'mock note 2'];
    const mockClient = {loadData: (callback) => {callback(mockData)}};
    const mockModel = {setNotes: jest.fn(), getNotes: () => mockData}
    view2 = new NotesView(mockModel,mockClient)

    view2.displayNotesFromApi();

    expect(mockModel.setNotes).toHaveBeenCalledWith(mockData);

    expect(document.querySelectorAll('div.note').length).toBe(2)
    expect(document.querySelector('div.note').innerText).toBe('mock note 1');
  })
});