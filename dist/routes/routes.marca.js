"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersMarca = require("../controllers/controllers.marca.js");
var rutaMarca = (0, _express.Router)();
rutaMarca.get("/marca/:id", _controllersMarca.mostrarMarca);
rutaMarca.get("/marca", _controllersMarca.listarMarca);
rutaMarca.post("/marca", _controllersMarca.crearMarca);
rutaMarca.put("/marca", _controllersMarca.modificarMarca);
rutaMarca["delete"]("/marca", _controllersMarca.eliminarMarca);
var _default = exports["default"] = rutaMarca;