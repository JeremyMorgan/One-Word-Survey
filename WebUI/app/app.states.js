/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('angularstrapApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');
    // use a state provider for routing

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/research/app/components/home/views/home.view.html',
            controller: "homeController",
            controllerAs: 'ctrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/shared/404.html'
        })
        .state('candidate-donald-trump', {
            // we'll add another state soon
            url: '/candidate/donald-trump',
            templateUrl: '/research/app/components/candidate/views/candidate.view.html',
            controller: 'candidateController',
            controllerAs: 'ctrl',
            data: {
                subjectID: 1
            }
        })
        .state('candidate-hillary-clinton', {
            // we'll add another state soon
            url: '/candidate/hillary-clinton',
            templateUrl: '/research/app/components/candidate/views/candidate.view.html',
            controller: 'candidateController',
            controllerAs: 'ctrl',
            data: {
                subjectID: 2
            }
        })
        .state('candidate-bernie-sanders', {
            // we'll add another state soon
            url: '/candidate/bernie-sanders',
            templateUrl: '/research/app/components/candidate/views/candidate.view.html',
            controller: 'candidateController',
            controllerAs: 'ctrl',
            data: {
                subjectID: 3
            }
        })
        .state('candidate-ted-cruz', {
            // we'll add another state soon
            url: '/candidate/ted-cruz',
            templateUrl: '/research/app/components/candidate/views/candidate.view.html',
            controller: 'candidateController',
            controllerAs: 'ctrl',
            data: {
                subjectID: 4
            }
        });
}]);