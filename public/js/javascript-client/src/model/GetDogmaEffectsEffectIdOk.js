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
    define(['ApiClient', 'model/GetDogmaEffectsEffectIdModifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetDogmaEffectsEffectIdModifier'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetDogmaEffectsEffectIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetDogmaEffectsEffectIdModifier);
  }
}(this, function(ApiClient, GetDogmaEffectsEffectIdModifier) {
  'use strict';




  /**
   * The GetDogmaEffectsEffectIdOk model module.
   * @module model/GetDogmaEffectsEffectIdOk
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetDogmaEffectsEffectIdOk</code>.
   * 200 ok object
   * @alias module:model/GetDogmaEffectsEffectIdOk
   * @class
   * @param effectId {Number} effect_id integer
   */
  var exports = function(effectId) {
    var _this = this;

    _this['effect_id'] = effectId;




















  };

  /**
   * Constructs a <code>GetDogmaEffectsEffectIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDogmaEffectsEffectIdOk} obj Optional instance to populate.
   * @return {module:model/GetDogmaEffectsEffectIdOk} The populated <code>GetDogmaEffectsEffectIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('effect_id')) {
        obj['effect_id'] = ApiClient.convertToType(data['effect_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('icon_id')) {
        obj['icon_id'] = ApiClient.convertToType(data['icon_id'], 'Number');
      }
      if (data.hasOwnProperty('effect_category')) {
        obj['effect_category'] = ApiClient.convertToType(data['effect_category'], 'Number');
      }
      if (data.hasOwnProperty('pre_expression')) {
        obj['pre_expression'] = ApiClient.convertToType(data['pre_expression'], 'Number');
      }
      if (data.hasOwnProperty('post_expression')) {
        obj['post_expression'] = ApiClient.convertToType(data['post_expression'], 'Number');
      }
      if (data.hasOwnProperty('is_offensive')) {
        obj['is_offensive'] = ApiClient.convertToType(data['is_offensive'], 'Boolean');
      }
      if (data.hasOwnProperty('is_assistance')) {
        obj['is_assistance'] = ApiClient.convertToType(data['is_assistance'], 'Boolean');
      }
      if (data.hasOwnProperty('disallow_auto_repeat')) {
        obj['disallow_auto_repeat'] = ApiClient.convertToType(data['disallow_auto_repeat'], 'Boolean');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('is_warp_safe')) {
        obj['is_warp_safe'] = ApiClient.convertToType(data['is_warp_safe'], 'Boolean');
      }
      if (data.hasOwnProperty('range_chance')) {
        obj['range_chance'] = ApiClient.convertToType(data['range_chance'], 'Boolean');
      }
      if (data.hasOwnProperty('electronic_chance')) {
        obj['electronic_chance'] = ApiClient.convertToType(data['electronic_chance'], 'Boolean');
      }
      if (data.hasOwnProperty('duration_attribute_id')) {
        obj['duration_attribute_id'] = ApiClient.convertToType(data['duration_attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('tracking_speed_attribute_id')) {
        obj['tracking_speed_attribute_id'] = ApiClient.convertToType(data['tracking_speed_attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('discharge_attribute_id')) {
        obj['discharge_attribute_id'] = ApiClient.convertToType(data['discharge_attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('range_attribute_id')) {
        obj['range_attribute_id'] = ApiClient.convertToType(data['range_attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('falloff_attribute_id')) {
        obj['falloff_attribute_id'] = ApiClient.convertToType(data['falloff_attribute_id'], 'Number');
      }
      if (data.hasOwnProperty('modifiers')) {
        obj['modifiers'] = ApiClient.convertToType(data['modifiers'], [GetDogmaEffectsEffectIdModifier]);
      }
    }
    return obj;
  }

  /**
   * effect_id integer
   * @member {Number} effect_id
   */
  exports.prototype['effect_id'] = undefined;
  /**
   * name string
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * display_name string
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * description string
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * icon_id integer
   * @member {Number} icon_id
   */
  exports.prototype['icon_id'] = undefined;
  /**
   * effect_category integer
   * @member {Number} effect_category
   */
  exports.prototype['effect_category'] = undefined;
  /**
   * pre_expression integer
   * @member {Number} pre_expression
   */
  exports.prototype['pre_expression'] = undefined;
  /**
   * post_expression integer
   * @member {Number} post_expression
   */
  exports.prototype['post_expression'] = undefined;
  /**
   * is_offensive boolean
   * @member {Boolean} is_offensive
   */
  exports.prototype['is_offensive'] = undefined;
  /**
   * is_assistance boolean
   * @member {Boolean} is_assistance
   */
  exports.prototype['is_assistance'] = undefined;
  /**
   * disallow_auto_repeat boolean
   * @member {Boolean} disallow_auto_repeat
   */
  exports.prototype['disallow_auto_repeat'] = undefined;
  /**
   * published boolean
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * is_warp_safe boolean
   * @member {Boolean} is_warp_safe
   */
  exports.prototype['is_warp_safe'] = undefined;
  /**
   * range_chance boolean
   * @member {Boolean} range_chance
   */
  exports.prototype['range_chance'] = undefined;
  /**
   * electronic_chance boolean
   * @member {Boolean} electronic_chance
   */
  exports.prototype['electronic_chance'] = undefined;
  /**
   * duration_attribute_id integer
   * @member {Number} duration_attribute_id
   */
  exports.prototype['duration_attribute_id'] = undefined;
  /**
   * tracking_speed_attribute_id integer
   * @member {Number} tracking_speed_attribute_id
   */
  exports.prototype['tracking_speed_attribute_id'] = undefined;
  /**
   * discharge_attribute_id integer
   * @member {Number} discharge_attribute_id
   */
  exports.prototype['discharge_attribute_id'] = undefined;
  /**
   * range_attribute_id integer
   * @member {Number} range_attribute_id
   */
  exports.prototype['range_attribute_id'] = undefined;
  /**
   * falloff_attribute_id integer
   * @member {Number} falloff_attribute_id
   */
  exports.prototype['falloff_attribute_id'] = undefined;
  /**
   * modifiers array
   * @member {Array.<module:model/GetDogmaEffectsEffectIdModifier>} modifiers
   */
  exports.prototype['modifiers'] = undefined;



  return exports;
}));


