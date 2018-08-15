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
    define(['ApiClient', 'model/GetCorporationsCorporationIdStarbasesStarbaseIdFuel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCorporationsCorporationIdStarbasesStarbaseIdFuel'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCorporationsCorporationIdStarbasesStarbaseIdOk = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCorporationsCorporationIdStarbasesStarbaseIdFuel);
  }
}(this, function(ApiClient, GetCorporationsCorporationIdStarbasesStarbaseIdFuel) {
  'use strict';




  /**
   * The GetCorporationsCorporationIdStarbasesStarbaseIdOk model module.
   * @module model/GetCorporationsCorporationIdStarbasesStarbaseIdOk
   * @version 0.7.6
   */

  /**
   * Constructs a new <code>GetCorporationsCorporationIdStarbasesStarbaseIdOk</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk
   * @class
   * @param fuelBayView {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayViewEnum} Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
   * @param fuelBayTake {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayTakeEnum} Who can take fuel blocks out of the starbase (POS)'s fuel bay
   * @param anchor {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.AnchorEnum} Who can anchor starbase (POS) and its structures
   * @param unanchor {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.UnanchorEnum} Who can unanchor starbase (POS) and its structures
   * @param online {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OnlineEnum} Who can online starbase (POS) and its structures
   * @param offline {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OfflineEnum} Who can offline starbase (POS) and its structures
   * @param allowCorporationMembers {Boolean} allow_corporation_members boolean
   * @param allowAllianceMembers {Boolean} allow_alliance_members boolean
   * @param useAllianceStandings {Boolean} True if the starbase (POS) is using alliance standings, otherwise using corporation's
   * @param attackIfOtherSecurityStatusDropping {Boolean} attack_if_other_security_status_dropping boolean
   * @param attackIfAtWar {Boolean} attack_if_at_war boolean
   */
  var exports = function(fuelBayView, fuelBayTake, anchor, unanchor, online, offline, allowCorporationMembers, allowAllianceMembers, useAllianceStandings, attackIfOtherSecurityStatusDropping, attackIfAtWar) {
    var _this = this;

    _this['fuel_bay_view'] = fuelBayView;
    _this['fuel_bay_take'] = fuelBayTake;
    _this['anchor'] = anchor;
    _this['unanchor'] = unanchor;
    _this['online'] = online;
    _this['offline'] = offline;
    _this['allow_corporation_members'] = allowCorporationMembers;
    _this['allow_alliance_members'] = allowAllianceMembers;
    _this['use_alliance_standings'] = useAllianceStandings;


    _this['attack_if_other_security_status_dropping'] = attackIfOtherSecurityStatusDropping;
    _this['attack_if_at_war'] = attackIfAtWar;

  };

  /**
   * Constructs a <code>GetCorporationsCorporationIdStarbasesStarbaseIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk} obj Optional instance to populate.
   * @return {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk} The populated <code>GetCorporationsCorporationIdStarbasesStarbaseIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fuel_bay_view')) {
        obj['fuel_bay_view'] = ApiClient.convertToType(data['fuel_bay_view'], 'String');
      }
      if (data.hasOwnProperty('fuel_bay_take')) {
        obj['fuel_bay_take'] = ApiClient.convertToType(data['fuel_bay_take'], 'String');
      }
      if (data.hasOwnProperty('anchor')) {
        obj['anchor'] = ApiClient.convertToType(data['anchor'], 'String');
      }
      if (data.hasOwnProperty('unanchor')) {
        obj['unanchor'] = ApiClient.convertToType(data['unanchor'], 'String');
      }
      if (data.hasOwnProperty('online')) {
        obj['online'] = ApiClient.convertToType(data['online'], 'String');
      }
      if (data.hasOwnProperty('offline')) {
        obj['offline'] = ApiClient.convertToType(data['offline'], 'String');
      }
      if (data.hasOwnProperty('allow_corporation_members')) {
        obj['allow_corporation_members'] = ApiClient.convertToType(data['allow_corporation_members'], 'Boolean');
      }
      if (data.hasOwnProperty('allow_alliance_members')) {
        obj['allow_alliance_members'] = ApiClient.convertToType(data['allow_alliance_members'], 'Boolean');
      }
      if (data.hasOwnProperty('use_alliance_standings')) {
        obj['use_alliance_standings'] = ApiClient.convertToType(data['use_alliance_standings'], 'Boolean');
      }
      if (data.hasOwnProperty('attack_standing_threshold')) {
        obj['attack_standing_threshold'] = ApiClient.convertToType(data['attack_standing_threshold'], 'Number');
      }
      if (data.hasOwnProperty('attack_security_status_threshold')) {
        obj['attack_security_status_threshold'] = ApiClient.convertToType(data['attack_security_status_threshold'], 'Number');
      }
      if (data.hasOwnProperty('attack_if_other_security_status_dropping')) {
        obj['attack_if_other_security_status_dropping'] = ApiClient.convertToType(data['attack_if_other_security_status_dropping'], 'Boolean');
      }
      if (data.hasOwnProperty('attack_if_at_war')) {
        obj['attack_if_at_war'] = ApiClient.convertToType(data['attack_if_at_war'], 'Boolean');
      }
      if (data.hasOwnProperty('fuels')) {
        obj['fuels'] = ApiClient.convertToType(data['fuels'], [GetCorporationsCorporationIdStarbasesStarbaseIdFuel]);
      }
    }
    return obj;
  }

  /**
   * Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayViewEnum} fuel_bay_view
   */
  exports.prototype['fuel_bay_view'] = undefined;
  /**
   * Who can take fuel blocks out of the starbase (POS)'s fuel bay
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.FuelBayTakeEnum} fuel_bay_take
   */
  exports.prototype['fuel_bay_take'] = undefined;
  /**
   * Who can anchor starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.AnchorEnum} anchor
   */
  exports.prototype['anchor'] = undefined;
  /**
   * Who can unanchor starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.UnanchorEnum} unanchor
   */
  exports.prototype['unanchor'] = undefined;
  /**
   * Who can online starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OnlineEnum} online
   */
  exports.prototype['online'] = undefined;
  /**
   * Who can offline starbase (POS) and its structures
   * @member {module:model/GetCorporationsCorporationIdStarbasesStarbaseIdOk.OfflineEnum} offline
   */
  exports.prototype['offline'] = undefined;
  /**
   * allow_corporation_members boolean
   * @member {Boolean} allow_corporation_members
   */
  exports.prototype['allow_corporation_members'] = undefined;
  /**
   * allow_alliance_members boolean
   * @member {Boolean} allow_alliance_members
   */
  exports.prototype['allow_alliance_members'] = undefined;
  /**
   * True if the starbase (POS) is using alliance standings, otherwise using corporation's
   * @member {Boolean} use_alliance_standings
   */
  exports.prototype['use_alliance_standings'] = undefined;
  /**
   * Starbase (POS) will attack if target's standing is lower than this value
   * @member {Number} attack_standing_threshold
   */
  exports.prototype['attack_standing_threshold'] = undefined;
  /**
   * Starbase (POS) will attack if target's security standing is lower than this value
   * @member {Number} attack_security_status_threshold
   */
  exports.prototype['attack_security_status_threshold'] = undefined;
  /**
   * attack_if_other_security_status_dropping boolean
   * @member {Boolean} attack_if_other_security_status_dropping
   */
  exports.prototype['attack_if_other_security_status_dropping'] = undefined;
  /**
   * attack_if_at_war boolean
   * @member {Boolean} attack_if_at_war
   */
  exports.prototype['attack_if_at_war'] = undefined;
  /**
   * Fuel blocks and other things that will be consumed when operating a starbase (POS)
   * @member {Array.<module:model/GetCorporationsCorporationIdStarbasesStarbaseIdFuel>} fuels
   */
  exports.prototype['fuels'] = undefined;


  /**
   * Allowed values for the <code>fuel_bay_view</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FuelBayViewEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    "alliance_member": "alliance_member",
    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    "config_starbase_equipment_role": "config_starbase_equipment_role",
    /**
     * value: "corporation_member"
     * @const
     */
    "corporation_member": "corporation_member",
    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    "starbase_fuel_technician_role": "starbase_fuel_technician_role"  };

  /**
   * Allowed values for the <code>fuel_bay_take</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FuelBayTakeEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    "alliance_member": "alliance_member",
    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    "config_starbase_equipment_role": "config_starbase_equipment_role",
    /**
     * value: "corporation_member"
     * @const
     */
    "corporation_member": "corporation_member",
    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    "starbase_fuel_technician_role": "starbase_fuel_technician_role"  };

  /**
   * Allowed values for the <code>anchor</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AnchorEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    "alliance_member": "alliance_member",
    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    "config_starbase_equipment_role": "config_starbase_equipment_role",
    /**
     * value: "corporation_member"
     * @const
     */
    "corporation_member": "corporation_member",
    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    "starbase_fuel_technician_role": "starbase_fuel_technician_role"  };

  /**
   * Allowed values for the <code>unanchor</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UnanchorEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    "alliance_member": "alliance_member",
    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    "config_starbase_equipment_role": "config_starbase_equipment_role",
    /**
     * value: "corporation_member"
     * @const
     */
    "corporation_member": "corporation_member",
    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    "starbase_fuel_technician_role": "starbase_fuel_technician_role"  };

  /**
   * Allowed values for the <code>online</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OnlineEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    "alliance_member": "alliance_member",
    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    "config_starbase_equipment_role": "config_starbase_equipment_role",
    /**
     * value: "corporation_member"
     * @const
     */
    "corporation_member": "corporation_member",
    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    "starbase_fuel_technician_role": "starbase_fuel_technician_role"  };

  /**
   * Allowed values for the <code>offline</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OfflineEnum = {
    /**
     * value: "alliance_member"
     * @const
     */
    "alliance_member": "alliance_member",
    /**
     * value: "config_starbase_equipment_role"
     * @const
     */
    "config_starbase_equipment_role": "config_starbase_equipment_role",
    /**
     * value: "corporation_member"
     * @const
     */
    "corporation_member": "corporation_member",
    /**
     * value: "starbase_fuel_technician_role"
     * @const
     */
    "starbase_fuel_technician_role": "starbase_fuel_technician_role"  };


  return exports;
}));


