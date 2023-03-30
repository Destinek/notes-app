class NotesView {
  constructor(model, client) {
    this.client = client;
    this.model = model;
    this.containerEl = document.querySelector("#main-container");
    this.buttonrEl = document.querySelector("#button") ;

    this.buttonrEl.addEventListener('click', () => {
      const input = document.querySelector('#message-input');
      this.model.addNote(input.value);
      this.displayNotes();
      input.value = ""

    })
  }

  displayNotes() {
    const notesAll = this.model.getNotes();
    const noteClass = document.querySelectorAll('div.note')
    noteClass.forEach((note) => note.remove())


    notesAll.forEach((note) => {
      const noteDiv = document.createElement('div');
      noteDiv.classList.add('note')
      noteDiv.innerText= note;
      this.containerEl.append(noteDiv);
    })
  }

  displayNotesFromApi() {
    this.client.loadData((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });

}};
module.exports = NotesView;