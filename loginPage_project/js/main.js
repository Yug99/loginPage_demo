// function for forgot.html

var pwd = document.getElementById("newpassword");
var match = 1;
function check(elem){
    if(elem.value.length > 0){
        if(elem.value != pwd.value){
            document.getElementById('alert').innerText = "password do not match";
            match=0;
        }
        else{
            document.getElementById('alert').innerText = "";
            match=1;
        }

    }
    else{
        document.getElementById('alert').innerText = "please confirm the password";
        match=0;
    }

}

function validate(){
    if(match==1){
        return true;
    }
    else{
        return false;
    }
}

//function for singup.html

function P_gen(){
    var newpwd="";
    var charset="abcdefghijklmnopqrstuvwxyzABCDEFDHIJKLMNOPQRSTUVWXYZ0123456789";
    for(var i=0,n=charset.length; i<12;++i){
        newpwd +=charset.charAt(Math.floor(Math.randon()*n));
    }
    return newpwd;
}