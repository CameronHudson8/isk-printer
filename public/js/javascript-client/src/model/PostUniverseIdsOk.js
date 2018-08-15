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
    define(['ApiClient', 'model/PostUniverseIdsAgent', 'model/PostUniverseIdsAlliance', 'model/PostUniverseIdsCharacter', 'model/PostUniverseIdsConstellation', 'model/PostUniverseIdsCorporation', 'model/PostUniverseIdsFaction', 'model/PostUniverseIdsInventoryType', 'model/PostUniverseIdsRegion', 'model/PostUniverseIdsStation', 'model/PostUniverseIdsSystem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostUniverseIdsAgent'), require('./PostUniverseIdsAlliance'), require('./PostUniverseIdsCharacter'), require('./PostUniverseIdsConstellation'), require('./PostUniverseIdsCorporation'), require('./PostUniverseIdsFaction'), require('./PostUniverseIdsInventoryType'), require('./PostUniverseIdsRegion'), require('./PostUniverseIdsStation'), require('./PostUniverseIdsSystem'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.PostUniverseIdsOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.PostUniverseIdsAgent, root.EveSwaggerInterface.PostUniverseIdsAlliance, root.EveSwaggerInterface.PostUniverseIdsCharacter, root.EveSwaggerInterface.PostUniverseIdsConstellation, root.EveSwaggerInterface.PostUniverseIdsCorporation, root.EveSwaggerInterface.PostUniverseIdsFaction, root.EveSwaggerInterface.PostUniverseIdsInventoryType, root.EveSwaggerInterface.PostUniverseIdsRegion, root.EveSwaggerInterface.PostUniverseIdsStation, root.EveSwaggerInterface.PostUniverseIdsSystem);
  }
}(this, function(ApiClient, PostUniverseIdsAgent, PostUniverseIdsAlliance, PostUniverseIdsCharacter, PostUniverseIdsConstellation, PostUniverseIdsCorporation, PostUniverseIdsFaction, PostUniverseIdsInventoryType, PostUniverseIdsRegion, PostUniverseIdsStation, PostUniverseIdsSystem) {
  'use strict';




  /**
   * The PostUniverseIdsOk model module.
   * @module model/PostUniverseIdsOk
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>PostUniverseIdsOk</code>.
   * 200 ok object
   * @alias module:model/PostUniverseIdsOk
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>PostUniverseIdsOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostUniverseIdsOk} obj Optional instance to populate.
   * @return {module:model/PostUniverseIdsOk} The populated <code>PostUniverseIdsOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agents')) {
        obj['agents'] = ApiClient.convertToType(data['agents'], [PostUniverseIdsAgent]);
      }
      if (data.hasOwnProperty('alliances')) {
        obj['alliances'] = ApiClient.convertToType(data['alliances'], [PostUniverseIdsAlliance]);
      }
      if (data.hasOwnProperty('characters')) {
        obj['characters'] = ApiClient.convertToType(data['characters'], [PostUniverseIdsCharacter]);
      }
      if (data.hasOwnProperty('constellations')) {
        obj['constellations'] = ApiClient.convertToType(data['constellations'], [PostUniverseIdsConstellation]);
      }
      if (data.hasOwnProperty('corporations')) {
        obj['corporations'] = ApiClient.convertToType(data['corporations'], [PostUniverseIdsCorporation]);
      }
      if (data.hasOwnProperty('factions')) {
        obj['factions'] = ApiClient.convertToType(data['factions'], [PostUniverseIdsFaction]);
      }
      if (data.hasOwnProperty('inventory_types')) {
        obj['inventory_types'] = ApiClient.convertToType(data['inventory_types'], [PostUniverseIdsInventoryType]);
      }
      if (data.hasOwnProperty('regions')) {
        obj['regions'] = ApiClient.convertToType(data['regions'], [PostUniverseIdsRegion]);
      }
      if (data.hasOwnProperty('systems')) {
        obj['systems'] = ApiClient.convertToType(data['systems'], [PostUniverseIdsSystem]);
      }
      if (data.hasOwnProperty('stations')) {
        obj['stations'] = ApiClient.convertToType(data['stations'], [PostUniverseIdsStation]);
      }
    }
    return obj;
  }

  /**
   * agents array
   * @member {Array.<module:model/PostUniverseIdsAgent>} agents
   */
  exports.prototype['agents'] = undefined;
  /**
   * alliances array
   * @member {Array.<module:model/PostUniverseIdsAlliance>} alliances
   */
  exports.prototype['alliances'] = undefined;
  /**
   * characters array
   * @member {Array.<module:model/PostUniverseIdsCharacter>} characters
   */
  exports.prototype['characters'] = undefined;
  /**
   * constellations array
   * @member {Array.<module:model/PostUniverseIdsConstellation>} constellations
   */
  exports.prototype['constellations'] = undefined;
  /**
   * corporations array
   * @member {Array.<module:model/PostUniverseIdsCorporation>} corporations
   */
  exports.prototype['corporations'] = undefined;
  /**
   * factions array
   * @member {Array.<module:model/PostUniverseIdsFaction>} factions
   */
  exports.prototype['factions'] = undefined;
  /**
   * inventory_types array
   * @member {Array.<module:model/PostUniverseIdsInventoryType>} inventory_types
   */
  exports.prototype['inventory_types'] = undefined;
  /**
   * regions array
   * @member {Array.<module:model/PostUniverseIdsRegion>} regions
   */
  exports.prototype['regions'] = undefined;
  /**
   * systems array
   * @member {Array.<module:model/PostUniverseIdsSystem>} systems
   */
  exports.prototype['systems'] = undefined;
  /**
   * stations array
   * @member {Array.<module:model/PostUniverseIdsStation>} stations
   */
  exports.prototype['stations'] = undefined;



  return exports;
}));


