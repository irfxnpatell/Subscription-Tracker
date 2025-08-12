import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ 
        type:String , 
        required : [true , 'Username is required '],
        trim : true,
        minLength : 2,
        maxLength : 50,
    },
    email:{ 
        type:String , 
        required : [true , 'User email is required '],
        unique: true,
        trim : true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'Please fill a valid email address'],
    },
    password:{ 
        type:String , 
        required : [true , 'User password is required '],
        minLength : 6,
        maxLength : 50,
    },
}, {timestamps : true});

const user  = mongoose.model('User',userSchema);

export default User;