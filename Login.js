function loginForm(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //validate the form
    if(email==""){
        alert("Email is reqruired");
        return false;
    }
    if(password==""){
        alert("Password is required");
        return false;
    }


}
function myfunction(){
    alert("Login Successfully");
}