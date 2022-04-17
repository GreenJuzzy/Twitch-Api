var api = require("../../api")
var util = require("../../../util")
var index = require("../../../index")

/**
 * @param {string} broadcaster_id The broadcaster ID
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `bits:read`
*/

module.exports = async (broadcaster_id, credentials) => {

    var data = await api.call({
        path: `/bits/cheermotes${util.generateQueryString({ "broadcaster_id": broadcaster_id })}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || index.credentials || {}),
    })

    return data.data || data
}
