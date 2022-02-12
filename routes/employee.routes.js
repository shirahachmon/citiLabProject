
const express= require("express")
const router = express.Router()
const controller = require ("../controllers/employee.controller");

// Define the routes
router.get("/", controller.employees_all);

module.exports =router;