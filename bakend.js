

var pepito = "Colombia";
var basededatos = {   
        ID:"cesar",
        password:"andrea"
 };
console.log("arrancando server de Node" );

var express = require("express");
var parcero = require("body-parser");
var jade = require('jade');
//var fn = jade();
var Web = express();
Web.use( parcero.urlencoded() );
var servidor;

servidor = Web.listen(8080, function (){
    console.log("Servidor  arrancando :D ")
 });

Web.get("/", function (req, res) {
   
    var html = fn(locals);

    //res.sendfile("juego1.html") + ("juego.js") ;
        //res.sendfile("juego.js");


 });

