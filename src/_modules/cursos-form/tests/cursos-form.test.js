'use strict';

var CursosForm = require('../cursos-form');

describe('CursosForm View', function() {

  beforeEach(function() {
    this.cursosForm = new CursosForm();
  });

  it('Should run a few assertions', function() {
    expect(this.cursosForm);
  });

});
