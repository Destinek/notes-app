class NotesClient {
  loadData(callback) {
    const mockData = [{name: 'mock note 1', id: 1}, {name: 'mock note 2', id: 2}]
    callback(mockData)
  }
}

module.exports = NotesClient;