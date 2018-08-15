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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
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

  describe('GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails', function() {
    it('should create an instance of GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails);
    });

    it('should have the property heads (base name: "heads")', function() {
      // uncomment below and update the code to test the property heads
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
      //expect(instance).to.be();
    });

    it('should have the property productTypeId (base name: "product_type_id")', function() {
      // uncomment below and update the code to test the property productTypeId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
      //expect(instance).to.be();
    });

    it('should have the property cycleTime (base name: "cycle_time")', function() {
      // uncomment below and update the code to test the property cycleTime
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
      //expect(instance).to.be();
    });

    it('should have the property headRadius (base name: "head_radius")', function() {
      // uncomment below and update the code to test the property headRadius
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
      //expect(instance).to.be();
    });

    it('should have the property qtyPerCycle (base name: "qty_per_cycle")', function() {
      // uncomment below and update the code to test the property qtyPerCycle
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
      //expect(instance).to.be();
    });

  });

}));
