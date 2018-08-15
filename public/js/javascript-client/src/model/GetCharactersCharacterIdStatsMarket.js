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
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsMarket = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdStatsMarket model module.
   * @module model/GetCharactersCharacterIdStatsMarket
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsMarket</code>.
   * market object
   * @alias module:model/GetCharactersCharacterIdStatsMarket
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsMarket</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsMarket} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsMarket} The populated <code>GetCharactersCharacterIdStatsMarket</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accept_contracts_courier')) {
        obj['accept_contracts_courier'] = ApiClient.convertToType(data['accept_contracts_courier'], 'Number');
      }
      if (data.hasOwnProperty('accept_contracts_item_exchange')) {
        obj['accept_contracts_item_exchange'] = ApiClient.convertToType(data['accept_contracts_item_exchange'], 'Number');
      }
      if (data.hasOwnProperty('buy_orders_placed')) {
        obj['buy_orders_placed'] = ApiClient.convertToType(data['buy_orders_placed'], 'Number');
      }
      if (data.hasOwnProperty('cancel_market_order')) {
        obj['cancel_market_order'] = ApiClient.convertToType(data['cancel_market_order'], 'Number');
      }
      if (data.hasOwnProperty('create_contracts_auction')) {
        obj['create_contracts_auction'] = ApiClient.convertToType(data['create_contracts_auction'], 'Number');
      }
      if (data.hasOwnProperty('create_contracts_courier')) {
        obj['create_contracts_courier'] = ApiClient.convertToType(data['create_contracts_courier'], 'Number');
      }
      if (data.hasOwnProperty('create_contracts_item_exchange')) {
        obj['create_contracts_item_exchange'] = ApiClient.convertToType(data['create_contracts_item_exchange'], 'Number');
      }
      if (data.hasOwnProperty('deliver_courier_contract')) {
        obj['deliver_courier_contract'] = ApiClient.convertToType(data['deliver_courier_contract'], 'Number');
      }
      if (data.hasOwnProperty('isk_gained')) {
        obj['isk_gained'] = ApiClient.convertToType(data['isk_gained'], 'Number');
      }
      if (data.hasOwnProperty('isk_spent')) {
        obj['isk_spent'] = ApiClient.convertToType(data['isk_spent'], 'Number');
      }
      if (data.hasOwnProperty('modify_market_order')) {
        obj['modify_market_order'] = ApiClient.convertToType(data['modify_market_order'], 'Number');
      }
      if (data.hasOwnProperty('search_contracts')) {
        obj['search_contracts'] = ApiClient.convertToType(data['search_contracts'], 'Number');
      }
      if (data.hasOwnProperty('sell_orders_placed')) {
        obj['sell_orders_placed'] = ApiClient.convertToType(data['sell_orders_placed'], 'Number');
      }
    }
    return obj;
  }

  /**
   * accept_contracts_courier integer
   * @member {Number} accept_contracts_courier
   */
  exports.prototype['accept_contracts_courier'] = undefined;
  /**
   * accept_contracts_item_exchange integer
   * @member {Number} accept_contracts_item_exchange
   */
  exports.prototype['accept_contracts_item_exchange'] = undefined;
  /**
   * buy_orders_placed integer
   * @member {Number} buy_orders_placed
   */
  exports.prototype['buy_orders_placed'] = undefined;
  /**
   * cancel_market_order integer
   * @member {Number} cancel_market_order
   */
  exports.prototype['cancel_market_order'] = undefined;
  /**
   * create_contracts_auction integer
   * @member {Number} create_contracts_auction
   */
  exports.prototype['create_contracts_auction'] = undefined;
  /**
   * create_contracts_courier integer
   * @member {Number} create_contracts_courier
   */
  exports.prototype['create_contracts_courier'] = undefined;
  /**
   * create_contracts_item_exchange integer
   * @member {Number} create_contracts_item_exchange
   */
  exports.prototype['create_contracts_item_exchange'] = undefined;
  /**
   * deliver_courier_contract integer
   * @member {Number} deliver_courier_contract
   */
  exports.prototype['deliver_courier_contract'] = undefined;
  /**
   * isk_gained integer
   * @member {Number} isk_gained
   */
  exports.prototype['isk_gained'] = undefined;
  /**
   * isk_spent integer
   * @member {Number} isk_spent
   */
  exports.prototype['isk_spent'] = undefined;
  /**
   * modify_market_order integer
   * @member {Number} modify_market_order
   */
  exports.prototype['modify_market_order'] = undefined;
  /**
   * search_contracts integer
   * @member {Number} search_contracts
   */
  exports.prototype['search_contracts'] = undefined;
  /**
   * sell_orders_placed integer
   * @member {Number} sell_orders_placed
   */
  exports.prototype['sell_orders_placed'] = undefined;



  return exports;
}));

