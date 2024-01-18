import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try{
           const token  = req.headers.authorization.split(' ')[1]
           let  decodeDate = jwt.verify(token, 'test')
           req.userId = decodeDate?.id
           next()
    }
    catch(error){
       console.log(error)
    }
}

export default auth;