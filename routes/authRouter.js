const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Account = require('../models/Account')

router.post('/', async (req, res) => {
  try {
    const account = await Account.findOne({ username: req.body.username })

    if (!account) {
      res.status(401).send({ message: 'Invalid username' })
    } else {
      const hash = account.hash
      const token = account._id

      bcrypt.compare(req.body.password, hash, (error, result) => {
        if (result) {
          res.status(200).send({ token: token, username: account.username })
        } else {
          res.status(401).send({ message: 'Invalid password' })
        }
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

module.exports = router
