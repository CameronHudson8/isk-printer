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
    define(['ApiClient', 'model/Forbidden', 'model/GetCharactersCharacterIdAttributesOk', 'model/GetCharactersCharacterIdSkillqueue200Ok', 'model/GetCharactersCharacterIdSkillsOk', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Forbidden'), require('../model/GetCharactersCharacterIdAttributesOk'), require('../model/GetCharactersCharacterIdSkillqueue200Ok'), require('../model/GetCharactersCharacterIdSkillsOk'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.SkillsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GetCharactersCharacterIdAttributesOk, root.EveSwaggerInterface.GetCharactersCharacterIdSkillqueue200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdSkillsOk, root.EveSwaggerInterface.InternalServerError);
  }
}(this, function(ApiClient, Forbidden, GetCharactersCharacterIdAttributesOk, GetCharactersCharacterIdSkillqueue200Ok, GetCharactersCharacterIdSkillsOk, InternalServerError) {
  'use strict';

  /**
   * Skills service.
   * @module api/SkillsApi
   * @version 0.7.6
   */

  /**
   * Constructs a new SkillsApi. 
   * @alias module:api/SkillsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdAttributes operation.
     * @callback module:api/SkillsApi~getCharactersCharacterIdAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdAttributesOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character attributes
     * Return attributes of a character  ---  This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/SkillsApi~getCharactersCharacterIdAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdAttributesOk}
     */
    this.getCharactersCharacterIdAttributes = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdAttributes");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdAttributesOk;

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/attributes/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdSkillqueue operation.
     * @callback module:api/SkillsApi~getCharactersCharacterIdSkillqueueCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdSkillqueue200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character&#39;s skill queue
     * List the configured skill queue for the given character  ---  This route is cached for up to 120 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/SkillsApi~getCharactersCharacterIdSkillqueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdSkillqueue200Ok>}
     */
    this.getCharactersCharacterIdSkillqueue = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdSkillqueue");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdSkillqueue200Ok];

      return this.apiClient.callApi(
        '/v2/characters/{character_id}/skillqueue/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdSkills operation.
     * @callback module:api/SkillsApi~getCharactersCharacterIdSkillsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdSkillsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get character skills
     * List all trained skills for the given character  ---  This route is cached for up to 120 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/SkillsApi~getCharactersCharacterIdSkillsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdSkillsOk}
     */
    this.getCharactersCharacterIdSkills = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdSkills");
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'token': opts['token'],
        'user_agent': opts['userAgent'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-User-Agent': opts['xUserAgent']
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetCharactersCharacterIdSkillsOk;

      return this.apiClient.callApi(
        '/v4/characters/{character_id}/skills/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));