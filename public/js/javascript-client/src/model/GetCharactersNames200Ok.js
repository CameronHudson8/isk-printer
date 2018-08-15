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
    root.EveSwaggerInterface.GetCharactersNames200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersNames200Ok model module.
   * @module model/GetCharactersNames200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersNames200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersNames200Ok
   * @class
   * @param characterId {Number} character_id integer
   * @param characterName {String} character_name string
   */
  var exports = function(characterId, characterName) {
    var _this = this;

    _this['character_id'] = characterId;
    _this['character_name'] = characterName;
  };

  /**
   * Constructs a <code>GetCharactersNames200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersNames200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersNames200Ok} The populated <code>GetCharactersNames200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('character_id')) {
        obj['character_id'] = ApiClient.convertToType(data['character_id'], 'Number');
      }
      if (data.hasOwnProperty('character_name')) {
        obj['character_name'] = ApiClient.convertToType(data['character_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * character_id integer
   * @member {Number} character_id
   */
  exports.prototype['character_id'] = undefined;
  /**
   * character_name string
   * @member {String} character_name
   */
  exports.prototype['character_name'] = undefined;



  return exports;
}));


