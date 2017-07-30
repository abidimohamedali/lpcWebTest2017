'use strict';

angular.module('LpcWebTest2017')
    .filter('lpcTranslate', ['LpcTranslateService', '$rootScope', function (LpcTranslateService, $rootScope) {
        //TODO

        // loading the properties into rootScope

        if (!$rootScope.properties) {
            LpcTranslateService.loadProperties();
        }

        var filter = function (key, locale) {

            //TODO

            try{
                return $rootScope.properties[locale][key];
            } catch (e) {
                return null ;
            }
        }
        //TODO
        if (filter)
            filter.$stateful = true;
        return filter;
    }]);