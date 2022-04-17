var api = require("../api")
var util = require("../../util")

/**
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `None`
*/

module.exports = async (parameter, credentials) => {

    var data = await api.call({
        path: "",
        method: "",
        headers: util.TwitchHeaders(credentials),
        body: {

        },
    })

    return data

}
