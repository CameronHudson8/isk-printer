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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
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

  describe('GetCharactersCharacterIdStatsTravel', function() {
    it('should create an instance of GetCharactersCharacterIdStatsTravel', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdStatsTravel
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsTravel);
    });

    it('should have the property accelerationGateActivations (base name: "acceleration_gate_activations")', function() {
      // uncomment below and update the code to test the property accelerationGateActivations
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property alignTo (base name: "align_to")', function() {
      // uncomment below and update the code to test the property alignTo
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property distanceWarpedHighSec (base name: "distance_warped_high_sec")', function() {
      // uncomment below and update the code to test the property distanceWarpedHighSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property distanceWarpedLowSec (base name: "distance_warped_low_sec")', function() {
      // uncomment below and update the code to test the property distanceWarpedLowSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property distanceWarpedNullSec (base name: "distance_warped_null_sec")', function() {
      // uncomment below and update the code to test the property distanceWarpedNullSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property distanceWarpedWormhole (base name: "distance_warped_wormhole")', function() {
      // uncomment below and update the code to test the property distanceWarpedWormhole
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property docksHighSec (base name: "docks_high_sec")', function() {
      // uncomment below and update the code to test the property docksHighSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property docksLowSec (base name: "docks_low_sec")', function() {
      // uncomment below and update the code to test the property docksLowSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property docksNullSec (base name: "docks_null_sec")', function() {
      // uncomment below and update the code to test the property docksNullSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property jumpsStargateHighSec (base name: "jumps_stargate_high_sec")', function() {
      // uncomment below and update the code to test the property jumpsStargateHighSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property jumpsStargateLowSec (base name: "jumps_stargate_low_sec")', function() {
      // uncomment below and update the code to test the property jumpsStargateLowSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property jumpsStargateNullSec (base name: "jumps_stargate_null_sec")', function() {
      // uncomment below and update the code to test the property jumpsStargateNullSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property jumpsWormhole (base name: "jumps_wormhole")', function() {
      // uncomment below and update the code to test the property jumpsWormhole
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsHighSec (base name: "warps_high_sec")', function() {
      // uncomment below and update the code to test the property warpsHighSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsLowSec (base name: "warps_low_sec")', function() {
      // uncomment below and update the code to test the property warpsLowSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsNullSec (base name: "warps_null_sec")', function() {
      // uncomment below and update the code to test the property warpsNullSec
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsToBookmark (base name: "warps_to_bookmark")', function() {
      // uncomment below and update the code to test the property warpsToBookmark
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsToCelestial (base name: "warps_to_celestial")', function() {
      // uncomment below and update the code to test the property warpsToCelestial
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsToFleetMember (base name: "warps_to_fleet_member")', function() {
      // uncomment below and update the code to test the property warpsToFleetMember
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsToScanResult (base name: "warps_to_scan_result")', function() {
      // uncomment below and update the code to test the property warpsToScanResult
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

    it('should have the property warpsWormhole (base name: "warps_wormhole")', function() {
      // uncomment below and update the code to test the property warpsWormhole
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsTravel();
      //expect(instance).to.be();
    });

  });

}));