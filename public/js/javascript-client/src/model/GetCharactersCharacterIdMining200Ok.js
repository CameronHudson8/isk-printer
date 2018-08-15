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
    root.EveSwaggerInterface.GetCharactersCharacterIdMining200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdMining200Ok model module.
   * @module model/GetCharactersCharacterIdMining200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMining200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMining200Ok
   * @class
   * @param _date {Date} date string
   * @param solarSystemId {Number} solar_system_id integer
   * @param typeId {Number} type_id integer
   * @param quantity {Number} quantity integer
   */
  var exports = function(_date, solarSystemId, typeId, quantity) {
    var _this = this;

    _this['date'] = _date;
    _this['solar_system_id'] = solarSystemId;
    _this['type_id'] = typeId;
    _this['quantity'] = quantity;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMining200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMining200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMining200Ok} The populated <code>GetCharactersCharacterIdMining200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * date string
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * solar_system_id integer
   * @member {Number} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;
  /**
   * quantity integer
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;



  return exports;
}));

