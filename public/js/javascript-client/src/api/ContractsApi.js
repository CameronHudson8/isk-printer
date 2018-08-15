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
    define(['ApiClient', 'model/Forbidden', 'model/GetCharactersCharacterIdContracts200Ok', 'model/GetCharactersCharacterIdContractsContractIdBids200Ok', 'model/GetCharactersCharacterIdContractsContractIdItems200Ok', 'model/GetCorporationsCorporationIdContracts200Ok', 'model/GetCorporationsCorporationIdContractsContractIdBids200Ok', 'model/GetCorporationsCorporationIdContractsContractIdItems200Ok', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Forbidden'), require('../model/GetCharactersCharacterIdContracts200Ok'), require('../model/GetCharactersCharacterIdContractsContractIdBids200Ok'), require('../model/GetCharactersCharacterIdContractsContractIdItems200Ok'), require('../model/GetCorporationsCorporationIdContracts200Ok'), require('../model/GetCorporationsCorporationIdContractsContractIdBids200Ok'), require('../model/GetCorporationsCorporationIdContractsContractIdItems200Ok'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.ContractsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.Forbidden, root.EveSwaggerInterface.GetCharactersCharacterIdContracts200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdBids200Ok, root.EveSwaggerInterface.GetCharactersCharacterIdContractsContractIdItems200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdContracts200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdBids200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdContractsContractIdItems200Ok, root.EveSwaggerInterface.InternalServerError);
  }
}(this, function(ApiClient, Forbidden, GetCharactersCharacterIdContracts200Ok, GetCharactersCharacterIdContractsContractIdBids200Ok, GetCharactersCharacterIdContractsContractIdItems200Ok, GetCorporationsCorporationIdContracts200Ok, GetCorporationsCorporationIdContractsContractIdBids200Ok, GetCorporationsCorporationIdContractsContractIdItems200Ok, InternalServerError) {
  'use strict';

  /**
   * Contracts service.
   * @module api/ContractsApi
   * @version 0.7.6
   */

  /**
   * Constructs a new ContractsApi. 
   * @alias module:api/ContractsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdContracts operation.
     * @callback module:api/ContractsApi~getCharactersCharacterIdContractsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdContracts200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contracts
     * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \&quot;in_progress\&quot;.  ---  This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContractsApi~getCharactersCharacterIdContractsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdContracts200Ok>}
     */
    this.getCharactersCharacterIdContracts = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdContracts");
      }


      var pathParams = {
        'character_id': characterId
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
      var returnType = [GetCharactersCharacterIdContracts200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/contracts/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdContractsContractIdBids operation.
     * @callback module:api/ContractsApi~getCharactersCharacterIdContractsContractIdBidsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdContractsContractIdBids200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contract bids
     * Lists bids on a particular auction contract  ---  This route is cached for up to 300 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Number} contractId ID of a contract
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContractsApi~getCharactersCharacterIdContractsContractIdBidsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdContractsContractIdBids200Ok>}
     */
    this.getCharactersCharacterIdContractsContractIdBids = function(characterId, contractId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdContractsContractIdBids");
      }

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getCharactersCharacterIdContractsContractIdBids");
      }


      var pathParams = {
        'character_id': characterId,
        'contract_id': contractId
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
      var returnType = [GetCharactersCharacterIdContractsContractIdBids200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/contracts/{contract_id}/bids/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCharactersCharacterIdContractsContractIdItems operation.
     * @callback module:api/ContractsApi~getCharactersCharacterIdContractsContractIdItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdContractsContractIdItems200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contract items
     * Lists items of a particular contract  ---  This route is cached for up to 3600 seconds
     * @param {Number} characterId An EVE character ID
     * @param {Number} contractId ID of a contract
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContractsApi~getCharactersCharacterIdContractsContractIdItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdContractsContractIdItems200Ok>}
     */
    this.getCharactersCharacterIdContractsContractIdItems = function(characterId, contractId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId === undefined || characterId === null) {
        throw new Error("Missing the required parameter 'characterId' when calling getCharactersCharacterIdContractsContractIdItems");
      }

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getCharactersCharacterIdContractsContractIdItems");
      }


      var pathParams = {
        'character_id': characterId,
        'contract_id': contractId
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
      var returnType = [GetCharactersCharacterIdContractsContractIdItems200Ok];

      return this.apiClient.callApi(
        '/v1/characters/{character_id}/contracts/{contract_id}/items/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdContracts operation.
     * @callback module:api/ContractsApi~getCorporationsCorporationIdContractsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdContracts200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get coporation contracts
     * Returns contracts available to a coporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is \&quot;in_progress\&quot;.  ---  This route is cached for up to 300 seconds
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContractsApi~getCorporationsCorporationIdContractsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdContracts200Ok>}
     */
    this.getCorporationsCorporationIdContracts = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdContracts");
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
      var returnType = [GetCorporationsCorporationIdContracts200Ok];

      return this.apiClient.callApi(
        '/v1/corporations/{corporation_id}/contracts/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdContractsContractIdBids operation.
     * @callback module:api/ContractsApi~getCorporationsCorporationIdContractsContractIdBidsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdContractsContractIdBids200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation contract bids
     * Lists bids on a particular auction contract  ---  This route is cached for up to 3600 seconds
     * @param {Number} contractId ID of a contract
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {Number} opts.page Which page of results to return (default to 1)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContractsApi~getCorporationsCorporationIdContractsContractIdBidsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdContractsContractIdBids200Ok>}
     */
    this.getCorporationsCorporationIdContractsContractIdBids = function(contractId, corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getCorporationsCorporationIdContractsContractIdBids");
      }

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdContractsContractIdBids");
      }


      var pathParams = {
        'contract_id': contractId,
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
      var returnType = [GetCorporationsCorporationIdContractsContractIdBids200Ok];

      return this.apiClient.callApi(
        '/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdContractsContractIdItems operation.
     * @callback module:api/ContractsApi~getCorporationsCorporationIdContractsContractIdItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdContractsContractIdItems200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation contract items
     * Lists items of a particular contract  ---  This route is cached for up to 3600 seconds
     * @param {Number} contractId ID of a contract
     * @param {Number} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {String} opts.token Access token to use if unable to set a header
     * @param {String} opts.userAgent Client identifier, takes precedence over headers
     * @param {String} opts.xUserAgent Client identifier, takes precedence over User-Agent
     * @param {module:api/ContractsApi~getCorporationsCorporationIdContractsContractIdItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdContractsContractIdItems200Ok>}
     */
    this.getCorporationsCorporationIdContractsContractIdItems = function(contractId, corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getCorporationsCorporationIdContractsContractIdItems");
      }

      // verify the required parameter 'corporationId' is set
      if (corporationId === undefined || corporationId === null) {
        throw new Error("Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdContractsContractIdItems");
      }


      var pathParams = {
        'contract_id': contractId,
        'corporation_id': corporationId
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
      var returnType = [GetCorporationsCorporationIdContractsContractIdItems200Ok];

      return this.apiClient.callApi(
        '/v1/corporations/{corporation_id}/contracts/{contract_id}/items/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));