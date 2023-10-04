const axios = require("axios");

const getAllBanks = (req, res) =>
    (async () => {
        userName = req.session.userName;
        try {
            resp = await axios.get(
                process.env.API_URL + "/getAllBanks",
                {}
            );
            console.log("[ctlLogin.js] Valor resp:", resp.data);

            res.render()
        } catch (erro) {
            console.log(
                "[ctlBanks.js|getAllBanks] Try Catch:Erro de requisição"
            );
        }
    })();

module.exports = {
    getAllBanks,
};
