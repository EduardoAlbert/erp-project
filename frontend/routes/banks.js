var express = require("express");

var ctlBanks = require("../app/banks/controller/ctlBanks");
var router = express.Router();


function authenticationMiddleware(req, res, next) {
    // Verificar se existe uma sessão válida.
    // isLogged = req.session.isLogged;    
  
    // if (!isLogged) {      
    //   res.redirect("/Login");
    // }

    console.log('middleware ok')
    next();
}; 

router.get("/", authenticationMiddleware, ctlBanks.getAllBanks);

module.exports = router;