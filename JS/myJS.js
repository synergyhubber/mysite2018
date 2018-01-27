var username = "Gareth"
var email = "gareth.teo@sc.com"


function getConfirmation(){
var retVal=confirm("Do you want to continue?");

if(retVal == true) {
    document.getElementById("name").value = username;
    document.getElementByID("email").value = email;
    //document.write("User will proceed");
    //return true;
} else{
    //document.write("User has cancelled the ops.");
    //return false;
}

}