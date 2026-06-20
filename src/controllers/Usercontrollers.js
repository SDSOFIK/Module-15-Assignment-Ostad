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

// user Create 

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

// user read 
const readUser =(req , res)=>{
    res.status(200).json({
        success : true,
        message: "User read successfully",
        date : user 
    })
}

// user edit

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

// date delete 

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


// get all 

const getAllUsers = (req, res)=>{
    res.status(200).json({
        success: true,
        message: " All users fetched successfully",
        data: user
    })
};

// id qurey 

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


// login 

const loginUser =(req , res)=>{

    res.status(200).json({
        success: true,
        message: "User login successful"
    })
}


const logoutUser = (req , res)=>{
    res.status(200).json({
        success: true,
        message: "User logout successful"
    });

}


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
    searchUsers
}