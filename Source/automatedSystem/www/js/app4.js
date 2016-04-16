var app=angular.module("myApp", []);

app.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike) {
    
    $scope.pageClass = 'register';
    $scope.registerUser = function(userName,firstName,lastName,emailId,password,dob,phNum,gender,userType) {
    console.log("inside register function");
    console.log("RegisterCtrl: registerUser: Entered with: " + userName + ", " + userType);
    $http({
        method: 'POST',
        url : 'https://api.mongolab.com/api/1/databases/medic/collections/userDetails?apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ',
        data: JSON.stringify({
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                    emailId: emailId,
                    dob: dob,
                    phNum: phNum,
                    gender: gender,
                    userType: userType
                }),
        contentType: "application/json"
    }).success(function() {    
        alert($scope.firstName+" - User Registered Successfully as "+$scope.userType);
        $scope.userName ="";
        $scope.firstName ="";
        $scope.lastName ="";
        $scope.password="";
        $scope.emailId="";
        $scope.dob="";
        $scope.phNum="";
        $scope.gender="";
        $scope.userType="";
    }).error(function() {
            alert('Failed to authenticate user '+userName);
        });
        console.log("RegisterCtrl: registerUser: Finished");
            
            
    //Decorator Pattern Start 
    
    function StatusUpdate() {
 
        this.state = function () { return "User is registered successfully with username : "; };
        
        }
        
        // Decorator 1
        function Update( statusupdate ) {
        
        var v = statusupdate.state();
        statusupdate.state = function() {
            return v + userName;
        };
        
        }
               
        var su = new StatusUpdate();
        Update( su );
        
        console.log( su.state() );
     
     //Decorator Pattern End
     
    }; 
});