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
    root.EveSwaggerInterface.GetCorporationsCorporationIdOrdersHistory200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdOrdersHistory200Ok model module.
   * @module model/GetCorporationsCorporationIdOrdersHistory200Ok
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdOrdersHistory200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdOrdersHistory200Ok
   * @class
   * @param orderId {Number} Unique order ID
   * @param typeId {Number} The type ID of the item transacted in this order
   * @param regionId {Number} ID of the region where order was placed
   * @param locationId {Number} ID of the location where order was placed
   * @param range {module:model/GetCorporationsCorporationIdOrdersHistory200Ok.RangeEnum} Valid order range, numbers are ranges in jumps
   * @param price {Number} Cost per unit for this order
   * @param volumeTotal {Number} Quantity of items required or offered at time order was placed
   * @param volumeRemain {Number} Quantity of items still required or offered
   * @param issued {Date} Date and time when this order was issued
   * @param duration {Number} Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
   * @param state {module:model/GetCorporationsCorporationIdOrdersHistory200Ok.StateEnum} Current order state
   * @param walletDivision {Number} The corporation wallet division used for this order.
   */
  var exports = function(orderId, typeId, regionId, locationId, range, price, volumeTotal, volumeRemain, issued, duration, state, walletDivision) {
    var _this = this;

    _this['order_id'] = orderId;
    _this['type_id'] = typeId;
    _this['region_id'] = regionId;
    _this['location_id'] = locationId;
    _this['range'] = range;
    _this['price'] = price;
    _this['volume_total'] = volumeTotal;
    _this['volume_remain'] = volumeRemain;
    _this['issued'] = issued;



    _this['duration'] = duration;
    _this['state'] = state;
    _this['wallet_division'] = walletDivision;
  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdOrdersHistory200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdOrdersHistory200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdOrdersHistory200Ok} The populated <code>GetCorporationsCorporationIdOrdersHistory200Ok</code> instance.
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
      if (data.hasOwnProperty('region_id')) {
        obj['region_id'] = ApiClient.convertToType(data['region_id'], 'Number');
      }
      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Number');
      }
      if (data.hasOwnProperty('range')) {
        obj['range'] = ApiClient.convertToType(data['range'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('volume_total')) {
        obj['volume_total'] = ApiClient.convertToType(data['volume_total'], 'Number');
      }
      if (data.hasOwnProperty('volume_remain')) {
        obj['volume_remain'] = ApiClient.convertToType(data['volume_remain'], 'Number');
      }
      if (data.hasOwnProperty('issued')) {
        obj['issued'] = ApiClient.convertToType(data['issued'], 'Date');
      }
      if (data.hasOwnProperty('is_buy_order')) {
        obj['is_buy_order'] = ApiClient.convertToType(data['is_buy_order'], 'Boolean');
      }
      if (data.hasOwnProperty('min_volume')) {
        obj['min_volume'] = ApiClient.convertToType(data['min_volume'], 'Number');
      }
      if (data.hasOwnProperty('escrow')) {
        obj['escrow'] = ApiClient.convertToType(data['escrow'], 'Number');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('wallet_division')) {
        obj['wallet_division'] = ApiClient.convertToType(data['wallet_division'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique order ID
   * @member {Number} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * The type ID of the item transacted in this order
   * @member {Number} type_id
   */
  exports.prototype['type_id'] = undefined;
  /**
   * ID of the region where order was placed
   * @member {Number} region_id
   */
  exports.prototype['region_id'] = undefined;
  /**
   * ID of the location where order was placed
   * @member {Number} location_id
   */
  exports.prototype['location_id'] = undefined;
  /**
   * Valid order range, numbers are ranges in jumps
   * @member {module:model/GetCorporationsCorporationIdOrdersHistory200Ok.RangeEnum} range
   */
  exports.prototype['range'] = undefined;
  /**
   * Cost per unit for this order
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Quantity of items required or offered at time order was placed
   * @member {Number} volume_total
   */
  exports.prototype['volume_total'] = undefined;
  /**
   * Quantity of items still required or offered
   * @member {Number} volume_remain
   */
  exports.prototype['volume_remain'] = undefined;
  /**
   * Date and time when this order was issued
   * @member {Date} issued
   */
  exports.prototype['issued'] = undefined;
  /**
   * True if the order is a bid (buy) order
   * @member {Boolean} is_buy_order
   */
  exports.prototype['is_buy_order'] = undefined;
  /**
   * For buy orders, the minimum quantity that will be accepted in a matching sell order
   * @member {Number} min_volume
   */
  exports.prototype['min_volume'] = undefined;
  /**
   * For buy orders, the amount of ISK in escrow
   * @member {Number} escrow
   */
  exports.prototype['escrow'] = undefined;
  /**
   * Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Current order state
   * @member {module:model/GetCorporationsCorporationIdOrdersHistory200Ok.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The corporation wallet division used for this order.
   * @member {Number} wallet_division
   */
  exports.prototype['wallet_division'] = undefined;


  /**
   * Allowed values for the <code>range</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RangeEnum = {
    /**
     * value: "1"
     * @const
     */
    "1": "1",
    /**
     * value: "10"
     * @const
     */
    "10": "10",
    /**
     * value: "2"
     * @const
     */
    "2": "2",
    /**
     * value: "20"
     * @const
     */
    "20": "20",
    /**
     * value: "3"
     * @const
     */
    "3": "3",
    /**
     * value: "30"
     * @const
     */
    "30": "30",
    /**
     * value: "4"
     * @const
     */
    "4": "4",
    /**
     * value: "40"
     * @const
     */
    "40": "40",
    /**
     * value: "5"
     * @const
     */
    "5": "5",
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
     * value: "station"
     * @const
     */
    "station": "station"  };

  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled",
    /**
     * value: "expired"
     * @const
     */
    "expired": "expired"  };


  return exports;
}));

