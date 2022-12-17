// check if the user is logged in
if (getSession()=='admin') {
    // show the content
    window.location.href = "content.html";
    console.log(getSession());
    window.stop();
    // set a timer to log the user out after 5 minutes
    setTimeout(function() {
      logout();
    },1*60*1000);
  } else {
    // redirect to the login page
    window.location.href = "index.html";
    
  }
  

  

  
  function getSession() {
    // retrieve the user's session from storage
    return document.cookie;
  }
  
  
  
  function logout() {
    window.location.href = "index.html";
  }
  