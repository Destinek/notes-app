/**
 * @jest-environment jsdom
 */
const NotesClient = require('./notesClient');
const NotesView = require('./notesview')

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    // 1. Instantiate the class
    const client = new NotesClient();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    // 3. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.
    client.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);

      // 4. Tell Jest our test can now end.
      done();
    });
  });

  it ('Adds a note to the server', () => {

    
    // const mockData = ['mock note 1', 'mock note 2'];
    // const mockAdd = 'go to the shop';

    // const mockModel = {setNotes: jest.fn(), getNotes: () => mockData};
    // const mockClient = {createNote: () => mockAdd};

    // view = new NotesView(mockModel,mockClient)

    // view.displayNotesFromApi();

    // expect(mockClient.createNote).toHaveBeenCalledWith(mockAdd);
  });
});