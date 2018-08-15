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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
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

  describe('GetCharactersCharacterIdCalendar200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdCalendar200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdCalendar200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok);
    });

    it('should have the property eventId (base name: "event_id")', function() {
      // uncomment below and update the code to test the property eventId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
      //expect(instance).to.be();
    });

    it('should have the property eventDate (base name: "event_date")', function() {
      // uncomment below and update the code to test the property eventDate
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
      //expect(instance).to.be();
    });

    it('should have the property importance (base name: "importance")', function() {
      // uncomment below and update the code to test the property importance
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
      //expect(instance).to.be();
    });

    it('should have the property eventResponse (base name: "event_response")', function() {
      // uncomment below and update the code to test the property eventResponse
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCalendar200Ok();
      //expect(instance).to.be();
    });

  });

}));