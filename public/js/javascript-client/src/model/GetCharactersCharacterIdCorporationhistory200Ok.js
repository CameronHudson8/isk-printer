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
    root.EveSwaggerInterface.GetCharactersCharacterIdCorporationhistory200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdCorporationhistory200Ok model module.
   * @module model/GetCharactersCharacterIdCorporationhistory200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdCorporationhistory200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdCorporationhistory200Ok
   * @class
   * @param startDate {Date} start_date string
   * @param corporationId {Number} corporation_id integer
   * @param recordId {Number} An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
   */
  var exports = function(startDate, corporationId, recordId) {
    var _this = this;

    _this['start_date'] = startDate;
    _this['corporation_id'] = corporationId;

    _this['record_id'] = recordId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdCorporationhistory200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdCorporationhistory200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdCorporationhistory200Ok} The populated <code>GetCharactersCharacterIdCorporationhistory200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Number');
      }
      if (data.hasOwnProperty('is_deleted')) {
        obj['is_deleted'] = ApiClient.convertToType(data['is_deleted'], 'Boolean');
      }
      if (data.hasOwnProperty('record_id')) {
        obj['record_id'] = ApiClient.convertToType(data['record_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * start_date string
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * corporation_id integer
   * @member {Number} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * True if the corporation has been deleted
   * @member {Boolean} is_deleted
   */
  exports.prototype['is_deleted'] = undefined;
  /**
   * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
   * @member {Number} record_id
   */
  exports.prototype['record_id'] = undefined;



  return exports;
}));


