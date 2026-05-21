const validateSchool = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude === undefined || longitude === undefined) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return res.status(400).json({
      success: false,
      message: "Latitude and Longitude must be numbers",
    });
  }

  next();
};

module.exports = validateSchool;
