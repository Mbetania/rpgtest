export const helloMiddleware = (req, res, next) =>{
    console.log("hello")
    next()
}

