const Autheciate = async (req, res, next) => {
  try {
    // Placeholder for authentication logic
    const isAuthenticated = true; // Replace with actual authentication check
    if (isAuthenticated) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default Autheciate;
