'use strict';

angular.module('LpcWebTest2017')
    .service('PotsService',['$http','RESOURCES',function($http,RESOURCES){
        var getImpl = function(){
            //TODO
            return $http({
                method : "GET",
                url : RESOURCES.GET_POTS_URL
            })
        }
        
        return {
            get : getImpl
        }
    }]);