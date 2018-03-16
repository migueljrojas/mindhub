'use strict';

var Contacto = require('../contacto');

describe('Contacto View', function() {

  beforeEach(function() {
    this.contacto = new Contacto();
  });

  it('Should run a few assertions', function() {
    expect(this.contacto);
  });

});
