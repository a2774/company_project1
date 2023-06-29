const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/', homeController.home);
router.get('/registration', homeController.registration);
router.get('/home',homeController.dashbord);
router.post('/registration', homeController.registrationPost);
router.get('/forgetpassword', homeController.forgetpassword);
router.post('/dashbord', homeController.dashbord);
router.get('/userform',homeController.userform);
router.get('/admin_index', homeController.admin_index);
router.get('/admin_create', homeController.admin_create);
// router.post('/admin_create', homeController.admin_createPost);
router.post('/adddata',homeController.admin_createPost);
router.get('/delete/:id',homeController.delete);




module.exports = router
