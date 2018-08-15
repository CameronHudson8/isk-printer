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
    root.EveSwaggerInterface.PutCharactersCharacterIdMailMailIdBadRequest = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PutCharactersCharacterIdMailMailIdBadRequest model module.
   * @module model/PutCharactersCharacterIdMailMailIdBadRequest
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>PutCharactersCharacterIdMailMailIdBadRequest</code>.
   * Bad request
   * @alias module:model/PutCharactersCharacterIdMailMailIdBadRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PutCharactersCharacterIdMailMailIdBadRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutCharactersCharacterIdMailMailIdBadRequest} obj Optional instance to populate.
   * @return {module:model/PutCharactersCharacterIdMailMailIdBadRequest} The populated <code>PutCharactersCharacterIdMailMailIdBadRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
    }
    return obj;
  }

  /**
   * Bad request message
   * @member {String} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


