angular.module('LpcWebTest2017')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){


        var
            //TODO
            url = '',

            setPropertiesUrlImpl = function(url){
                //TODO
                this.url = url;
            },
            loadPropertiesImpl = function(){
                //TODO
                return $http({
                    method: 'GET',
                    url: this.url
                }).then(function successCallback(response) {
                    $rootScope.properties = response.data;
                }, function errorCallback(response) {
                    console.log('error from translate service: ', response);
                });
            }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);