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
    root.EveSwaggerInterface.GetMarketsStructuresStructureId200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetMarketsStructuresStructureId200Ok model module.
   * @module model/GetMarketsStructuresStructureId200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetMarketsStructuresStructureId200Ok</code>.
   * 200 ok object
   * @alias module:model/GetMarketsStructuresStructureId200Ok
   * @class
   * @param orderId {Number} order_id integer
   * @param typeId {Number} type_id integer
   * @param locationId {Number} location_id integer
   * @param volumeTotal {Number} volume_total integer
   * @param volumeRemain {Number} volume_remain integer
   * @param minVolume {Number} min_volume integer
   * @param price {Number} price number
   * @param isBuyOrder {Boolean} is_buy_order boolean
   * @param duration {Number} duration integer
   * @param issued {Date} issued string
   * @param range {module:model/GetMarketsStructuresStructureId200Ok.RangeEnum} range string
   */
  var exports = function(orderId, typeId, locationId, volumeTotal, volumeRemain, minVolume, price, isBuyOrder, duration, issued, range) {
    var _this = this;

    _this['order_id'] = orderId;
    _this['type_id'] = typeId;
    _this['location_id'] = locationId;
    _this['volume_total'] = volumeTotal;
    _this['volume_remain'] = volumeRemain;
    _this['min_volume'] = minVolume;
    _this['price'] = price;
    _this['is_buy_order'] = isBuyOrder;
    _this['duration'] = duration;
    _this['issued'] = issued;
    _this['range'] = range;
  };

  /**
   * Constructs a <code>GetMarketsStructuresStructureId200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMarketsStructuresStructureId200Ok} obj Optional instance to populate.
   * @return {module:model/GetMarketsStructuresStructureId200Ok} The populated <code>GetMarketsStructuresStructureId200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Number');
      }
      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Number');
      }
      if (data.hasOwnProperty('volume_total')) {
        obj['volume_total'] = ApiClient.convertToType(data['volume_total'], 'Number');
      }
      if (data.hasOwnProperty('volume_remain')) {
        obj['volume_remain'] = ApiClient.convertToType(data['volume_remain'], 'Number');
      }
      if (data.hasOwnProperty('min_volume')) {
        obj['min_volume'] = ApiClient.convertToType(data['min_volume'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('is_buy_order')) {
        obj['is_buy_order'] = ApiClient.convertToType(data['is_buy_order'], 'Boolean');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('issued')) {
        obj['issued'] = ApiClient.convertToType(data['issued'], 'Date');
      }
      if (data.hasOwnProperty('range')) {
        obj['range'] = ApiClient.convertToType(data['range'], 'String');
      }
    }
    return obj;
  }

  /**
   * order_id integer
   * @member {Number} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * type_id integer
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;
  /**
   * location_id integer
   * @member {Number} location_id
   */
  exports.prototype['location_id'] = undefined;
  /**
   * volume_total integer
   * @member {Number} volume_total
   */
  exports.prototype['volume_total'] = undefined;
  /**
   * volume_remain integer
   * @member {Number} volume_remain
   */
  exports.prototype['volume_remain'] = undefined;
  /**
   * min_volume integer
   * @member {Number} min_volume
   */
  exports.prototype['min_volume'] = undefined;
  /**
   * price number
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * is_buy_order boolean
   * @member {Boolean} is_buy_order
   */
  exports.prototype['is_buy_order'] = undefined;
  /**
   * duration integer
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * issued string
   * @member {Date} issued
   */
  exports.prototype['issued'] = undefined;
  /**
   * range string
   * @member {module:model/GetMarketsStructuresStructureId200Ok.RangeEnum} range
   */
  exports.prototype['range'] = undefined;


  /**
   * Allowed values for the <code>range</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RangeEnum = {
    /**
     * value: "station"
     * @const
     */
    "station": "station",
    /**
     * value: "region"
     * @const
     */
    "region": "region",
    /**
     * value: "solarsystem"
     * @const
     */
    "solarsystem": "solarsystem",
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "3"
     * @const
     */
    "3": "3",
    /**
     * value: "4"
     * @const
     */
    "4": "4",
    /**
     * value: "5"
     * @const
     */
    "5": "5",
    /**
     * value: "10"
     * @const
     */
    "10": "10",
    /**
     * value: "20"
     * @const
     */
    "20": "20",
    /**
     * value: "30"
     * @const
     */
    "30": "30",
    /**
     * value: "40"
     * @const
     */
    "40": "40"  };


  return exports;
}));

