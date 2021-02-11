const express = require("express")
const methodRouter = express.Router()
const Method = require("../models/method.js")

// get all methods
methodRouter.get("/", (req, res, next) => {
    Method.find((err, methods) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(methods)
    })
})
// post a method
methodRouter.post("/", (req, res, next) => {
    const newMethod = new Method(req.body)
    newMethod.save((err, savedMethod) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMethod)
    })
})
// deleted method
methodRouter.delete("/:methodId", (req, res, next) => {
    Method.findOndAndDelete({_id:req.params.methodId}, (err, deletedMethod) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedMethod.method} from database`)
    })
})
module.exports = methodRouter