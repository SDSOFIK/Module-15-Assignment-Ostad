let user = [{
    
    id: 1,
    name: "Sofik",
    email: "sofik@gmail.com",
    age: 24,
  },
  {
    id: 2,
    name: "Radesh",
    email: "radesh@gmail.com",
    age: 25,
  },
  {
    id: 3,
    name: "Alamin",
    email: "alamin@gmail.com",
    age: 23,
  },
   {
    id: 4,
    name: "Rohan",
    email: "rohan@gmail.com",
    age: 25,
  },
];

let userID = 5;

// Create Route

const createUser = (req , res)=>{
    const {name , email, age} = req.body;
    if (!name || !email || !age){
        return res.status(400).json({
            success: false,
            message: "please name email or age require"
        });
    };
    let newUser ={
        id: userID++,
        name,
        email,
        age
    };

    user.push(newUser);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        Data: newUser
    });
};

// Read Route
const readUser =(req , res)=>{
    res.status(200).json({
        success : true,
        message: "User read successfully",
        date : user 
    })
}

// Update Route

const updateUser = (req , res)=>{
    const id = parseInt(req.params.id);
const index = user.findIndex((u) =>u.id === id);
if(index === -1){
    return res.status(404).json({
        success: false,
        message: `${id} this id not found`
    });
};
const {name , email , age} = req.body
user[index]= {
    ...user[index],
    ...name &&{name},
    ...email && {email},
    ...age && {age}
};
res.status(200).json({
    success: true,
    message: "User updated successfully",
    UpadateData: user[index]
});
};

// Delete Route

const deleteUser = (req, res)=>{
    const id = parseInt(req.params.id);

    let index = user.findIndex((u)=>u.id === id);
    if(index === -1){
        return res.status(404).json({
            success: false,
            message: "please valid id"
        });
    };
    
  const deleted = user.splice(index, 1)[0];
  res.status(200).json({
    success: true,
    message: "user deleted",
    data: deleted,
  });
};


// Get All Users

const getAllUsers = (req, res)=>{
    res.status(200).json({
        success: true,
        message: " All users fetched successfully",
        data: user
    })
};

// Get User by ID

const getUserById = (req, res) => {

    const id = parseInt(req.params.id);

  const foundUser = user.find((u) => u.id === id);

  if (!foundUser) {
    return res.status(404).json({
      success: false,
      message: `User with ID ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    message: "User fetched by ID",
    data: foundUser,
  });
};


// User Login

const loginUser =(req , res)=>{

    res.status(200).json({
        success: true,
        message: "User login successful"
    })
}

// User Logout

const logoutUser = (req , res)=>{
    res.status(200).json({
        success: true,
        message: "User logout successful"
    });

}
// Change Password


const changePassword = (req, res)=>{
    const {oldPassword , newPassword} = req.body;

    if(!oldPassword || !newPassword ){
        return res.status(400).json({
            success: false,
            message: "Old and new password are required"
        });
    };
    res.status(200).json({
        success: true,
        message:"Password changed successfully",
        data: {"old Password": oldPassword , "new Password": newPassword}
    });
}

// Update Profile

const updateProfile = (req, res)=>{
    const {name , email , phone , password} = req.body;

    if(!name || !email || !phone || !password){
        return res.status(400).json({
            success: false,
            message :  "At least one field is required to update"
        });
    };
    res.status(200).json({
        success: true,
        message: "User profile updated successfully",
        date:{
            "name": name,
            "email": email,
            "phone": phone ,
            "password": password
        }
    });
}

// Make Admin

const makeAdmin = (req, res)=>{
    const {id} = req.params;
     if (!id) {
    return res.status(400).json({success: false , message: "User id is required" });
  }
  res.status(200).json({
    success:true,
    message: "User made admin successfully"
  });
};

// Remove Admin


const removeAd = (req, res)=>{
    const {id} = req.params;
     if (!id) {
    return res.status(400).json({success: false , message: "User id is required" });
  }
  res.status(200).json({
    success:true,
    message: "Admin role removed successfully"
  });
};

// Search Users


const searchUsers = (req, res) => {
  const { name, email } = req.query;   // query string থেকে আসে, req.params না!

  if (!name && !email) {
    return res.status(400).json({
      success: false,
      message: "At least one search parameter (name or email) is required"
    });
  }


  return res.status(200).json({
    success: true,
    message: "User search completed successfully",
    data: req.query
  });
};




// Filter Users
const filterUsers = (req , res)=>{
    const {role , status} = req.query;

    if (!role || !status){
        return res.status(400).json({
            success: false,
            message: "parameter role and status need at"
        });
    };

    //example data 
    let userRole = [
        { id: "1", name: "Rafiul Islam", role: "admin", status: "active" },
    { id: "2", name: "sofik", role: "super Admin", status: "active" },
    { id: "3", name: "Karim Ahmed", role: "user", status: "active" }
    ]

    let filterResult = userRole.filter((u)=>u.role === role && u.status === status )
    res.status(200).json({
        success: true,
        message:"User filter completed successfully",
        data: filterResult
    })
    // please serch  (http://localhost:5000/filter?role=admin&&status=active)
}


// Block User


const blockUser = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ 
        success: false, message: "User id is required" });
  };
  return res.status(200).json({
    success: true,
    message: "User blocked successfully"
  });
};
const unblockUser = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ 
        success: false, message: "User id is required" });
  };
  return res.status(200).json({
    success: true,
    message: "User unblocked successfully"
  });
};
// Verify Email


const verifyEmail = (req , res)=>{
    const {email , OTP} = req.body;

    if(!email.includes("@")){
   return res.status(400).json({ message: "Invalid email format" });}

   if(!email || !OTP){
    return res.status(400).json({
        success: false,
        message: "email and OTP are required"
    });
   };

   res.status(200).json({
    success: true,
    message: "Email verified successfully"
   });

}
// Resend Verification

const resendVerification = (req , res)=>{

    const {email} = req.body;

    if(!email.includes("@")){
        return res.status(400).json({
            success: false,
            message: "pleas Invalid email format"
        });
    };
    if(!email){
         return res.status(400).json({
            success: false,
            message: "pleas enter your mail "
        });
    };
    res.status(200).json({
        success:true,
        message: "Verification email resent"
    });
}

// Upload Profile Picture


const uploadProfilePicture = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Profile picture uploaded successfully",
    data: {
      filename: req.file.filename,
      path: req.file.path
    }
  });
};
// Delete Account


const deleteAccount  = (req, res)=>{

  res.status(200).json({
    success: true,
    message: "Account deleted successfully",
  });
};

module.exports ={

    createUser,
    readUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    loginUser,
    logoutUser,
    changePassword,
    updateProfile,
    makeAdmin,
    removeAd,
    searchUsers,
    filterUsers,
    blockUser,
    unblockUser,
    verifyEmail,
    resendVerification,
    uploadProfilePicture,
    deleteAccount
}