var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * get(broadcaster_id, credentials)
 * @param {string | string[]} broadcaster_id The broadcaster ID(s)
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires None
*/

module.exports = async ({ broadcaster_id }, credentials) => {
    if (typeof broadcaster_id == "object") broadcaster_id = broadcaster_id.join("&broadcaster_id=")

    console.log(typeof broadcaster_id)
    console.log(util.generateQueryString({ broadcaster_id }))

    var data = await api.call({
        path: `/channels${(util.generateQueryString({ broadcaster_id }))}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
    })

    return data.data || data
}
