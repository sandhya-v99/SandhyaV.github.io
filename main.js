var firebaseConfig = {
    apiKey: "AIzaSyCBNzT4IMJ4Qk-zIt32XVOIvD-F4anB0Zw",
    authDomain: "myprofile-b21cc.firebaseapp.com",
    databaseURL: "https://myprofile-b21cc.firebaseio.com",
    projectId: "myprofile-b21cc",
    storageBucket: "myprofile-b21cc.appspot.com",
    messagingSenderId: "212855370128",
    appId: "1:212855370128:web:d790927544302a1f468315",
    measurementId: "G-E16Z7W5JNL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




  var messagesref = firebase.database().ref('messages');


  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  function submitForm(e){
      e.preventDefault();
  
      var name= getInputVal('name');
      var email= getInputVal('email');
      var comment= getInputVal('message');
  
      saveMessage(name,email,comment);
  
      document.querySelector('.alert').style.display = 'block';
  
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },5000);
  
      document.getElementById('contact-form').reset();
      
  }
  
  
  function getInputVal(id){
      return document.getElementById(id).value;
  }
  
  function saveMessage(name,email,comment){
      var newMessageRef = messagesref.push();
      newMessageRef.set({
          name: name,
          email: email,
          comment:comment
      });
  }