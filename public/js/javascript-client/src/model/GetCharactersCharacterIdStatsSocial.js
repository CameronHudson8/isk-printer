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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsSocial = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdStatsSocial model module.
   * @module model/GetCharactersCharacterIdStatsSocial
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsSocial</code>.
   * social object
   * @alias module:model/GetCharactersCharacterIdStatsSocial
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsSocial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsSocial} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsSocial} The populated <code>GetCharactersCharacterIdStatsSocial</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('add_contact_bad')) {
        obj['add_contact_bad'] = ApiClient.convertToType(data['add_contact_bad'], 'Number');
      }
      if (data.hasOwnProperty('add_contact_good')) {
        obj['add_contact_good'] = ApiClient.convertToType(data['add_contact_good'], 'Number');
      }
      if (data.hasOwnProperty('add_contact_high')) {
        obj['add_contact_high'] = ApiClient.convertToType(data['add_contact_high'], 'Number');
      }
      if (data.hasOwnProperty('add_contact_horrible')) {
        obj['add_contact_horrible'] = ApiClient.convertToType(data['add_contact_horrible'], 'Number');
      }
      if (data.hasOwnProperty('add_contact_neutral')) {
        obj['add_contact_neutral'] = ApiClient.convertToType(data['add_contact_neutral'], 'Number');
      }
      if (data.hasOwnProperty('add_note')) {
        obj['add_note'] = ApiClient.convertToType(data['add_note'], 'Number');
      }
      if (data.hasOwnProperty('added_as_contact_bad')) {
        obj['added_as_contact_bad'] = ApiClient.convertToType(data['added_as_contact_bad'], 'Number');
      }
      if (data.hasOwnProperty('added_as_contact_good')) {
        obj['added_as_contact_good'] = ApiClient.convertToType(data['added_as_contact_good'], 'Number');
      }
      if (data.hasOwnProperty('added_as_contact_high')) {
        obj['added_as_contact_high'] = ApiClient.convertToType(data['added_as_contact_high'], 'Number');
      }
      if (data.hasOwnProperty('added_as_contact_horrible')) {
        obj['added_as_contact_horrible'] = ApiClient.convertToType(data['added_as_contact_horrible'], 'Number');
      }
      if (data.hasOwnProperty('added_as_contact_neutral')) {
        obj['added_as_contact_neutral'] = ApiClient.convertToType(data['added_as_contact_neutral'], 'Number');
      }
      if (data.hasOwnProperty('calendar_event_created')) {
        obj['calendar_event_created'] = ApiClient.convertToType(data['calendar_event_created'], 'Number');
      }
      if (data.hasOwnProperty('chat_messages_alliance')) {
        obj['chat_messages_alliance'] = ApiClient.convertToType(data['chat_messages_alliance'], 'Number');
      }
      if (data.hasOwnProperty('chat_messages_constellation')) {
        obj['chat_messages_constellation'] = ApiClient.convertToType(data['chat_messages_constellation'], 'Number');
      }
      if (data.hasOwnProperty('chat_messages_corporation')) {
        obj['chat_messages_corporation'] = ApiClient.convertToType(data['chat_messages_corporation'], 'Number');
      }
      if (data.hasOwnProperty('chat_messages_fleet')) {
        obj['chat_messages_fleet'] = ApiClient.convertToType(data['chat_messages_fleet'], 'Number');
      }
      if (data.hasOwnProperty('chat_messages_region')) {
        obj['chat_messages_region'] = ApiClient.convertToType(data['chat_messages_region'], 'Number');
      }
      if (data.hasOwnProperty('chat_messages_solarsystem')) {
        obj['chat_messages_solarsystem'] = ApiClient.convertToType(data['chat_messages_solarsystem'], 'Number');
      }
      if (data.hasOwnProperty('chat_messages_warfaction')) {
        obj['chat_messages_warfaction'] = ApiClient.convertToType(data['chat_messages_warfaction'], 'Number');
      }
      if (data.hasOwnProperty('chat_total_message_length')) {
        obj['chat_total_message_length'] = ApiClient.convertToType(data['chat_total_message_length'], 'Number');
      }
      if (data.hasOwnProperty('direct_trades')) {
        obj['direct_trades'] = ApiClient.convertToType(data['direct_trades'], 'Number');
      }
      if (data.hasOwnProperty('fleet_broadcasts')) {
        obj['fleet_broadcasts'] = ApiClient.convertToType(data['fleet_broadcasts'], 'Number');
      }
      if (data.hasOwnProperty('fleet_joins')) {
        obj['fleet_joins'] = ApiClient.convertToType(data['fleet_joins'], 'Number');
      }
      if (data.hasOwnProperty('mails_received')) {
        obj['mails_received'] = ApiClient.convertToType(data['mails_received'], 'Number');
      }
      if (data.hasOwnProperty('mails_sent')) {
        obj['mails_sent'] = ApiClient.convertToType(data['mails_sent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * add_contact_bad integer
   * @member {Number} add_contact_bad
   */
  exports.prototype['add_contact_bad'] = undefined;
  /**
   * add_contact_good integer
   * @member {Number} add_contact_good
   */
  exports.prototype['add_contact_good'] = undefined;
  /**
   * add_contact_high integer
   * @member {Number} add_contact_high
   */
  exports.prototype['add_contact_high'] = undefined;
  /**
   * add_contact_horrible integer
   * @member {Number} add_contact_horrible
   */
  exports.prototype['add_contact_horrible'] = undefined;
  /**
   * add_contact_neutral integer
   * @member {Number} add_contact_neutral
   */
  exports.prototype['add_contact_neutral'] = undefined;
  /**
   * add_note integer
   * @member {Number} add_note
   */
  exports.prototype['add_note'] = undefined;
  /**
   * added_as_contact_bad integer
   * @member {Number} added_as_contact_bad
   */
  exports.prototype['added_as_contact_bad'] = undefined;
  /**
   * added_as_contact_good integer
   * @member {Number} added_as_contact_good
   */
  exports.prototype['added_as_contact_good'] = undefined;
  /**
   * added_as_contact_high integer
   * @member {Number} added_as_contact_high
   */
  exports.prototype['added_as_contact_high'] = undefined;
  /**
   * added_as_contact_horrible integer
   * @member {Number} added_as_contact_horrible
   */
  exports.prototype['added_as_contact_horrible'] = undefined;
  /**
   * added_as_contact_neutral integer
   * @member {Number} added_as_contact_neutral
   */
  exports.prototype['added_as_contact_neutral'] = undefined;
  /**
   * calendar_event_created integer
   * @member {Number} calendar_event_created
   */
  exports.prototype['calendar_event_created'] = undefined;
  /**
   * chat_messages_alliance integer
   * @member {Number} chat_messages_alliance
   */
  exports.prototype['chat_messages_alliance'] = undefined;
  /**
   * chat_messages_constellation integer
   * @member {Number} chat_messages_constellation
   */
  exports.prototype['chat_messages_constellation'] = undefined;
  /**
   * chat_messages_corporation integer
   * @member {Number} chat_messages_corporation
   */
  exports.prototype['chat_messages_corporation'] = undefined;
  /**
   * chat_messages_fleet integer
   * @member {Number} chat_messages_fleet
   */
  exports.prototype['chat_messages_fleet'] = undefined;
  /**
   * chat_messages_region integer
   * @member {Number} chat_messages_region
   */
  exports.prototype['chat_messages_region'] = undefined;
  /**
   * chat_messages_solarsystem integer
   * @member {Number} chat_messages_solarsystem
   */
  exports.prototype['chat_messages_solarsystem'] = undefined;
  /**
   * chat_messages_warfaction integer
   * @member {Number} chat_messages_warfaction
   */
  exports.prototype['chat_messages_warfaction'] = undefined;
  /**
   * chat_total_message_length integer
   * @member {Number} chat_total_message_length
   */
  exports.prototype['chat_total_message_length'] = undefined;
  /**
   * direct_trades integer
   * @member {Number} direct_trades
   */
  exports.prototype['direct_trades'] = undefined;
  /**
   * fleet_broadcasts integer
   * @member {Number} fleet_broadcasts
   */
  exports.prototype['fleet_broadcasts'] = undefined;
  /**
   * fleet_joins integer
   * @member {Number} fleet_joins
   */
  exports.prototype['fleet_joins'] = undefined;
  /**
   * mails_received integer
   * @member {Number} mails_received
   */
  exports.prototype['mails_received'] = undefined;
  /**
   * mails_sent integer
   * @member {Number} mails_sent
   */
  exports.prototype['mails_sent'] = undefined;



  return exports;
}));


