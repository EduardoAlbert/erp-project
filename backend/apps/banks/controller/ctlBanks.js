const mdlBanks = require("../model/mdlBanks");

const getAllBanks = (req, res) =>
    (async () => {
        let banks = await mdlBanks.getAllBanks();
        res.json({ status: "ok", banks: banks });
    })();



module.exports = {
    getAllBanks,
};
