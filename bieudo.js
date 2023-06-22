//--------------------------------------------
// TODO: Replace with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
    apiKey : "AIzaSyAs77VKKm6Sic1xWZJu3t-zvxhBgOW637w" , 
    authDomain : "nhung-con-bo-cham-chi.firebaseapp.com" , 
    databaseURL : "https://nhung-con-bo-cham-chi-default-rtdb.firebaseio.com" , 
    projectId : "nhung-con-bo-cham-chi" , 
    storageBucket : "nhung-con-bo-cham-chi.appspot.com" , 
    messagingSenderId : "1044973508784" , 
    appId : "1:1044973508784:web:aa9f53c2eb4ddea1298375" , 
    measurementId : "G-XCLZKVJLYX" 
  };
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

database.ref("/nhiet do").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
    } else
        console.log("No data available!")
});
// var temp = document.getElementById("nhietdo");
// database.ref("/Thoi tiet hom nay/nhiet do").on("value", function(snapshot) {
//          temp.value = snapshot.val();
//         document.getElementById("nhietdo").innerHTML = temp.value;
   
// });
database.ref("do am").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
    } else
        console.log("No data available!")
});

database.ref("toc do gio").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var wind = snapshot.val();
        document.getElementById("tocdogio").innerHTML = wind;
    } else
        console.log("No data available!")
});

database.ref("huong gio").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var windwave = snapshot.val();
        document.getElementById("huonggio").innerHTML = windwave;
    } else
        console.log("No data available!")
});

database.ref("goc gio").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var gocgio = snapshot.val();
        document.getElementById("goc").innerHTML = gocgio;
    } else
        console.log("No data available!")
});

database.ref("mua").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var rain = snapshot.val();
        document.getElementById("lmua").innerHTML = rain;
    } else
        console.log("No data available!")
});
database.ref("tia uv").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var uv = snapshot.val();
        document.getElementById("tiauv").innerHTML = uv;
    } else
        console.log("No data available!")
});
// By:
// Manuel Pinto
// https://manuelpinto.in

