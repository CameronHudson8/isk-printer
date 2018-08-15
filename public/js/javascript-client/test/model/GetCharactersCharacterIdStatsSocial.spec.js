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
    instance = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
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

  describe('GetCharactersCharacterIdStatsSocial', function() {
    it('should create an instance of GetCharactersCharacterIdStatsSocial', function() {
      // uncomment below and update the code to test GetCharactersCharacterIdStatsSocial
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be.a(EveSwaggerInterface.GetCharactersCharacterIdStatsSocial);
    });

    it('should have the property addContactBad (base name: "add_contact_bad")', function() {
      // uncomment below and update the code to test the property addContactBad
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addContactGood (base name: "add_contact_good")', function() {
      // uncomment below and update the code to test the property addContactGood
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addContactHigh (base name: "add_contact_high")', function() {
      // uncomment below and update the code to test the property addContactHigh
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addContactHorrible (base name: "add_contact_horrible")', function() {
      // uncomment below and update the code to test the property addContactHorrible
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addContactNeutral (base name: "add_contact_neutral")', function() {
      // uncomment below and update the code to test the property addContactNeutral
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addNote (base name: "add_note")', function() {
      // uncomment below and update the code to test the property addNote
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addedAsContactBad (base name: "added_as_contact_bad")', function() {
      // uncomment below and update the code to test the property addedAsContactBad
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addedAsContactGood (base name: "added_as_contact_good")', function() {
      // uncomment below and update the code to test the property addedAsContactGood
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addedAsContactHigh (base name: "added_as_contact_high")', function() {
      // uncomment below and update the code to test the property addedAsContactHigh
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addedAsContactHorrible (base name: "added_as_contact_horrible")', function() {
      // uncomment below and update the code to test the property addedAsContactHorrible
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property addedAsContactNeutral (base name: "added_as_contact_neutral")', function() {
      // uncomment below and update the code to test the property addedAsContactNeutral
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property calendarEventCreated (base name: "calendar_event_created")', function() {
      // uncomment below and update the code to test the property calendarEventCreated
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatMessagesAlliance (base name: "chat_messages_alliance")', function() {
      // uncomment below and update the code to test the property chatMessagesAlliance
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatMessagesConstellation (base name: "chat_messages_constellation")', function() {
      // uncomment below and update the code to test the property chatMessagesConstellation
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatMessagesCorporation (base name: "chat_messages_corporation")', function() {
      // uncomment below and update the code to test the property chatMessagesCorporation
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatMessagesFleet (base name: "chat_messages_fleet")', function() {
      // uncomment below and update the code to test the property chatMessagesFleet
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatMessagesRegion (base name: "chat_messages_region")', function() {
      // uncomment below and update the code to test the property chatMessagesRegion
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatMessagesSolarsystem (base name: "chat_messages_solarsystem")', function() {
      // uncomment below and update the code to test the property chatMessagesSolarsystem
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatMessagesWarfaction (base name: "chat_messages_warfaction")', function() {
      // uncomment below and update the code to test the property chatMessagesWarfaction
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property chatTotalMessageLength (base name: "chat_total_message_length")', function() {
      // uncomment below and update the code to test the property chatTotalMessageLength
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property directTrades (base name: "direct_trades")', function() {
      // uncomment below and update the code to test the property directTrades
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property fleetBroadcasts (base name: "fleet_broadcasts")', function() {
      // uncomment below and update the code to test the property fleetBroadcasts
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property fleetJoins (base name: "fleet_joins")', function() {
      // uncomment below and update the code to test the property fleetJoins
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property mailsReceived (base name: "mails_received")', function() {
      // uncomment below and update the code to test the property mailsReceived
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

    it('should have the property mailsSent (base name: "mails_sent")', function() {
      // uncomment below and update the code to test the property mailsSent
      //var instane = new EveSwaggerInterface.GetCharactersCharacterIdStatsSocial();
      //expect(instance).to.be();
    });

  });

}));