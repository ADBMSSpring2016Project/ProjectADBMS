var app=angular.module("myApp", []);

app.controller("loginCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.loginUser = function(userName, pwd, loginType) {
        console.log("LoginCtrl: loginUser: Entered with: " + userName + ", " + loginType);
        $http({
            method: 'GET',
            url : 'https://api.mongolab.com/api/1/databases/medic/collections/userDetails?q={"userName":"'+userName+'"}&f={"password":1,"userType":1}&fo=true&apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ'
        })
        .success(function(data) {
                localStorage.setItem("loginType",loginType);
                var type=localStorage.getItem("loginType");
                
                if(loginType=="doc" && data.userType=="Doctor" && data.password == pwd){
                    localStorage.setItem("userName",document.getElementById("userName"));
                    alert(userName+"Logged In Successfully");
                    $window.location.href = "/main.html";
                    }else if(loginType=="pat" && data.userType=="Patient" && data.password == pwd){
                                localStorage.setItem("userName",document.getElementById("userName"));
                                alert(userName+"Logged In Successfully");
                                $window.location.href = "/patmain.html";
                                }else if(loginType=="admin" && data.userType=="admin" && data.password == pwd){
                                            localStorage.setItem("userName",document.getElementById("userName"));
                                            alert(userName+"Logged In Successfully");
                                            $window.location.href = "/adminmain.html";
                                            }else if(loginType=="diagadmin" && data.userType=="diagAdmin" && data.password == pwd){
                                                        localStorage.setItem("userName",document.getElementById("userName"));
                                                        alert(userName+"Logged In Successfully");
                                                        $window.location.href = "/diagadminmain.html";
                                                        }else {
                                                                    alert("Invalid Login Credentials");
                                                                }
        })
        .error(function() {
            alert('Failed to authenticate user '+userName);
        });
        console.log("LoginCtrl: loginUser: Finished");
    };
});
