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
    define(['ApiClient', 'model/GetAlliancesAllianceIdIconsNotFound', 'model/GetAlliancesAllianceIdIconsOk', 'model/GetAlliancesAllianceIdNotFound', 'model/GetAlliancesAllianceIdOk', 'model/GetAlliancesNames200Ok', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetAlliancesAllianceIdIconsNotFound'), require('../model/GetAlliancesAllianceIdIconsOk'), require('../model/GetAlliancesAllianceIdNotFound'), require('../model/GetAlliancesAllianceIdOk'), require('../model/GetAlliancesNames200Ok'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.AllianceApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetAlliancesAllianceIdIconsNotFound, root.EveSwaggerInterface.GetAlliancesAllianceIdIconsOk, root.EveSwaggerInterface.GetAlliancesAllianceIdNotFound, root.EveSwaggerInterface.GetAlliancesAllianceIdOk, root.EveSwaggerInterface.GetAlliancesNames200Ok, root.EveSwaggerInterface.InternalServerError);
  }
}(this, function(ApiClient, GetAlliancesAllianceIdIconsNotFound, GetAlliancesAllianceIdIconsOk, GetAlliancesAllianceIdNotFound, GetAlliancesAllianceIdOk, GetAlliancesNames200Ok, InternalServerError) {
  'use strict';

  /**
   * Alliance service.
   * @module api/AllianceApi
   * @version 0.7.6
   */

  /**
   * Constructs a new AllianceApi. 
   * @alias module:api/AllianceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAlliances operation.
     * @callback module:api/AllianceApi~getAlliancesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all alliances
     * List all active player alliances  ---  This route is cached for up to 3600 seconds
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/AllianceApi~getAlliancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getAlliances = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/v1/alliances/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceId operation.
     * @callback module:api/AllianceApi~getAlliancesAllianceIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAlliancesAllianceIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance information
     * Public information about an alliance  ---  This route is cached for up to 3600 seconds
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/AllianceApi~getAlliancesAllianceIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAlliancesAllianceIdOk}
     */
    this.getAlliancesAllianceId = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceId");
      }


      var pathParams = {
        'alliance_id': allianceId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetAlliancesAllianceIdOk;

      return this.apiClient.callApi(
        '/v3/alliances/{alliance_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceIdCorporations operation.
     * @callback module:api/AllianceApi~getAlliancesAllianceIdCorporationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'Number'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List alliance&#39;s corporations
     * List all current member corporations of an alliance  ---  This route is cached for up to 3600 seconds
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/AllianceApi~getAlliancesAllianceIdCorporationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'Number'>}
     */
    this.getAlliancesAllianceIdCorporations = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceIdCorporations");
      }


      var pathParams = {
        'alliance_id': allianceId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['Number'];

      return this.apiClient.callApi(
        '/v1/alliances/{alliance_id}/corporations/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesAllianceIdIcons operation.
     * @callback module:api/AllianceApi~getAlliancesAllianceIdIconsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAlliancesAllianceIdIconsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance icon
     * Get the icon urls for a alliance  ---  This route is cached for up to 3600 seconds
     * @param {Number} allianceId An EVE alliance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/AllianceApi~getAlliancesAllianceIdIconsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAlliancesAllianceIdIconsOk}
     */
    this.getAlliancesAllianceIdIcons = function(allianceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceId' is set
      if (allianceId === undefined || allianceId === null) {
        throw new Error("Missing the required parameter 'allianceId' when calling getAlliancesAllianceIdIcons");
      }


      var pathParams = {
        'alliance_id': allianceId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetAlliancesAllianceIdIconsOk;

      return this.apiClient.callApi(
        '/v1/alliances/{alliance_id}/icons/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlliancesNames operation.
     * @callback module:api/AllianceApi~getAlliancesNamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAlliancesNames200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance names
     * Resolve a set of alliance IDs to alliance names  ---  This route is cached for up to 3600 seconds
     * @param {Array.<Number>} allianceIds A comma separated list of alliance IDs
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/AllianceApi~getAlliancesNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAlliancesNames200Ok>}
     */
    this.getAlliancesNames = function(allianceIds, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'allianceIds' is set
      if (allianceIds === undefined || allianceIds === null) {
        throw new Error("Missing the required parameter 'allianceIds' when calling getAlliancesNames");
      }


      var pathParams = {
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
        'alliance_ids': {
          value: allianceIds,
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetAlliancesNames200Ok];

      return this.apiClient.callApi(
        '/v2/alliances/names/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
