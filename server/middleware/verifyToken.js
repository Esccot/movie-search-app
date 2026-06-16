import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); //extract the payload and verifies it
    req.user = decoded; // created a new property called user
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
}

export default verifyToken;
