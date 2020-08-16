var app_fireBase = {};
(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCmi44-6MybyW8fvDSgs50pPb1eMlM_TZk",
        authDomain: "coco-tweaks-login.firebaseapp.com",
        databaseURL: "https://coco-tweaks-login.firebaseio.com/",
        projectId: "coco-tweaks-login",
        storageBucket: "coco-tweaks-login.appspot.com",
        messagingSenderId: "649843615862"
      };
      firebase.initializeApp(config);

      app_fireBase = firebase;
    })()