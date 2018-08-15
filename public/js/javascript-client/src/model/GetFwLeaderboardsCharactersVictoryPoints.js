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
    define(['ApiClient', 'model/GetFwLeaderboardsCharactersActiveTotal1', 'model/GetFwLeaderboardsCharactersLastWeek1', 'model/GetFwLeaderboardsCharactersYesterday1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetFwLeaderboardsCharactersActiveTotal1'), require('./GetFwLeaderboardsCharactersLastWeek1'), require('./GetFwLeaderboardsCharactersYesterday1'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetFwLeaderboardsCharactersVictoryPoints = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetFwLeaderboardsCharactersActiveTotal1, root.EveSwaggerInterface.GetFwLeaderboardsCharactersLastWeek1, root.EveSwaggerInterface.GetFwLeaderboardsCharactersYesterday1);
  }
}(this, function(ApiClient, GetFwLeaderboardsCharactersActiveTotal1, GetFwLeaderboardsCharactersLastWeek1, GetFwLeaderboardsCharactersYesterday1) {
  'use strict';




  /**
   * The GetFwLeaderboardsCharactersVictoryPoints model module.
   * @module model/GetFwLeaderboardsCharactersVictoryPoints
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetFwLeaderboardsCharactersVictoryPoints</code>.
   * Top 100 rankings of pilots by victory points from yesterday, last week and in total
   * @alias module:model/GetFwLeaderboardsCharactersVictoryPoints
   * @class
   * @param yesterday {Array.<module:model/GetFwLeaderboardsCharactersYesterday1>} Top 100 ranking of pilots by victory points in the past day
   * @param lastWeek {Array.<module:model/GetFwLeaderboardsCharactersLastWeek1>} Top 100 ranking of pilots by victory points in the past week
   * @param activeTotal {Array.<module:model/GetFwLeaderboardsCharactersActiveTotal1>} Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered \"active\" if they have participated in faction warfare in the past 14 days.
   */
  var exports = function(yesterday, lastWeek, activeTotal) {
    var _this = this;

    _this['yesterday'] = yesterday;
    _this['last_week'] = lastWeek;
    _this['active_total'] = activeTotal;
  };

  /**
   * Constructs a <code>GetFwLeaderboardsCharactersVictoryPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFwLeaderboardsCharactersVictoryPoints} obj Optional instance to populate.
   * @return {module:model/GetFwLeaderboardsCharactersVictoryPoints} The populated <code>GetFwLeaderboardsCharactersVictoryPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('yesterday')) {
        obj['yesterday'] = ApiClient.convertToType(data['yesterday'], [GetFwLeaderboardsCharactersYesterday1]);
      }
      if (data.hasOwnProperty('last_week')) {
        obj['last_week'] = ApiClient.convertToType(data['last_week'], [GetFwLeaderboardsCharactersLastWeek1]);
      }
      if (data.hasOwnProperty('active_total')) {
        obj['active_total'] = ApiClient.convertToType(data['active_total'], [GetFwLeaderboardsCharactersActiveTotal1]);
      }
    }
    return obj;
  }

  /**
   * Top 100 ranking of pilots by victory points in the past day
   * @member {Array.<module:model/GetFwLeaderboardsCharactersYesterday1>} yesterday
   */
  exports.prototype['yesterday'] = undefined;
  /**
   * Top 100 ranking of pilots by victory points in the past week
   * @member {Array.<module:model/GetFwLeaderboardsCharactersLastWeek1>} last_week
   */
  exports.prototype['last_week'] = undefined;
  /**
   * Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered \"active\" if they have participated in faction warfare in the past 14 days.
   * @member {Array.<module:model/GetFwLeaderboardsCharactersActiveTotal1>} active_total
   */
  exports.prototype['active_total'] = undefined;



  return exports;
}));


