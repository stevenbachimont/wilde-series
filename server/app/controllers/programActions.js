
const tables = require("../../database/tables");
// Some data to make the trick



// Declare the actions

const browse = async (req, res) => {
    const programsFromDB = await tables.program.readAll();

    res.json(programsFromDB);
};

const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);

    const program = programs.find((p) => p.id === parsedId);

    if (program != null) {
        res.json(program);
    } else {
        res.sendStatus(404);
    }
};

// Export them to import them somewhere else

module.exports = { browse, read };