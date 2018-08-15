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
    instance = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
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

  describe('GetCorporationCorporationIdMiningExtractions200Ok', function() {
    it('should create an instance of GetCorporationCorporationIdMiningExtractions200Ok', function() {
      // uncomment below and update the code to test GetCorporationCorporationIdMiningExtractions200Ok
      //var instane = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok);
    });

    it('should have the property structureId (base name: "structure_id")', function() {
      // uncomment below and update the code to test the property structureId
      //var instane = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property moonId (base name: "moon_id")', function() {
      // uncomment below and update the code to test the property moonId
      //var instane = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property extractionStartTime (base name: "extraction_start_time")', function() {
      // uncomment below and update the code to test the property extractionStartTime
      //var instane = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property chunkArrivalTime (base name: "chunk_arrival_time")', function() {
      // uncomment below and update the code to test the property chunkArrivalTime
      //var instane = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
      //expect(instance).to.be();
    });

    it('should have the property naturalDecayTime (base name: "natural_decay_time")', function() {
      // uncomment below and update the code to test the property naturalDecayTime
      //var instane = new EveSwaggerInterface.GetCorporationCorporationIdMiningExtractions200Ok();
      //expect(instance).to.be();
    });

  });

}));