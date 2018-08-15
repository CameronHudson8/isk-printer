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
    instance = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
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

  describe('PostFleetsFleetIdMembersInvitation', function() {
    it('should create an instance of PostFleetsFleetIdMembersInvitation', function() {
      // uncomment below and update the code to test PostFleetsFleetIdMembersInvitation
      //var instane = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
      //expect(instance).to.be.a(EveSwaggerInterface.PostFleetsFleetIdMembersInvitation);
    });

    it('should have the property characterId (base name: "character_id")', function() {
      // uncomment below and update the code to test the property characterId
      //var instane = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
      //expect(instance).to.be();
    });

    it('should have the property wingId (base name: "wing_id")', function() {
      // uncomment below and update the code to test the property wingId
      //var instane = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
      //expect(instance).to.be();
    });

    it('should have the property squadId (base name: "squad_id")', function() {
      // uncomment below and update the code to test the property squadId
      //var instane = new EveSwaggerInterface.PostFleetsFleetIdMembersInvitation();
      //expect(instance).to.be();
    });

  });

}));
