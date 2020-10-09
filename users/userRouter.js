const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Users = require('./UserModel')

router.get("/", (req, res) => {
    Users.find()
        .then((users) => {
            res.status(200).json({ data: users })
        })
        .catch((err) => res.send(err))
})

module.exports = router