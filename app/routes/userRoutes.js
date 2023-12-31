
const authJwt = require('../middleware/auth.jwt');
module.exports = (app) =>{
    const user_controller = require('../controller/userController');
    var router = require('express').Router();
    router.get('/:us', user_controller.validUsername);
    router.post('/signup', user_controller.createNewUser);
    router.post('/login', user_controller.login);
    router.get('/', authJwt,user_controller.updateUserCtrl);
    router.put('/:id',authJwt,user_controller.deleteUser);
    app.use('/api/auth', router);
}