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
    instance = new EveSwaggerInterface.GetFwWars200Ok();
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

  describe('GetFwWars200Ok', function() {
    it('should create an instance of GetFwWars200Ok', function() {
      // uncomment below and update the code to test GetFwWars200Ok
      //var instane = new EveSwaggerInterface.GetFwWars200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetFwWars200Ok);
    });

    it('should have the property factionId (base name: "faction_id")', function() {
      // uncomment below and update the code to test the property factionId
      //var instane = new EveSwaggerInterface.GetFwWars200Ok();
      //expect(instance).to.be();
    });

    it('should have the property againstId (base name: "against_id")', function() {
      // uncomment below and update the code to test the property againstId
      //var instane = new EveSwaggerInterface.GetFwWars200Ok();
      //expect(instance).to.be();
    });

  });

}));
