

function validatForm(){

    //get the values of the form field
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
  
  
    //validate the form data
    if(name=="")
    {
      alert("Fullname is required");
      return false;
    }
    if(email=="")
    {
      alert("email is required");
      return false;
    }
    if(phone=="")
    {
      alert("Phonenumber is required");
      return false;
    }
    if(password=="")
    {
      alert("Password is required");
      return false;
    }
    if(password!=password2)
    {
      alert("Passwor should not match");
      return false;
    }
  }
  function myfunction(){
    window.location.reload();
    alert("Registered Successfully");
  }