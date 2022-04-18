var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * update(description, credentials)
 * @param {string} description The description to set
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires user:edit
*/

module.exports = async (description, credentials) => {

    var data = await api.call({
        path: `/users?description=${encodeURI(description)}`,
        method: "PUT",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
    })

    return data.data || data

}