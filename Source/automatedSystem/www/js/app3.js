var app=angular.module("myApp", []);

app.controller("loginCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.loginUser = function(userName, password) {
        console.log("LoginCtrl: loginUser: Entered with: " + userName + ", " + password);
        $http({
            method: 'GET',
            url : 'https://api.mongolab.com/api/1/databases/medic/collections/users?q={"userName":"'+userName+'"}&f={"password":1}&fo=true&apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ'
        })
        .success(function(data) {
            if (data.password == password) {
		localStorage.setItem("loginType",document.getElementById("loginType").value)
		localStorage.setItem("userName",document.getElementById("userName").value);
                $window.location.href = "/index.html";
            } else {
                alert("Invalid password");
            }
        })
        .error(function() {
            alert('Failed to authenticate user '+userName);
        });
        console.log("LoginCtrl: loginUser: Finished");
    };
});