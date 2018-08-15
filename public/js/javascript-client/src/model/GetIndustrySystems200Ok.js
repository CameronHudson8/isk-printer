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
    define(['ApiClient', 'model/GetIndustrySystemsCostIndice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetIndustrySystemsCostIndice'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetIndustrySystems200Ok = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetIndustrySystemsCostIndice);
  }
}(this, function(ApiClient, GetIndustrySystemsCostIndice) {
  'use strict';




  /**
   * The GetIndustrySystems200Ok model module.
   * @module model/GetIndustrySystems200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetIndustrySystems200Ok</code>.
   * 200 ok object
   * @alias module:model/GetIndustrySystems200Ok
   * @class
   * @param solarSystemId {Number} solar_system_id integer
   * @param costIndices {Array.<module:model/GetIndustrySystemsCostIndice>} cost_indices array
   */
  var exports = function(solarSystemId, costIndices) {
    var _this = this;

    _this['solar_system_id'] = solarSystemId;
    _this['cost_indices'] = costIndices;
  };

  /**
   * Constructs a <code>GetIndustrySystems200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetIndustrySystems200Ok} obj Optional instance to populate.
   * @return {module:model/GetIndustrySystems200Ok} The populated <code>GetIndustrySystems200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Number');
      }
      if (data.hasOwnProperty('cost_indices')) {
        obj['cost_indices'] = ApiClient.convertToType(data['cost_indices'], [GetIndustrySystemsCostIndice]);
      }
    }
    return obj;
  }

  /**
   * solar_system_id integer
   * @member {Number} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * cost_indices array
   * @member {Array.<module:model/GetIndustrySystemsCostIndice>} cost_indices
   */
  exports.prototype['cost_indices'] = undefined;



  return exports;
}));


