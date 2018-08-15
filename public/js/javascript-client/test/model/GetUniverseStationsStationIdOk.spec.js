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
    instance = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
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

  describe('GetUniverseStationsStationIdOk', function() {
    it('should create an instance of GetUniverseStationsStationIdOk', function() {
      // uncomment below and update the code to test GetUniverseStationsStationIdOk
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be.a(EveSwaggerInterface.GetUniverseStationsStationIdOk);
    });

    it('should have the property stationId (base name: "station_id")', function() {
      // uncomment below and update the code to test the property stationId
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property raceId (base name: "race_id")', function() {
      // uncomment below and update the code to test the property raceId
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property systemId (base name: "system_id")', function() {
      // uncomment below and update the code to test the property systemId
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property reprocessingEfficiency (base name: "reprocessing_efficiency")', function() {
      // uncomment below and update the code to test the property reprocessingEfficiency
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property reprocessingStationsTake (base name: "reprocessing_stations_take")', function() {
      // uncomment below and update the code to test the property reprocessingStationsTake
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property maxDockableShipVolume (base name: "max_dockable_ship_volume")', function() {
      // uncomment below and update the code to test the property maxDockableShipVolume
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property officeRentalCost (base name: "office_rental_cost")', function() {
      // uncomment below and update the code to test the property officeRentalCost
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

    it('should have the property services (base name: "services")', function() {
      // uncomment below and update the code to test the property services
      //var instane = new EveSwaggerInterface.GetUniverseStationsStationIdOk();
      //expect(instance).to.be();
    });

  });

}));
