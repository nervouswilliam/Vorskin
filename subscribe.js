function validateForm(){
    const name = document.getElementById("full-name").value
    const email = document.getElementById("email-address").value
    const number = document.getElementById("phone-number").value
    const preferences = document.getElementById("preferences-customer").value
    const receive = document.getElementById("receive-newsletter").checked
    const error = document.getElementById("errorMSG")
    let msg = ""
    if(!name)
    {
        msg = "Name must be filled!"
    }
    else if(!email)
    {
        msg = "Email address must be filled!"
    }else if(!email.endsWith("@gmail.com"))
    {
        msg = "Email Address must ends with @gmail.com"
    }
    else if(!number)
    {
        msg = "Phone Number must be filled!"
    }
    else if(number.length < 12)
    {
        msg = "Phone Number must be exactly 12 characters"
    }
    else if(preferences == "")
    {
        msg = "preferences must be filled!"
    }
    else if(!receive)
    {
        msg = "You must agree to receive newsletter"
    }

    if(msg)
    {
        error.innerHTML = msg;
        return false;
    }
    else
    {
        return true;
    }
}


    