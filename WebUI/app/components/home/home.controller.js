(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

            var vm = this;

            $scope.pagetitle = "Jeremy Morgan's Research Area";
            //services
            vm.angularstrapService = asyncService;

            asyncService.getHeroText();

            // from async service
            vm.HeroHeader = asyncService.retrievedData.HeroHeader;
            vm.HeroText = asyncService.retrievedData.HeroText;

            return vm;
       }
})();