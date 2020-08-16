import express from 'express'
import routes from './routes'
import {errors} from 'celebrate'
import 'dotenv/config'

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes()
    }

    middlewares(){
        this.server.use(errors({statusCode:400}))
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server