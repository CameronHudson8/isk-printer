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
    define(['ApiClient', 'model/GetUniverseConstellationsConstellationIdPosition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetUniverseConstellationsConstellationIdPosition'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseConstellationsConstellationIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetUniverseConstellationsConstellationIdPosition);
  }
}(this, function(ApiClient, GetUniverseConstellationsConstellationIdPosition) {
  'use strict';




  /**
   * The GetUniverseConstellationsConstellationIdOk model module.
   * @module model/GetUniverseConstellationsConstellationIdOk
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetUniverseConstellationsConstellationIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseConstellationsConstellationIdOk
   * @class
   * @param constellationId {Number} constellation_id integer
   * @param name {String} name string
   * @param position {module:model/GetUniverseConstellationsConstellationIdPosition} 
   * @param regionId {Number} The region this constellation is in
   * @param systems {Array.<Number>} systems array
   */
  var exports = function(constellationId, name, position, regionId, systems) {
    var _this = this;

    _this['constellation_id'] = constellationId;
    _this['name'] = name;
    _this['position'] = position;
    _this['region_id'] = regionId;
    _this['systems'] = systems;
  };

  /**
   * Constructs a <code>GetUniverseConstellationsConstellationIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseConstellationsConstellationIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseConstellationsConstellationIdOk} The populated <code>GetUniverseConstellationsConstellationIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('constellation_id')) {
        obj['constellation_id'] = ApiClient.convertToType(data['constellation_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = GetUniverseConstellationsConstellationIdPosition.constructFromObject(data['position']);
      }
      if (data.hasOwnProperty('region_id')) {
        obj['region_id'] = ApiClient.convertToType(data['region_id'], 'Number');
      }
      if (data.hasOwnProperty('systems')) {
        obj['systems'] = ApiClient.convertToType(data['systems'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * constellation_id integer
   * @member {Number} constellation_id
   */
  exports.prototype['constellation_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/GetUniverseConstellationsConstellationIdPosition} position
   */
  exports.prototype['position'] = undefined;
  /**
   * The region this constellation is in
   * @member {Number} region_id
   */
  exports.prototype['region_id'] = undefined;
  /**
   * systems array
   * @member {Array.<Number>} systems
   */
  exports.prototype['systems'] = undefined;



  return exports;
}));


