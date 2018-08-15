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
    root.EveSwaggerInterface.GetCharactersCharacterIdMailRecipient = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdMailRecipient model module.
   * @module model/GetCharactersCharacterIdMailRecipient
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMailRecipient</code>.
   * recipient object
   * @alias module:model/GetCharactersCharacterIdMailRecipient
   * @class
   * @param recipientType {module:model/GetCharactersCharacterIdMailRecipient.RecipientTypeEnum} recipient_type string
   * @param recipientId {Number} recipient_id integer
   */
  var exports = function(recipientType, recipientId) {
    var _this = this;

    _this['recipient_type'] = recipientType;
    _this['recipient_id'] = recipientId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMailRecipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMailRecipient} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMailRecipient} The populated <code>GetCharactersCharacterIdMailRecipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('recipient_type')) {
        obj['recipient_type'] = ApiClient.convertToType(data['recipient_type'], 'String');
      }
      if (data.hasOwnProperty('recipient_id')) {
        obj['recipient_id'] = ApiClient.convertToType(data['recipient_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * recipient_type string
   * @member {module:model/GetCharactersCharacterIdMailRecipient.RecipientTypeEnum} recipient_type
   */
  exports.prototype['recipient_type'] = undefined;
  /**
   * recipient_id integer
   * @member {Number} recipient_id
   */
  exports.prototype['recipient_id'] = undefined;


  /**
   * Allowed values for the <code>recipient_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecipientTypeEnum = {
    /**
     * value: "alliance"
     * @const
     */
    "alliance": "alliance",
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
     * value: "mailing_list"
     * @const
     */
    "mailing_list": "mailing_list"  };


  return exports;
}));


