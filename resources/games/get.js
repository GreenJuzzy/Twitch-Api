var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires None
*/

module.exports = async ({ name }, credentials) => {
    
    var data = await api.call({
        path: `/games${util.generateQueryString({ "name": name })}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || await creds.get() || {})
    })

    return data.data || data
}
