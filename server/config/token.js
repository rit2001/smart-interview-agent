import jwt from 'jsonwebtoken';

const genToken = (userId) => {
  try {
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY missing");
    }


    const token = jwt.sign(
      { userId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    return token;

  } catch (error) {
    console.log("Error in genToken:", error.message);
    return null;   // ✅ MUST return something
  }
};

export default genToken;