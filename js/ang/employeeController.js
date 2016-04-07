/**
 * Created by Erik on 4/4/2016.
 */

app.controller('employeeController', function($scope, $http) {

    $scope.employees = null;
    $scope.statusMessage = null;




    $scope.save = function() {
        $scope.statusMessage = 'Calling Save!';
        $scope.reset();

        //$http.post(saveURL, $scope.newEmployee)
          //  .then(successHandler,errorHandler);
    };

    $scope.clearInputForm = function() {
        $scope.newEmployee = null;
    };








    /*
        Success and error callback handlers for REST calls
     */

    function successHandler(response) {
        if(angular.isArray(response.data)) {
            $scope.employees = response.data;
        } else {
            $scope.employees.push(response.data);
        }

        $scope.statusMessage = 'Data Retrieved';
    }

    function errorHandler(response) {
        $scope.statusMessage = 'Error';
        $scope.errorMessage = response;
    }

    $scope.reset = function() {
        $scope.employees = [];
        $scope.errorMessage = '---';
    };


});