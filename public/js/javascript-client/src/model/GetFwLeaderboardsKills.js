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
    define(['ApiClient', 'model/GetFwLeaderboardsActiveTotal', 'model/GetFwLeaderboardsLastWeek', 'model/GetFwLeaderboardsYesterday'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsActiveTotal'), require('./GetFwLeaderboardsLastWeek'), require('./GetFwLeaderboardsYesterday'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsKills = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsActiveTotal, root.EveSwaggerInterface.GetFwLeaderboardsLastWeek, root.EveSwaggerInterface.GetFwLeaderboardsYesterday);
  }
}(this, function(ApiClient, GetFwLeaderboardsActiveTotal, GetFwLeaderboardsLastWeek, GetFwLeaderboardsYesterday) {
  'use strict';




  /**
   * The GetFwLeaderboardsKills model module.
   * @module model/GetFwLeaderboardsKills
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsKills</code>.
   * Top 4 rankings of factions by number of kills from yesterday, last week and in total.
   * @alias module:model/GetFwLeaderboardsKills
   * @class
   * @param yesterday {Array.<module:model/GetFwLeaderboardsYesterday>} Top 4 ranking of factions by kills in the past day
   * @param lastWeek {Array.<module:model/GetFwLeaderboardsLastWeek>} Top 4 ranking of factions by kills in the past week
   * @param activeTotal {Array.<module:model/GetFwLeaderboardsActiveTotal>} Top 4 ranking of factions active in faction warfare by total kills. A faction is considered \"active\" if they have participated in faction warfare in the past 14 days.
   */
  var exports = function(yesterday, lastWeek, activeTotal) {
    var _this = this;

    _this['yesterday'] = yesterday;
    _this['last_week'] = lastWeek;
    _this['active_total'] = activeTotal;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsKills</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsKills} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsKills} The populated <code>GetFwLeaderboardsKills</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('yesterday')) {
        obj['yesterday'] = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsYesterday]);
      }
      if (data.hasOwnProperty('last_week')) {
        obj['last_week'] = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsLastWeek]);
      }
      if (data.hasOwnProperty('active_total')) {
        obj['active_total'] = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsActiveTotal]);
      }
    }
    return obj;
  }

  /**
   * Top 4 ranking of factions by kills in the past day
   * @member {Array.<module:model/GetFwLeaderboardsYesterday>} yesterday
   */
  exports.prototype['yesterday'] = undefined;
  /**
   * Top 4 ranking of factions by kills in the past week
   * @member {Array.<module:model/GetFwLeaderboardsLastWeek>} last_week
   */
  exports.prototype['last_week'] = undefined;
  /**
   * Top 4 ranking of factions active in faction warfare by total kills. A faction is considered \"active\" if they have participated in faction warfare in the past 14 days.
   * @member {Array.<module:model/GetFwLeaderboardsActiveTotal>} active_total
   */
  exports.prototype['active_total'] = undefined;



  return exports;
}));

