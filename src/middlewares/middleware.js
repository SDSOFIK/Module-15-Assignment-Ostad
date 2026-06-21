const multer = require("multer");
const path = require("path")


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



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profile-pictures"); 
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG/PNG images are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } 
});


module.exports ={
 loginCheck ,
 upload
}
  
