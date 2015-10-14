'use strict';
app.controller('filepickerController', function ($scope, filepickerService, $window, Task) {
    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');

    $scope.pickFile = pickFile;

    $scope.onSuccess = onSuccess;

    function pickFile(){
        filepickerService.pick(
            {mimetype: 'image/*'},
            onSuccess
        );
    };

    function onSuccess(Blob){
        $scope.files.push(Blob);
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
    };
})
