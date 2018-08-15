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
    root.EveSwaggerInterface.GetFwLeaderboardsCorporationsYesterday1 = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetFwLeaderboardsCorporationsYesterday1 model module.
   * @module model/GetFwLeaderboardsCorporationsYesterday1
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCorporationsYesterday1</code>.
   * yesterday object
   * @alias module:model/GetFwLeaderboardsCorporationsYesterday1
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetFwLeaderboardsCorporationsYesterday1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCorporationsYesterday1} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCorporationsYesterday1} The populated <code>GetFwLeaderboardsCorporationsYesterday1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * corporation_id integer
   * @member {Number} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * Amount of victory points
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));


