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
    define(['ApiClient', 'model/Forbidden', 'model/GetCharactersCharacterIdPlanets200Ok', 'model/GetCharactersCharacterIdPlanetsPlanetIdNotFound', 'model/GetCharactersCharacterIdPlanetsPlanetIdOk', 'model/GetCorporationsCorporationIdCustomsOffices200Ok', 'model/GetUniverseSchematicsSchematicIdNotFound', 'model/GetUniverseSchematicsSchematicIdOk', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Forbidden'), require('../model/GetCharactersCharacterIdPlanets200Ok'), require('../model/GetCharactersCharacterIdPlanetsPlanetIdNotFound'), require('../model/GetCharactersCharacterIdPlanetsPlanetIdOk'), require('../model/GetCorporationsCorporationIdCustomsOffices200Ok'), require('../model/GetUniverseSchematicsSchematicIdNotFound'), require('../model/GetUniverseSchematicsSchematicIdOk'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.PlanetaryInteractionApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GetCharactersCharacterIdPlanets200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdNotFound, root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOk, root.EveSwaggerInterface.GetCorporationsCorporationIdCustomsOffices200Ok, root.EveSwaggerInterface.GetUniverseSchematicsSchematicIdNotFound, root.EveSwaggerInterface.GetUniverseSchematicsSchematicIdOk, root.EveSwaggerInterface.InternalServerError);
  }
}(this, function(ApiClient, Forbidden, GetCharactersCharacterIdPlanets200Ok, GetCharactersCharacterIdPlanetsPlanetIdNotFound, GetCharactersCharacterIdPlanetsPlanetIdOk, GetCorporationsCorporationIdCustomsOffices200Ok, GetUniverseSchematicsSchematicIdNotFound, GetUniverseSchematicsSchematicIdOk, InternalServerError) {
  'use strict';

  /**
   * PlanetaryInteraction service.
   * @module api/PlanetaryInteractionApi
   * @version 0.7.6
   */

  /**
   * Constructs a new PlanetaryInteractionApi. 
   * @alias module:api/PlanetaryInteractionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdPlanets operation.
     * @callback module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdPlanets200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get colonies
     * Returns a list of all planetary colonies owned by a character.  ---  This route is cached for up to 600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdPlanets200Ok>}
     */
    this.getCharactersCharacterIdPlanets = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdPlanets");
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
      var returnType = [GetCharactersCharacterIdPlanets200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/planets/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdPlanetsPlanetId operation.
     * @callback module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsPlanetIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get colony layout
     * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.  ---  This route is cached for up to 600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Number} planetId Planet id of the target planet
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/PlanetaryInteractionApi~getCharactersCharacterIdPlanetsPlanetIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCharactersCharacterIdPlanetsPlanetIdOk}
     */
    this.getCharactersCharacterIdPlanetsPlanetId = function(characterId, planetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdPlanetsPlanetId");
      }

      // verify the required parameter 'planetId' is set
      if (planetId === undefined || planetId === null) {
        throw new Error("Missing the required parameter 'planetId' when calling getCharactersCharacterIdPlanetsPlanetId");
      }


      var pathParams = {
        'character_id': characterId,
        'planet_id': planetId
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
      var returnType = GetCharactersCharacterIdPlanetsPlanetIdOk;

      return this.apiClient.callApi(
        '/v3/characters/{character_id}/planets/{planet_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdCustomsOffices operation.
     * @callback module:api/PlanetaryInteractionApi~getCorporationsCorporationIdCustomsOfficesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdCustomsOffices200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List corporation customs offices
     * List customs offices owned by a corporation  ---  This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Director
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/PlanetaryInteractionApi~getCorporationsCorporationIdCustomsOfficesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdCustomsOffices200Ok>}
     */
    this.getCorporationsCorporationIdCustomsOffices = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdCustomsOffices");
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource'],
        'page': opts['page'],
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
      var returnType = [GetCorporationsCorporationIdCustomsOffices200Ok];

      return this.apiClient.callApi(
        '/v1/corporations/{corporation_id}/customs_offices/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniverseSchematicsSchematicId operation.
     * @callback module:api/PlanetaryInteractionApi~getUniverseSchematicsSchematicIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetUniverseSchematicsSchematicIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get schematic information
     * Get information on a planetary factory schematic  ---  This route is cached for up to 3600 seconds
     * @param {Number} schematicId A PI schematic ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/PlanetaryInteractionApi~getUniverseSchematicsSchematicIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetUniverseSchematicsSchematicIdOk}
     */
    this.getUniverseSchematicsSchematicId = function(schematicId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'schematicId' is set
      if (schematicId === undefined || schematicId === null) {
        throw new Error("Missing the required parameter 'schematicId' when calling getUniverseSchematicsSchematicId");
      }


      var pathParams = {
        'schematic_id': schematicId
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
      var returnType = GetUniverseSchematicsSchematicIdOk;

      return this.apiClient.callApi(
        '/v1/universe/schematics/{schematic_id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
