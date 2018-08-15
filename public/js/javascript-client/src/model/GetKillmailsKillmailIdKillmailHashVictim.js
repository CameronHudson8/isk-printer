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
    define(['ApiClient', 'model/GetKillmailsKillmailIdKillmailHashItem1', 'model/GetKillmailsKillmailIdKillmailHashPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetKillmailsKillmailIdKillmailHashItem1'), require('./GetKillmailsKillmailIdKillmailHashPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashVictim = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashItem1, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashPosition);
  }
}(this, function(ApiClient, GetKillmailsKillmailIdKillmailHashItem1, GetKillmailsKillmailIdKillmailHashPosition) {
  'use strict';




  /**
   * The GetKillmailsKillmailIdKillmailHashVictim model module.
   * @module model/GetKillmailsKillmailIdKillmailHashVictim
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetKillmailsKillmailIdKillmailHashVictim</code>.
   * victim object
   * @alias module:model/GetKillmailsKillmailIdKillmailHashVictim
   * @class
   * @param damageTaken {Number} How much total damage was taken by the victim 
   * @param shipTypeId {Number} The ship that the victim was piloting and was destroyed 
   */
  var exports = function(damageTaken, shipTypeId) {
    var _this = this;





    _this['damage_taken'] = damageTaken;
    _this['ship_type_id'] = shipTypeId;


  };

  /**
   * Constructs a <code>GetKillmailsKillmailIdKillmailHashVictim</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetKillmailsKillmailIdKillmailHashVictim} obj Optional instance to populate.
   * @return {module:model/GetKillmailsKillmailIdKillmailHashVictim} The populated <code>GetKillmailsKillmailIdKillmailHashVictim</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('character_id')) {
        obj['character_id'] = ApiClient.convertToType(data['character_id'], 'Number');
      }
      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Number');
      }
      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Number');
      }
      if (data.hasOwnProperty('faction_id')) {
        obj['faction_id'] = ApiClient.convertToType(data['faction_id'], 'Number');
      }
      if (data.hasOwnProperty('damage_taken')) {
        obj['damage_taken'] = ApiClient.convertToType(data['damage_taken'], 'Number');
      }
      if (data.hasOwnProperty('ship_type_id')) {
        obj['ship_type_id'] = ApiClient.convertToType(data['ship_type_id'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [GetKillmailsKillmailIdKillmailHashItem1]);
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = GetKillmailsKillmailIdKillmailHashPosition.constructFromObject(data['position']);
      }
    }
    return obj;
  }

  /**
   * character_id integer
   * @member {Number} character_id
   */
  exports.prototype['character_id'] = undefined;
  /**
   * corporation_id integer
   * @member {Number} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * alliance_id integer
   * @member {Number} alliance_id
   */
  exports.prototype['alliance_id'] = undefined;
  /**
   * faction_id integer
   * @member {Number} faction_id
   */
  exports.prototype['faction_id'] = undefined;
  /**
   * How much total damage was taken by the victim 
   * @member {Number} damage_taken
   */
  exports.prototype['damage_taken'] = undefined;
  /**
   * The ship that the victim was piloting and was destroyed 
   * @member {Number} ship_type_id
   */
  exports.prototype['ship_type_id'] = undefined;
  /**
   * items array
   * @member {Array.<module:model/GetKillmailsKillmailIdKillmailHashItem1>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:model/GetKillmailsKillmailIdKillmailHashPosition} position
   */
  exports.prototype['position'] = undefined;



  return exports;
}));

