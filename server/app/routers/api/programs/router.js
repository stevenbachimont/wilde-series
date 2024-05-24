const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/programActions");

// ...

router.get("/:id", read); // Complete path is: /api/programs/:id

module.exports = router;