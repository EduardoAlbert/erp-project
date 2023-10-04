const db = require("../../../database/databaseconfig");

const getAllBanks = async () => {
    return (
        await db.query(
            "SELECT * FROM banks WHERE removed = false ORDER BY name ASC"
        )
    ).rows;
};

module.exports = {
    getAllBanks,
};
