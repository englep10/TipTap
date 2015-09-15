'user strict';

app.controller('AuthController', function($scope, $location, Auth, toaster){

  $scope.register = function(user) {
    Auth.register(user)
      .then(function() {
        toaster.pop('success', 'Registered successfully')
        $location.path('/');
      }, function(err) {
        toaster.pop('error', 'Opps, something went wrong!')
      });
  };

  $scope.login = function(user){
    Auth.login(user)
    .then(function(){
      toaster.pop("success", "Logged in successfully!");
      $location.path('/');
    }, function(err){
      toaster.pop('error', 'Opps, something went wrong!')
    })
  };

  $scope.changePassword = function(user) {
    Auth.changePassword(user)
      .then(function(){

        // Reset Form
        $scope.user.email = '';
        $scope.user.oldPass = '';
        $scope.user.newPass = '';

        toaster.pop('success', "Changed Password successfully")
        console.log("Password changed successfully!");
      }, function(err) {
        toaster.pop("error", "Something went wrong")
        console.log("Error...")
      });
  };

});
