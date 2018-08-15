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
    instance = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
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

  describe('GetUniverseStarsStarIdOk', function() {
    it('should create an instance of GetUniverseStarsStarIdOk', function() {
      // uncomment below and update the code to test GetUniverseStarsStarIdOk
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetUniverseStarsStarIdOk);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

    it('should have the property solarSystemId (base name: "solar_system_id")', function() {
      // uncomment below and update the code to test the property solarSystemId
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

    it('should have the property age (base name: "age")', function() {
      // uncomment below and update the code to test the property age
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

    it('should have the property luminosity (base name: "luminosity")', function() {
      // uncomment below and update the code to test the property luminosity
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

    it('should have the property radius (base name: "radius")', function() {
      // uncomment below and update the code to test the property radius
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

    it('should have the property spectralClass (base name: "spectral_class")', function() {
      // uncomment below and update the code to test the property spectralClass
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

    it('should have the property temperature (base name: "temperature")', function() {
      // uncomment below and update the code to test the property temperature
      //var instane = new EveSwaggerInterface.GetUniverseStarsStarIdOk();
      //expect(instance).to.be();
    });

  });

}));
