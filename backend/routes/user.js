var express = require("express"),
  router = express.Router(),
  verifyToken = require("../middlewares/authJWT.js"),
  { signup, signin } = require("../controllers/auth.controller.js"),
  { generateNonce } = require("../utils/generateNonce.js"),
  isSignedIn = require("../middlewares/isSignedIn.js");

router.get("/nonce", (req, res) => generateNonce(req, res));

router.post("/login", (req, res) => signin(req, res));

router.get("/validation", isSignedIn, function (req, res) {
  res.status(200).send({
    message: "Access Approved",
  });
});

// router.get("/hiddencontent", verifyToken, function (req, res) {
//   console.log("/hiddencontent called", req.user);
//   if (!req.user) {
//     res.status(403).send({
//       message: "Invalid JWT token",
//     });
//   } else {
//     res.status(200).send({
//       message: "Congratulations! but there is no hidden content",
//     });
//   }
//   // implement below code of authorization feature
//   // if (req.user == "admin") {
//   //   res.status(200).send({
//   //     message: "Congratulations! but there is no hidden content",
//   //   });
//   // } else {
//   //   res.status(403).send({
//   //     message: "Unauthorised access",
//   //   });
//   // }
// });

module.exports = router;
