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
    root.EveSwaggerInterface.GetCorporationsCorporationIdWallets200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdWallets200Ok model module.
   * @module model/GetCorporationsCorporationIdWallets200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdWallets200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdWallets200Ok
   * @class
   * @param division {Number} division integer
   * @param balance {Number} balance number
   */
  var exports = function(division, balance) {
    var _this = this;

    _this['division'] = division;
    _this['balance'] = balance;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdWallets200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdWallets200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdWallets200Ok} The populated <code>GetCorporationsCorporationIdWallets200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('division')) {
        obj['division'] = ApiClient.convertToType(data['division'], 'Number');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * division integer
   * @member {Number} division
   */
  exports.prototype['division'] = undefined;
  /**
   * balance number
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;



  return exports;
}));


