const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log(req.query.code);
    res.redirect("/dashboard");
  }
);

router.get("/logout", (req, response) => {
  req.logout();
  response.redirect("/");
});

module.exports = router;
