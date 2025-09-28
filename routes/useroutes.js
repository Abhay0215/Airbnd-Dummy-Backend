const express = require("express");
const verifyToken = require("../middleware/verifyTokens")
const { registerUser,
        loginUser,
        emailCheck,
} = require("../controllers/authController")
const { createReservation,
} = require("../controllers/reserveController")
const router = express.Router();

//////////////////////////user routes/////////////////////////////////

router.route("/login").post(loginUser);              
router.route("/register").post(registerUser);
router.route("/email-check").post(emailCheck);
router.route("/reserve").post(verifyToken, createReservation);


module.exports = router; 