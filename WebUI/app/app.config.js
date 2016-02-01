/**
 * Load modules for application
 */

angular
    
    .module('angularstrapApp', [
        'ui.router',
        'angularstrapApp.homeServices',
		'angularstrapApp.candidateServices',
        'angularstrapApp.requestService',
        'updateMeta'
    ])

    .constant('CONFIG', 
    {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://localhost:12017'
	}); 