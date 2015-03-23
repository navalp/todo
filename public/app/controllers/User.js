app.controller('UserController', ['$scope', 'UserService', function($scope, UserService) {
        $scope.User = {name: '', email: ''};
        UserService.get(function(response, error) {

            $scope.users = response.data;
        });

        $scope.delete = function(index, id) {
            if (confirm('Are you sure want to delete?')) {
                UserService.delete(id, function(response, error) {

                    $scope.users.splice(index, 1);
                });

            }

        };
        $scope.save = function() {
            if(!$scope.User.name||!$scope.User.email) {
                alert("Name and email required");
                return false;
            }
            UserService.save({name: $scope.User.name, email: $scope.User.email}, function(response, error) {

                $scope.users.push(response.data);

            });

            $scope.User = {name: '', email: ''};
        };
    }]);
