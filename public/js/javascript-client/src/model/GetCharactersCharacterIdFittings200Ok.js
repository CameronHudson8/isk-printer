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
    define(['ApiClient', 'model/GetCharactersCharacterIdFittingsItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdFittingsItem'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdFittings200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdFittingsItem);
  }
}(this, function(ApiClient, GetCharactersCharacterIdFittingsItem) {
  'use strict';




  /**
   * The GetCharactersCharacterIdFittings200Ok model module.
   * @module model/GetCharactersCharacterIdFittings200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdFittings200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdFittings200Ok
   * @class
   * @param fittingId {Number} fitting_id integer
   * @param name {String} name string
   * @param description {String} description string
   * @param shipTypeId {Number} ship_type_id integer
   * @param items {Array.<module:model/GetCharactersCharacterIdFittingsItem>} items array
   */
  var exports = function(fittingId, name, description, shipTypeId, items) {
    var _this = this;

    _this['fitting_id'] = fittingId;
    _this['name'] = name;
    _this['description'] = description;
    _this['ship_type_id'] = shipTypeId;
    _this['items'] = items;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdFittings200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdFittings200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdFittings200Ok} The populated <code>GetCharactersCharacterIdFittings200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fitting_id')) {
        obj['fitting_id'] = ApiClient.convertToType(data['fitting_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('ship_type_id')) {
        obj['ship_type_id'] = ApiClient.convertToType(data['ship_type_id'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [GetCharactersCharacterIdFittingsItem]);
      }
    }
    return obj;
  }

  /**
   * fitting_id integer
   * @member {Number} fitting_id
   */
  exports.prototype['fitting_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * ship_type_id integer
   * @member {Number} ship_type_id
   */
  exports.prototype['ship_type_id'] = undefined;
  /**
   * items array
   * @member {Array.<module:model/GetCharactersCharacterIdFittingsItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));

