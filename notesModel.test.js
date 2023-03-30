/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const notesModel = require('./notesmodel');

describe('NotesModel', () =>{
  
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })
  
  const model = new notesModel();

  it('returns an empty array with no notes added', () =>{
    expect(model.getNotes()).toEqual ([]);
  });

  it('can add notes and return the,', () =>{
    model.addNote('Buy Milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual (['Buy Milk','Go to the gym']);
  });

  it('can reset notes and return an empty array,', () =>{
    model.addNote('Buy Milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });



})