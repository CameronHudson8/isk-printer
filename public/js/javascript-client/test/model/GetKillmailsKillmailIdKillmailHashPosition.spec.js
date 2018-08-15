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
    instance = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition();
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

  describe('GetKillmailsKillmailIdKillmailHashPosition', function() {
    it('should create an instance of GetKillmailsKillmailIdKillmailHashPosition', function() {
      // uncomment below and update the code to test GetKillmailsKillmailIdKillmailHashPosition
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition();
      //expect(instance).to.be.a(EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition);
    });

    it('should have the property x (base name: "x")', function() {
      // uncomment below and update the code to test the property x
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition();
      //expect(instance).to.be();
    });

    it('should have the property y (base name: "y")', function() {
      // uncomment below and update the code to test the property y
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition();
      //expect(instance).to.be();
    });

    it('should have the property z (base name: "z")', function() {
      // uncomment below and update the code to test the property z
      //var instane = new EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition();
      //expect(instance).to.be();
    });

  });

}));
