class SessionController{
    async store(req,res){
        const {email,password} = req.body
        return res.send('oi')
    }
}

export default new SessionController()