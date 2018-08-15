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
    root.EveSwaggerInterface.GetCharactersCharacterIdSkillsSkill = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdSkillsSkill model module.
   * @module model/GetCharactersCharacterIdSkillsSkill
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdSkillsSkill</code>.
   * skill object
   * @alias module:model/GetCharactersCharacterIdSkillsSkill
   * @class
   * @param skillId {Number} skill_id integer
   * @param skillpointsInSkill {Number} skillpoints_in_skill integer
   * @param trainedSkillLevel {Number} trained_skill_level integer
   * @param activeSkillLevel {Number} active_skill_level integer
   */
  var exports = function(skillId, skillpointsInSkill, trainedSkillLevel, activeSkillLevel) {
    var _this = this;

    _this['skill_id'] = skillId;
    _this['skillpoints_in_skill'] = skillpointsInSkill;
    _this['trained_skill_level'] = trainedSkillLevel;
    _this['active_skill_level'] = activeSkillLevel;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdSkillsSkill</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdSkillsSkill} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdSkillsSkill} The populated <code>GetCharactersCharacterIdSkillsSkill</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('skill_id')) {
        obj['skill_id'] = ApiClient.convertToType(data['skill_id'], 'Number');
      }
      if (data.hasOwnProperty('skillpoints_in_skill')) {
        obj['skillpoints_in_skill'] = ApiClient.convertToType(data['skillpoints_in_skill'], 'Number');
      }
      if (data.hasOwnProperty('trained_skill_level')) {
        obj['trained_skill_level'] = ApiClient.convertToType(data['trained_skill_level'], 'Number');
      }
      if (data.hasOwnProperty('active_skill_level')) {
        obj['active_skill_level'] = ApiClient.convertToType(data['active_skill_level'], 'Number');
      }
    }
    return obj;
  }

  /**
   * skill_id integer
   * @member {Number} skill_id
   */
  exports.prototype['skill_id'] = undefined;
  /**
   * skillpoints_in_skill integer
   * @member {Number} skillpoints_in_skill
   */
  exports.prototype['skillpoints_in_skill'] = undefined;
  /**
   * trained_skill_level integer
   * @member {Number} trained_skill_level
   */
  exports.prototype['trained_skill_level'] = undefined;
  /**
   * active_skill_level integer
   * @member {Number} active_skill_level
   */
  exports.prototype['active_skill_level'] = undefined;



  return exports;
}));

