'use strict';

angular.module('LpcWebTest2017')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        //TODO

        // loading the properties into rootScope
        if(!$rootScope.properties){
            LpcTranslateService.loadProperties();
        }

        var filter = function(key,locale){

            //TODO
            // if(!$rootScope.properties){
            //     return key;
            // }
            try{

                return $rootScope.properties[locale][key];
            } catch (e) {
                console.log("got error : ", e);
                return $rootScope.properties[locale][key];
            }

        }
        //TODO
        if (!filter) {console.log("xxxxxxx  sorry  xxxxxxxxx") ; return;}
        return filter;
    }]);