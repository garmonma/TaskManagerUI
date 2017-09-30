/**
 * Created by magma on 9/30/2017.
 */

angular.module('ProjectService', [])
    .factory('ProjectDataOp', ['$http', function ($http) {

    var urlBase = 'http://localhost:8080/api/project';
    var ProjectDataOp = {};

    ProjectDataOp.getProjects = function () {
        return $http.get(urlBase+'/projects');
    };

    ProjectDataOp.createProject = function (project) {
        return $http.post(urlBase + '/create', project);
    };

    return ProjectDataOp;

}]);
