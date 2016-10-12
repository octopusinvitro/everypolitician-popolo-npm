describe('Popolo', function() {
  var
    data   = loadFixture('spec/fixtures/ep-popolo-v1.0.json'),
    Popolo = require('../index').Popolo,
    popolo;

  beforeEach(function() {
    popolo = new Popolo();
  });

  it('reads a Popolo json file', function() {
    var file = popolo.read(data);
    expect(file.persons.length).toEqual(1);
    expect(file.persons[0].id).toEqual('123');
    expect(file.persons[0].name).toEqual('Jon Doe');
  });

  function loadFixture(path) {
    return require('fs').readFileSync(path, 'utf-8');
  }
});
