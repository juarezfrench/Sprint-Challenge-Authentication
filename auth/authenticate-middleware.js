/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const {authorization} = req.headers
  jwt.encode(secret, payload, function (err, token) {
    if (err) {
      console.error(err.name, err.message);
    } else {
      console.log(token);

  if (username && password) {
    Users.findBy({ username }
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Ran into an unexpected error' });
      }));
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
}}
  )};
