'use strict';

angular.module('LpcWebTest2017')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        //TODO
        //To contain the local language, it is 'fr' by default
        if(localStorage.getItem('locale')){
            $scope.locale = localStorage.getItem('locale');
        } else{
            $scope.locale = 'fr';
        }

        //To contain the list of pots fetched from the server
        $scope.pots = [];

        //To contain the received error in case if there is an issue from the server
        $scope.error = '';

        //To update the locale scope according the the clicked flag
        $scope.changeLocale = function (locale) {
            $scope.locale = locale;
            localStorage.setItem('locale', locale);
        }

        //To call the servers's method responsible for getting the list of pots
        PotsService.get().then(function successCallback(response) {
            $scope.pots = response.data;
        }, function errorCallback(response) {
            $scope.error = response.status;
        });
    }]);