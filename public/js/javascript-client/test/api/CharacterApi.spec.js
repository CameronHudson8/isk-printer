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
    instance = new EveSwaggerInterface.CharacterApi();
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

  describe('CharacterApi', function() {
    describe('getCharactersCharacterId', function() {
      it('should call getCharactersCharacterId successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterId
        //instance.getCharactersCharacterId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdAgentsResearch', function() {
      it('should call getCharactersCharacterIdAgentsResearch successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdAgentsResearch
        //instance.getCharactersCharacterIdAgentsResearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdBlueprints', function() {
      it('should call getCharactersCharacterIdBlueprints successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdBlueprints
        //instance.getCharactersCharacterIdBlueprints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdChatChannels', function() {
      it('should call getCharactersCharacterIdChatChannels successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdChatChannels
        //instance.getCharactersCharacterIdChatChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdCorporationhistory', function() {
      it('should call getCharactersCharacterIdCorporationhistory successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdCorporationhistory
        //instance.getCharactersCharacterIdCorporationhistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdFatigue', function() {
      it('should call getCharactersCharacterIdFatigue successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdFatigue
        //instance.getCharactersCharacterIdFatigue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdMedals', function() {
      it('should call getCharactersCharacterIdMedals successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdMedals
        //instance.getCharactersCharacterIdMedals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdNotifications', function() {
      it('should call getCharactersCharacterIdNotifications successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdNotifications
        //instance.getCharactersCharacterIdNotifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdNotificationsContacts', function() {
      it('should call getCharactersCharacterIdNotificationsContacts successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdNotificationsContacts
        //instance.getCharactersCharacterIdNotificationsContacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdPortrait', function() {
      it('should call getCharactersCharacterIdPortrait successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdPortrait
        //instance.getCharactersCharacterIdPortrait(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdRoles', function() {
      it('should call getCharactersCharacterIdRoles successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdRoles
        //instance.getCharactersCharacterIdRoles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdStandings', function() {
      it('should call getCharactersCharacterIdStandings successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdStandings
        //instance.getCharactersCharacterIdStandings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdStats', function() {
      it('should call getCharactersCharacterIdStats successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdStats
        //instance.getCharactersCharacterIdStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersCharacterIdTitles', function() {
      it('should call getCharactersCharacterIdTitles successfully', function(done) {
        //uncomment below and update the code to test getCharactersCharacterIdTitles
        //instance.getCharactersCharacterIdTitles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCharactersNames', function() {
      it('should call getCharactersNames successfully', function(done) {
        //uncomment below and update the code to test getCharactersNames
        //instance.getCharactersNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCharactersAffiliation', function() {
      it('should call postCharactersAffiliation successfully', function(done) {
        //uncomment below and update the code to test postCharactersAffiliation
        //instance.postCharactersAffiliation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCharactersCharacterIdCspa', function() {
      it('should call postCharactersCharacterIdCspa successfully', function(done) {
        //uncomment below and update the code to test postCharactersCharacterIdCspa
        //instance.postCharactersCharacterIdCspa(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));