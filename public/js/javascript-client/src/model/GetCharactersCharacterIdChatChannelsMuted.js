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
    root.EveSwaggerInterface.GetCharactersCharacterIdChatChannelsMuted = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdChatChannelsMuted model module.
   * @module model/GetCharactersCharacterIdChatChannelsMuted
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdChatChannelsMuted</code>.
   * muted object
   * @alias module:model/GetCharactersCharacterIdChatChannelsMuted
   * @class
   * @param accessorId {Number} ID of a muted channel member
   * @param accessorType {module:model/GetCharactersCharacterIdChatChannelsMuted.AccessorTypeEnum} accessor_type string
   */
  var exports = function(accessorId, accessorType) {
    var _this = this;

    _this['accessor_id'] = accessorId;
    _this['accessor_type'] = accessorType;


  };

  /**
   * Constructs a <code>GetCharactersCharacterIdChatChannelsMuted</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdChatChannelsMuted} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdChatChannelsMuted} The populated <code>GetCharactersCharacterIdChatChannelsMuted</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessor_id')) {
        obj['accessor_id'] = ApiClient.convertToType(data['accessor_id'], 'Number');
      }
      if (data.hasOwnProperty('accessor_type')) {
        obj['accessor_type'] = ApiClient.convertToType(data['accessor_type'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('end_at')) {
        obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * ID of a muted channel member
   * @member {Number} accessor_id
   */
  exports.prototype['accessor_id'] = undefined;
  /**
   * accessor_type string
   * @member {module:model/GetCharactersCharacterIdChatChannelsMuted.AccessorTypeEnum} accessor_type
   */
  exports.prototype['accessor_type'] = undefined;
  /**
   * Reason this accessor is muted
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Time at which this accessor will no longer be muted
   * @member {Date} end_at
   */
  exports.prototype['end_at'] = undefined;


  /**
   * Allowed values for the <code>accessor_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessorTypeEnum = {
    /**
     * value: "character"
     * @const
     */
    "character": "character",
    /**
     * value: "corporation"
     * @const
     */
    "corporation": "corporation",
    /**
     * value: "alliance"
     * @const
     */
    "alliance": "alliance"  };


  return exports;
}));


