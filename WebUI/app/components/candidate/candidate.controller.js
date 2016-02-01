(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('candidateController', candidateController);

    candidateController.$inject = ["$scope", "$state", "$http", "$window", "$q", "candidateService"];

    function candidateController($scope, $state, $http, $window, $q, candidateService) {

            var vm = this;

            //services
            vm.SubjectId = $state.current.data.subjectID;


            candidateService.getCandidateData(vm.SubjectId).then(function(resultset) {

                vm.SubjectId = resultset.SubjectId;
                vm.SubjectName = resultset.SubjectName;
                vm.SubjectText = resultset.SubjectText;
                vm.SubjectOgImage = resultset.SubjectOgImage;
                vm.SubjectPageImage = resultset.SubjectPageImage;
                vm.SubjectUrlSlug = resultset.SubjectUrlSlug;

            }, function(reason) {
                // throw error
            });


            vm.AnswerText = "";
            vm.submitAnswer = submitAnswer;

            function submitAnswer(id) {
                candidateService.submitAnswer(id,vm.AnswerText).then(function(resultset) {
                    vm.answered = true;
                }, function(reason) {
                    // throw error
                });
            }
        return vm;
       }
})();