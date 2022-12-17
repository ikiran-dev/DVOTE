window.onload=function () {
    render();
  };
  function render() {
      window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
  
  var aadhaar_no_phone_no = {
    "360611993348": "6363053425",
  }
  function phoneAuth() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";

    
      //get the number
   
    var num = document.getElementById('number').value;
    var phoneNumber = "+91" + aadhaar_no_phone_no[num];
      //phone number authentication function of firebase
      //it takes two parameter first one is number,,,second one is recaptcha
      firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier).then(function (confirmationResult) {
          //s is in lowercase
          window.confirmationResult=confirmationResult;
          coderesult=confirmationResult;
          console.log(coderesult);
          alert("Message sent");
      }).catch(function (error) {
          alert(error.message);
        
      });
  }
  function codeverify() {
      var code=document.getElementById('verificationCode').value;
      coderesult.confirm(code).then(function (result) {
          alert("Successfully registered");
          var user=result.user;
          console.log(user);
      }).catch(function (error) {
          alert(error.message);
      });


  }