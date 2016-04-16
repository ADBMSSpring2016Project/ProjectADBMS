var app=angular.module("myApp", []);

function redirect($window){
  /*localStorage.setItem("loginType",document.getElementById("loginType"));*/
  var loginType =localStorage.getItem("loginType");
  if(loginType=="doc")
  {
    window.location = "/main.html";
  }
  if (loginType=="pat")
  {
    window.location = "/patmain.html";
  }
  if (loginType=="diagadmin")
  {
    window.location = "/diagadminmain.html";
  }
  if (loginType="admin")
  {
    window.location = "/adminmain.html";
  }
}