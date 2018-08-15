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
    root.EveSwaggerInterface.GetCharactersCharacterIdOpportunities200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdOpportunities200Ok model module.
   * @module model/GetCharactersCharacterIdOpportunities200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdOpportunities200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdOpportunities200Ok
   * @class
   * @param taskId {Number} task_id integer
   * @param completedAt {Date} completed_at string
   */
  var exports = function(taskId, completedAt) {
    var _this = this;

    _this['task_id'] = taskId;
    _this['completed_at'] = completedAt;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdOpportunities200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdOpportunities200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdOpportunities200Ok} The populated <code>GetCharactersCharacterIdOpportunities200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('task_id')) {
        obj['task_id'] = ApiClient.convertToType(data['task_id'], 'Number');
      }
      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * task_id integer
   * @member {Number} task_id
   */
  exports.prototype['task_id'] = undefined;
  /**
   * completed_at string
   * @member {Date} completed_at
   */
  exports.prototype['completed_at'] = undefined;



  return exports;
}));


