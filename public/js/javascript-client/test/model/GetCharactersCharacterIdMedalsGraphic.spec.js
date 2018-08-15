/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.6
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveSwaggerInterface);
  }
}(this, function(expect, EveSwaggerInterface) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetCharactersCharacterIdMedalsGraphic', function() {
    it('should create an instance of GetCharactersCharacterIdMedalsGraphic', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdMedalsGraphic
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic);
    });

    it('should have the property part (base name: "part")', function() {
      // uncomment below and update the code to test the property part
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic();
      //expect(instance).to.be();
    });

    it('should have the property layer (base name: "layer")', function() {
      // uncomment below and update the code to test the property layer
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic();
      //expect(instance).to.be();
    });

    it('should have the property graphic (base name: "graphic")', function() {
      // uncomment below and update the code to test the property graphic
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic();
      //expect(instance).to.be();
    });

  });

}));
