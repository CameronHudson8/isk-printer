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
    instance = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
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

  describe('GetCorporationsCorporationIdContainersLogs200Ok', function() {
    it('should create an instance of GetCorporationsCorporationIdContainersLogs200Ok', function() {
      // uncomment below and update the code to test GetCorporationsCorporationIdContainersLogs200Ok
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok);
    });

    it('should have the property loggedAt (base name: "logged_at")', function() {
      // uncomment below and update the code to test the property loggedAt
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property containerId (base name: "container_id")', function() {
      // uncomment below and update the code to test the property containerId
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property containerTypeId (base name: "container_type_id")', function() {
      // uncomment below and update the code to test the property containerTypeId
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property characterId (base name: "character_id")', function() {
      // uncomment below and update the code to test the property characterId
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property locationId (base name: "location_id")', function() {
      // uncomment below and update the code to test the property locationId
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property passwordType (base name: "password_type")', function() {
      // uncomment below and update the code to test the property passwordType
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property oldConfigBitmask (base name: "old_config_bitmask")', function() {
      // uncomment below and update the code to test the property oldConfigBitmask
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property newConfigBitmask (base name: "new_config_bitmask")', function() {
      // uncomment below and update the code to test the property newConfigBitmask
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

    it('should have the property locationFlag (base name: "location_flag")', function() {
      // uncomment below and update the code to test the property locationFlag
      //var instane = new EveSwaggerInterface.GetCorporationsCorporationIdContainersLogs200Ok();
      //expect(instance).to.be();
    });

  });

}));