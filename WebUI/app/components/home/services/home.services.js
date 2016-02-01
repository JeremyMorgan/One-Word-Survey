(function () {
    'use strict';

    angular.module('angularstrapApp.homeServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

        function asyncService($http, $q) {
            
            var factory = {
                //properties
                retrievedData: [],
                getHeroText : getHeroText
            };

            function getHeroText() {

                // this is where we'd put some ajax calls

                factory.retrievedData = {
                    HeroHeader: "Research Center",
                    HeroText: "This is an application I use to conduct simple research. My first project here is finding out what words people use to describe presidential candidates"
                };

                //factory.retrievedData.HeroHeader = "Hello World!";
                //factory.retrievedData.HeroText = "This is the AngularStrap home page. This text is being pulled from a service, and can be populated by hand coding the property in the controller, dynamically or via services.";


            }
            return factory;
        }
})();