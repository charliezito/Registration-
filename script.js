function validate(){

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var address=document.getElementById("address").value;
    var p1=document.getElementById("password").value;
    var p2=document.getElementById("password1").value;

    
    if (name=="" && email=="" && address=="")
    {
        alert("fields cannot be null");
        return false;
    }
    else if(p1.length<8)
    {
        alert("Password must be 8 characters long");
        return false;
    }

    if( p1=="" && p2=="")
    {
        alert("fields cannot be empty");
        return false;
    }
    else if(p1!=p2)
    {
        alert("password should match")
        return false;
    }
    else{
        return true;
    }

}