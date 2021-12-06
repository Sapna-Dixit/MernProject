var nodemailer = require("nodemailer");
var transport  = nodemailer.createTransport({
    host : 'smtp.webiwork.com',
    port : 587,
    secure : false,
    requireTLS : true,
    auth : {
        user :"",
        password :"  "
    }
})

var mailOption = {
    from :"",
    to   : "",
    subject :"test nodemailer",
    text :  "Webiwork Technology"
}

transport.sendMail(mailOption , function(error, info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("Email hasbeen sent", info.response);
    }
})