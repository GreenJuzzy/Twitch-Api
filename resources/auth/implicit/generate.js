var api = require("../api")
var util = require("../../util")
var creds = require("../../credentials")

/**
 * generate()
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires None
*/

module.exports = async (parameter, credentials) => {

    var data = await api.call({
        path: "",
        method: "",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
        body: {

        },
    })

    return data

}
