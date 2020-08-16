import jwt from 'jsonwebtoken'

class SessionController{
    async store(req,res){
        const {email,password} = req.body
        
        if(email ==="lucas@gmail.com" && password==="12345678"){
            const token = jwt.sign({id:1},process.env.SECRET)
            return res.send(token);
        }else{
            return res.status(400).json({error:"email or password invalids"})
        }
    }
}

export default new SessionController()