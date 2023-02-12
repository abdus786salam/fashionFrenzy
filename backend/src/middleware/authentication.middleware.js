const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
    
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.jwtSecretKey);
    
    if (decoded) {
      const user= decoded.user_info;
      if(user.user_type=="seller"){

          req.body.seller = user._id;
          next();
      }else if(user.user_type=="admin"){
        req.body.admin = user._id;
        next();
      }else{
        req.body.user = user._id;
        next();
      }
     
    } else {
      res.send("Please Login First");
    }
  } else {
    res.send(`Please login First token ${token} is not valid`);
  }
};
module.exports = {
    authentication
};
