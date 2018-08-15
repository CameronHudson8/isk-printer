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
    root.EveSwaggerInterface.GetWarsWarIdKillmails200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetWarsWarIdKillmails200Ok model module.
   * @module model/GetWarsWarIdKillmails200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetWarsWarIdKillmails200Ok</code>.
   * 200 ok object
   * @alias module:model/GetWarsWarIdKillmails200Ok
   * @class
   * @param killmailId {Number} ID of this killmail
   * @param killmailHash {String} A hash of this killmail
   */
  var exports = function(killmailId, killmailHash) {
    var _this = this;

    _this['killmail_id'] = killmailId;
    _this['killmail_hash'] = killmailHash;
  };

  /**
   * Constructs a <code>GetWarsWarIdKillmails200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWarsWarIdKillmails200Ok} obj Optional instance to populate.
   * @return {module:model/GetWarsWarIdKillmails200Ok} The populated <code>GetWarsWarIdKillmails200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('killmail_id')) {
        obj['killmail_id'] = ApiClient.convertToType(data['killmail_id'], 'Number');
      }
      if (data.hasOwnProperty('killmail_hash')) {
        obj['killmail_hash'] = ApiClient.convertToType(data['killmail_hash'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of this killmail
   * @member {Number} killmail_id
   */
  exports.prototype['killmail_id'] = undefined;
  /**
   * A hash of this killmail
   * @member {String} killmail_hash
   */
  exports.prototype['killmail_hash'] = undefined;



  return exports;
}));

