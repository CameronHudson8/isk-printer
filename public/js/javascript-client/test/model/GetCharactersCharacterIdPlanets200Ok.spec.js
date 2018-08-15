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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
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

  describe('GetCharactersCharacterIdPlanets200Ok', function() {
    it('should create an instance of GetCharactersCharacterIdPlanets200Ok', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdPlanets200Ok
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok);
    });

    it('should have the property solarSystemId (base name: "solar_system_id")', function() {
      // uncomment below and update the code to test the property solarSystemId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be();
    });

    it('should have the property planetId (base name: "planet_id")', function() {
      // uncomment below and update the code to test the property planetId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be();
    });

    it('should have the property upgradeLevel (base name: "upgrade_level")', function() {
      // uncomment below and update the code to test the property upgradeLevel
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be();
    });

    it('should have the property numPins (base name: "num_pins")', function() {
      // uncomment below and update the code to test the property numPins
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdate (base name: "last_update")', function() {
      // uncomment below and update the code to test the property lastUpdate
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be();
    });

    it('should have the property planetType (base name: "planet_type")', function() {
      // uncomment below and update the code to test the property planetType
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok();
      //expect(instance).to.be();
    });

  });

}));
