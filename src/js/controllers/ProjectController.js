angular.module('ProjectController', [])

    .controller('ProjectCtrl', function($scope, ProjectDataOp) {

        console.log("Project Controller reporting for duty.");

        $scope.status;
        $scope.projects = [];
        $scope.project = {};

        //getProjects();

        function getProjects(){
            ProjectDataOp.getProjects()
                .success(function (projects) {
                    $scope.projects = projects;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load project data: ' + error.message;
                });
        }

        $scope.createProject = function (project) {
            project = $scope.project;

            console.log(JSON.stringify(project));

            ProjectDataOp.createProject(project)
                .success(function () {
                    $scope.status = 'Project created! Refreshing project list.';
                    $scope.projects.push(project);
                }).
            error(function (error) {
                $scope.status = 'Unable to create project: ' + error.message;
            });
        };
    });
