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
    define(['ApiClient', 'model/GetCharactersCharacterIdMedalsGraphic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCharactersCharacterIdMedalsGraphic'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdMedals200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdMedalsGraphic);
  }
}(this, function(ApiClient, GetCharactersCharacterIdMedalsGraphic) {
  'use strict';




  /**
   * The GetCharactersCharacterIdMedals200Ok model module.
   * @module model/GetCharactersCharacterIdMedals200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdMedals200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdMedals200Ok
   * @class
   * @param medalId {Number} medal_id integer
   * @param title {String} title string
   * @param description {String} description string
   * @param corporationId {Number} corporation_id integer
   * @param issuerId {Number} issuer_id integer
   * @param _date {Date} date string
   * @param reason {String} reason string
   * @param status {module:model/GetCharactersCharacterIdMedals200Ok.StatusEnum} status string
   * @param graphics {Array.<module:model/GetCharactersCharacterIdMedalsGraphic>} graphics array
   */
  var exports = function(medalId, title, description, corporationId, issuerId, _date, reason, status, graphics) {
    var _this = this;

    _this['medal_id'] = medalId;
    _this['title'] = title;
    _this['description'] = description;
    _this['corporation_id'] = corporationId;
    _this['issuer_id'] = issuerId;
    _this['date'] = _date;
    _this['reason'] = reason;
    _this['status'] = status;
    _this['graphics'] = graphics;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdMedals200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdMedals200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdMedals200Ok} The populated <code>GetCharactersCharacterIdMedals200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('medal_id')) {
        obj['medal_id'] = ApiClient.convertToType(data['medal_id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Number');
      }
      if (data.hasOwnProperty('issuer_id')) {
        obj['issuer_id'] = ApiClient.convertToType(data['issuer_id'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('graphics')) {
        obj['graphics'] = ApiClient.convertToType(data['graphics'], [GetCharactersCharacterIdMedalsGraphic]);
      }
    }
    return obj;
  }

  /**
   * medal_id integer
   * @member {Number} medal_id
   */
  exports.prototype['medal_id'] = undefined;
  /**
   * title string
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * corporation_id integer
   * @member {Number} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * issuer_id integer
   * @member {Number} issuer_id
   */
  exports.prototype['issuer_id'] = undefined;
  /**
   * date string
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * reason string
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * status string
   * @member {module:model/GetCharactersCharacterIdMedals200Ok.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * graphics array
   * @member {Array.<module:model/GetCharactersCharacterIdMedalsGraphic>} graphics
   */
  exports.prototype['graphics'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "public"
     * @const
     */
    "public": "public",
    /**
     * value: "private"
     * @const
     */
    "private": "private"  };


  return exports;
}));


