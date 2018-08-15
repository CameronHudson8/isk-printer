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
    root.EveSwaggerInterface.GetAlliancesAllianceIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAlliancesAllianceIdOk model module.
   * @module model/GetAlliancesAllianceIdOk
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetAlliancesAllianceIdOk</code>.
   * 200 ok object
   * @alias module:model/GetAlliancesAllianceIdOk
   * @class
   * @param name {String} the full name of the alliance
   * @param creatorId {Number} ID of the character that created the alliance
   * @param creatorCorporationId {Number} ID of the corporation that created the alliance
   * @param ticker {String} the short name of the alliance
   * @param dateFounded {Date} date_founded string
   */
  var exports = function(name, creatorId, creatorCorporationId, ticker, dateFounded) {
    var _this = this;

    _this['name'] = name;
    _this['creator_id'] = creatorId;
    _this['creator_corporation_id'] = creatorCorporationId;
    _this['ticker'] = ticker;

    _this['date_founded'] = dateFounded;

  };

  /**
   * Constructs a <code>GetAlliancesAllianceIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAlliancesAllianceIdOk} obj Optional instance to populate.
   * @return {module:model/GetAlliancesAllianceIdOk} The populated <code>GetAlliancesAllianceIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('creator_id')) {
        obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');
      }
      if (data.hasOwnProperty('creator_corporation_id')) {
        obj['creator_corporation_id'] = ApiClient.convertToType(data['creator_corporation_id'], 'Number');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('executor_corporation_id')) {
        obj['executor_corporation_id'] = ApiClient.convertToType(data['executor_corporation_id'], 'Number');
      }
      if (data.hasOwnProperty('date_founded')) {
        obj['date_founded'] = ApiClient.convertToType(data['date_founded'], 'Date');
      }
      if (data.hasOwnProperty('faction_id')) {
        obj['faction_id'] = ApiClient.convertToType(data['faction_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * the full name of the alliance
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * ID of the character that created the alliance
   * @member {Number} creator_id
   */
  exports.prototype['creator_id'] = undefined;
  /**
   * ID of the corporation that created the alliance
   * @member {Number} creator_corporation_id
   */
  exports.prototype['creator_corporation_id'] = undefined;
  /**
   * the short name of the alliance
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * the executor corporation ID, if this alliance is not closed
   * @member {Number} executor_corporation_id
   */
  exports.prototype['executor_corporation_id'] = undefined;
  /**
   * date_founded string
   * @member {Date} date_founded
   */
  exports.prototype['date_founded'] = undefined;
  /**
   * Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare
   * @member {Number} faction_id
   */
  exports.prototype['faction_id'] = undefined;



  return exports;
}));


