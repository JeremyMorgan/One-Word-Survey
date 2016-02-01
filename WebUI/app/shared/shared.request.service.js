(function () {
    'use strict';
    // service
    angular
        .module('angularstrapApp.requestService', [])
        .service('requestService', requestService);

    requestService.$inject = ['$http', '$q', '$timeout'];

    function requestService($http, $q, $timeout) {

        var vm = this;

        return {
            sendRequest: sendRequest,
            returnData: []
        };

        function sendRequest(parameters) {

            vm.DebugMode = true;

            var Url = parameters.Url;
            var Verb = parameters.Verb;
            var PostData = parameters.PostData;

            var deferred = $q.defer();

            switch (Verb) {
                case 'GET':
                    $http.get(Url).then(function (response) {
                        deferred.resolve(response.data);
                    }, function (error) {
                        if (vm.DebugMode) {
                            console.log("\tERROR: requestService: GET sendRequest" + JSON.stringify(error));
                        }
                        deferred.reject(error);
                    });
                    break;

                case 'DELETE':
                    if (vm.DebugMode) {
                        console.log("\tSending Delete");
                        console.log("\tUsing URL: " + Url);
                        configurationService.StepCounter++;
                    }

                    if (PostData) {
                        var config = {data: JSON.stringify(PostData)};

                        return $http.delete(Url, config).then(function (response) {
                            return response.data;
                        });
                    } else {
                        return $http.delete(Url).then(function (response) {
                            return response.data;
                        });
                    }
                    break;

                case 'POST':

                    //TODO: FIX THIS SHIT

                    config =  {
                        method: "POST",
                        url: parameters.Url,
                        data: PostData,
                        headers: {
                            'Connection' : 'keep-alive',
                            'Cache-Control' : 'no-cache',
                            //'Content-Type': 'application/x-www-form-urlencoded'
                            'Content-Type' : 'application/json'
                        }};

                    console.log("CONFIG: " + JSON.stringify(config));

                    $http(config).then(function(result) {
                        deferred.resolve(result);
                    }, function(error) {
                        if(vm.DebugMode){
                            console.log("Request Error: " + JSON.stringify(error));
                        }
                        deferred.reject(error);
                    });

                    break;
            }
            return deferred.promise;
        }
    }

})().config(function ($httpProvider) {
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
});