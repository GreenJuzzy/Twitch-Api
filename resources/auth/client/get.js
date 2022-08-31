var api = require("../../api")
var util = require("../../../util")
var creds = require("../../credentials")

/**
 * get()
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `None`
*/

module.exports = async ({ client_id, client_secret }) => {
    var data = await api.call({
        url: `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
        method: "POST",
    })

    return data
}
