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
    define(['ApiClient', 'model/GetFwLeaderboardsCharactersActiveTotal', 'model/GetFwLeaderboardsCharactersLastWeek', 'model/GetFwLeaderboardsCharactersYesterday'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsCharactersActiveTotal'), require('./GetFwLeaderboardsCharactersLastWeek'), require('./GetFwLeaderboardsCharactersYesterday'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsCharactersKills = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsCharactersActiveTotal, root.EveSwaggerInterface.GetFwLeaderboardsCharactersLastWeek, root.EveSwaggerInterface.GetFwLeaderboardsCharactersYesterday);
  }
}(this, function(ApiClient, GetFwLeaderboardsCharactersActiveTotal, GetFwLeaderboardsCharactersLastWeek, GetFwLeaderboardsCharactersYesterday) {
  'use strict';




  /**
   * The GetFwLeaderboardsCharactersKills model module.
   * @module model/GetFwLeaderboardsCharactersKills
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCharactersKills</code>.
   * Top 100 rankings of pilots by number of kills from yesterday, last week and in total.
   * @alias module:model/GetFwLeaderboardsCharactersKills
   * @class
   * @param yesterday {Array.<module:model/GetFwLeaderboardsCharactersYesterday>} Top 100 ranking of pilots by kills in the past day
   * @param lastWeek {Array.<module:model/GetFwLeaderboardsCharactersLastWeek>} Top 100 ranking of pilots by kills in the past week
   * @param activeTotal {Array.<module:model/GetFwLeaderboardsCharactersActiveTotal>} Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered \"active\" if they have participated in faction warfare in the past 14 days.
   */
  var exports = function(yesterday, lastWeek, activeTotal) {
    var _this = this;

    _this['yesterday'] = yesterday;
    _this['last_week'] = lastWeek;
    _this['active_total'] = activeTotal;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCharactersKills</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCharactersKills} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCharactersKills} The populated <code>GetFwLeaderboardsCharactersKills</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('yesterday')) {
        obj['yesterday'] = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsCharactersYesterday]);
      }
      if (data.hasOwnProperty('last_week')) {
        obj['last_week'] = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsCharactersLastWeek]);
      }
      if (data.hasOwnProperty('active_total')) {
        obj['active_total'] = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsCharactersActiveTotal]);
      }
    }
    return obj;
  }

  /**
   * Top 100 ranking of pilots by kills in the past day
   * @member {Array.<module:model/GetFwLeaderboardsCharactersYesterday>} yesterday
   */
  exports.prototype['yesterday'] = undefined;
  /**
   * Top 100 ranking of pilots by kills in the past week
   * @member {Array.<module:model/GetFwLeaderboardsCharactersLastWeek>} last_week
   */
  exports.prototype['last_week'] = undefined;
  /**
   * Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered \"active\" if they have participated in faction warfare in the past 14 days.
   * @member {Array.<module:model/GetFwLeaderboardsCharactersActiveTotal>} active_total
   */
  exports.prototype['active_total'] = undefined;



  return exports;
}));


