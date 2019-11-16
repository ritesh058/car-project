
    const errorMessage = {
        'userName':{
            'required':"User Name required "
        },
        'mobileNo':{
            'required':"* Mobile Number required",
            'minlength':"* Mobile Number should be of 10 digit",
            'maxlength':"* Mobile Number should be of 10 digit",
            'pattern':"* Mobile Number should be number"
        },        
        "password":{
            'required':"Password is required",
            
        },
        "confirmPassword":{
            'required':"confirm Password is required",
            "notEqual":"*Password and confirm Password donot match"
        },
        "emailId":{
            'required':"Email-Id is required",
            "email":"Emid-Id should should be format xyx@gmail.com"
        }


    }

    const formErrors ={ 
        'userName':"",
        'mobileNo':"",
        'password':"",
        'confirmPassword':"",
        'emailId':""

    }

    export const validationMessage ={ errorMessage,formErrors }


