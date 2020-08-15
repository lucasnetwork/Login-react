import {celebrate,Joi,Segments} from 'celebrate'

const SessionValidate = {
    store:celebrate({
        [Segments.BODY]:Joi.object().keys({
            email:Joi.string().email().required(),
            password:Joi.string().min(8).required(),
        })
    })
    
}

export default SessionValidate