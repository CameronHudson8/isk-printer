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
    root.EveSwaggerInterface.PutFleetsFleetIdNewSettings = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PutFleetsFleetIdNewSettings model module.
   * @module model/PutFleetsFleetIdNewSettings
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>PutFleetsFleetIdNewSettings</code>.
   * new_settings object
   * @alias module:model/PutFleetsFleetIdNewSettings
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PutFleetsFleetIdNewSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutFleetsFleetIdNewSettings} obj Optional instance to populate.
   * @return {module:model/PutFleetsFleetIdNewSettings} The populated <code>PutFleetsFleetIdNewSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('motd')) {
        obj['motd'] = ApiClient.convertToType(data['motd'], 'String');
      }
      if (data.hasOwnProperty('is_free_move')) {
        obj['is_free_move'] = ApiClient.convertToType(data['is_free_move'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * New fleet MOTD in CCP flavoured HTML
   * @member {String} motd
   */
  exports.prototype['motd'] = undefined;
  /**
   * Should free-move be enabled in the fleet
   * @member {Boolean} is_free_move
   */
  exports.prototype['is_free_move'] = undefined;



  return exports;
}));


