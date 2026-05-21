const db = require("../config/db");
const calculateDistance = require("../utils/distanceCalculator");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  const query =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
        error: err,
      });
    }

    res.status(201).json({
      success: true,
      message: "School added successfully",
    });
  });
};

exports.listSchools = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({
      success: false,
      message: "Invalid coordinates",
    });
  }

  db.query("SELECT * FROM schools", (err, schools) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    const sortedSchools = schools.map((school) => {
      const distance = calculateDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude,
      );

      return {
        ...school,
        distance: distance.toFixed(2) + " km",
      };
    });

    sortedSchools.sort(
      (a, b) => parseFloat(a.distance) - parseFloat(b.distance),
    );

    res.status(200).json({
      success: true,
      data: sortedSchools,
    });
  });
};
