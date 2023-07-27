var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
auth:{
    user:'gunasekhar0002@gmail.com',
    pass:'tpzvrtgtamxeoavm'

}

    
});
var mailOptions={
    from:'gunasekhar0002@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from Gunasekhar',
    text:'Task3 Completed'
};

transporter.sendMail(mailOptions,function(error,info){


    if(error){
        console.log(error);

    }
    else{
        console.log('Email sent:'+info.response);
    }
    
    
    
    
});