var api = require("../api")
var util = require("../../util")
var index = require("../../index")

/**
 * @param {string | string[]} broadcaster_id The broadcaster ID(s)
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `None`
*/

module.exports = async (broadcaster_id, credentials) => {
    if (typeof broadcaster_id == "object") broadcaster_id = broadcaster_id.join("&broadcaster_id=")

    var data = await api.call({
        path: `/channels${encodeURI(util.generateQueryString(""))}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || index.credentials || {}),
        body: {

        },
    })

    return data.data || data
}
