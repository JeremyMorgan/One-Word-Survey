(function () {
    'use strict';

    angular.module('angularstrapApp.candidateServices', [])
        .service('candidateService', candidateService);

    candidateService.$inject = ['$http', '$q', 'requestService'];

    function candidateService($http, $q, requestService) {

        var sm = this;
        sm.DebugMode = true;
        var factory = {
            //properties
            retrievedData: "",
            getCandidateData : getCandidateData,
            submitAnswer : submitAnswer
        };

        function getCandidateData(candidateId) {

                var deferred = $q.defer();

                var parameters = {
                    Url: "https://www.jeremymorgan.com/research/api/Subject?id=" + candidateId,
                    Verb: "GET",
                    PostData: ""
                };

                requestService.sendRequest(parameters)
                    .then(function (sendresult) {
                        factory.retrievedData = sendresult;
                        deferred.resolve(sendresult);
                    }, function (error) {
                        if(sm.DebugMode){
                            console.log("requestService Error: " + JSON.stringify(error));
                        }
                        deferred.reject(error);
                    });

                return deferred.promise;
/*
            factory.retrievedData = {
                "SubjectId": 1,
                "SubjectName": "Donald Trump",
                "SubjectText": "Donald Trump has been the wildcard in this election. If you had to descibe him in one word, what would it be?",
                "SubjectOgImage": "donald-trump-og.jpg",
                "SubjectPageImage": "donald-trump.jpg",
                "SubjectUrlSlug": "donald-trump"
            };
*/

            //factory.retrievedData.HeroHeader = "Hello World!";
            //factory.retrievedData.HeroText = "This is the AngularStrap home page. This text is being pulled from a service, and can be populated by hand coding the property in the controller, dynamically or via services.";


        }

        function submitAnswer(id,answer){

            console.log("ID IS " + id + " and answer is " + answer);

            var deferred = $q.defer();

            var parameters = {
                Url: "https://www.jeremymorgan.com/research/api/Answer",
                Verb: "POST",
                PostData: "{ AnswerText: \"" + answer + "\", SubjectId: " + id + " }"
            };

            requestService.sendRequest(parameters)
                .then(function (sendresult) {
                    factory.retrievedData = sendresult;
                    deferred.resolve(sendresult);
                }, function (error) {
                    if(sm.DebugMode){
                        console.log("requestService Error: " + JSON.stringify(error));
                    }
                    deferred.reject(error);
                });

            return deferred.promise;

        }

        return factory;
    }
})();