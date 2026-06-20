const loginCheck = (req, res , next) =>{
     const {email, password  } = req.body;

    if(!email || !password ){
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    };
    if(!email.includes("@")){
            return res.status(400).json({ message: "Invalid email format" });

    } ;
    next();
};


module.exports ={
 loginCheck 
}
  
