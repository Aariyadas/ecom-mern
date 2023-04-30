import bcrypt from 'bcryptjs'

const users =[
    {
        name:"Admin",
        email:"admin11@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Ariya",
        email:"ariya11@gmail.com",
        password:bcrypt.hashSync('123456',10),
     
     
    },

    {
        name:"Ash",
        email:"ash11@gmail.com",
        password:bcrypt.hashSync('123456',10),
   
        
    },
]


export default users