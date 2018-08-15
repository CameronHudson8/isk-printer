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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
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

  describe('GetCharactersCharacterIdSearchOk', function() {
    it('should create an instance of GetCharactersCharacterIdSearchOk', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdSearchOk
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdSearchOk);
    });

    it('should have the property agent (base name: "agent")', function() {
      // uncomment below and update the code to test the property agent
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property alliance (base name: "alliance")', function() {
      // uncomment below and update the code to test the property alliance
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property character (base name: "character")', function() {
      // uncomment below and update the code to test the property character
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property constellation (base name: "constellation")', function() {
      // uncomment below and update the code to test the property constellation
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property corporation (base name: "corporation")', function() {
      // uncomment below and update the code to test the property corporation
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property faction (base name: "faction")', function() {
      // uncomment below and update the code to test the property faction
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property inventoryType (base name: "inventory_type")', function() {
      // uncomment below and update the code to test the property inventoryType
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function() {
      // uncomment below and update the code to test the property region
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property solarSystem (base name: "solar_system")', function() {
      // uncomment below and update the code to test the property solarSystem
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property station (base name: "station")', function() {
      // uncomment below and update the code to test the property station
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

    it('should have the property structure (base name: "structure")', function() {
      // uncomment below and update the code to test the property structure
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdSearchOk();
      //expect(instance).to.be();
    });

  });

}));