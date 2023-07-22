const express = require(`express`);
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

//ROUTE: 1 => create a user using : POST "/api/auth/createUser" . Doesn't require Authentication or No login required
router.post(`/createuser`, [
   body('email', 'Enter a valid email').isEmail(),
   body('name', 'Name must be greater than 5 character').isLength({ min: 5 }),
   body('password', 'Password must be greater than 5 character').isLength({ min: 5 }),
], async (req, res) => {

   // check error
   const error = validationResult(req);
   if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
   }

   //check user with this email already exist or not
   try {

      let user = await User.findOne({ email: req.body.email });
      if (user) {
         return res.status(400).json({ errors: "sorry this email already exists" });
      }

      const Salt = await bcrypt.genSalt(5);
      const securePassword = await bcrypt.hash(req.body.password, Salt);
      user = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: securePassword
      });

      const data = {
         id: user.id
      }

      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ success: (true), authToken });

   } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message })
   }

})

//ROUTE : 2 => Authentication a user using : POST "/api/auth/login" 
router.post(`/login`, [
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

   const error = validationResult(req);
   //if error return bad request
   if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
   }

   try {

      const { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ success: (false), errors: "Enter valid credentials" });
      }

      const checkpassword = await bcrypt.compare(password, user.password);
      if (!checkpassword) {
         return res.status(400).json({ success: (false), errors: "Enter valid credentials" });
      }

      const data = {
         id: user.id
      }

      const authToken = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ success: (true), authToken: authToken });

   } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message })
   }
})
//ROUTE : 3 => Get loggedin user details using : POST "/api/auth/getuser" 
router.get(`/getuser`, fetchuser, async (req, res) => {

   try {
      const userdetails = await User.findById(req.id).select("-password");
      res.send({success: (true), userdetails})

   } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message })
   }
})


module.exports = router;