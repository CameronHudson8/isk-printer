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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok();
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

  describe('GetCharactersCharacterIdCorporationhistory200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdCorporationhistory200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdCorporationhistory200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok);
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property corporationId (base name: "corporation_id")', function() {
      // uncomment below and update the code to test the property corporationId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "is_deleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok();
      //expect(instance).to.be();
    });

    it('should have the property recordId (base name: "record_id")', function() {
      // uncomment below and update the code to test the property recordId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok();
      //expect(instance).to.be();
    });

  });

}));
