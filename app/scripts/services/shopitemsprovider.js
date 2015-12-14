'use strict';

/**
 * @ngdoc service
 * @name angularBoilerplateApp.shopItemsProvider
 * @description
 * # shopItemsProvider
 * Provider in the angularBoilerplateApp.
 */
angular.module('angularBoilerplateApp')
  .provider('shopItemsProvider', function () {

    var baseUrl = 'http://cosmosis-api.com/api/service/data/format/jsonp/?';
    var _response = null;
    var _projectName = 'shopItems';
    var _projectPassword = '12bf141bf2fbcf61693fc2b2b61c44e5';
    var _table = 'unique_references';
    var _batch = '1';
    var _batchSize = '6';
    var _whereConditionArray = 'project_id||118';
    var _select = '*';
    var _orderBy = 'unique_reference_id||desc';
    var _callback = '?';
    var _type = '';
    var _finalUrl = '';

    var makeUrl = function(){
      _type = _type.split(' ').join('+');
      _finalUrl = baseUrl + _type;
      _finalUrl += 'project_name='+_projectName+'&';
      _finalUrl += 'project_password='+_projectPassword+'&';
      _finalUrl += 'table='+_table+'&';
      _finalUrl += 'batch='+_batch+'&';
      _finalUrl += 'batchSize='+_batchSize+'&';
      _finalUrl += 'whereConditionArray='+_whereConditionArray+'&';
      _finalUrl += 'select='+_select+'&';
      _finalUrl += 'orderBy='+_orderBy+'&';
      _finalUrl += 'callback='+_callback;

      return _finalUrl;
    };

    var saveResponse = function(data){
      _response = data;
    };

    this.$get = function($http, $q){
      return {
        callShop: function(){
          console.log('shopProvider');
          makeUrl();
          var deferred = $q.defer();
          $http.get( _finalUrl
          ).success(function(data){
            var parsedData = JSON.parse(data.substring(1, data.length-1).substr(1));
            deferred.resolve(parsedData);
            saveResponse(parsedData);
          }).error(function(){
            deferred.reject('There was an error');
          });
          return deferred.promise;
        },
        setResponse: function(response){
          _response = response;
        },
        getResponse: function(){
          return _response;
        },
        setType: function(type){
          _type = type;
        },
        getType: function(){
          return _type;
        },
        setProjectName: function(projectName){
          _projectName = projectName;
        },
        getProjectName: function(){
          return _projectName;
        },
        setProjectPassword: function(projectPassword){
          _projectPassword = projectPassword;
        },
        getProjectPassword: function(){
          return _projectPassword;
        },
        setBatch: function(batch){
          _batch = batch;
        },
        getBatch: function(){
          return _batch;
        },
        setBatchSize: function(batchSize){
          _batchSize = batchSize;
        },
        getBatchSize: function(){
          return _batchSize;
        },
        setWhereConditionArray: function(whereConditionArray){
          _whereConditionArray = whereConditionArray;
        },
        getWhereConditionArray: function(){
          return _whereConditionArray;
        },
        setSelect: function(select){
          _select = select;
        },
        getSelect: function(){
          return _select;
        },
        setOrderBy: function(orderBy){
          _orderBy = orderBy;
        },
        getOrderBy: function(){
          return _orderBy;
        },
        setCallback: function(callback){
          _callback = callback;
        },
        getCallback: function(){
          return _callback;
        }

      };

    };

  });
