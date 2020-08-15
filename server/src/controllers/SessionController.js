class SessionController{
    async store(req,res){
        const {email,password} = req.body

        if(email ==="lucas@gmail.com" && password==="12345678"){
            return res.send(true);
        }else{
            return res.status(400).json({error:"email or password invalids"})
        }
    }
}

export default new SessionController()