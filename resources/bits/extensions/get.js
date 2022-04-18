var api = require("../../api")
var util = require("../../../util")
var index = require("../../../index")

/**
 * get({ extension_id, id, after, first }, credentials)
 * @param {string} extension_id The extension ID
 * @param {string} id The transaction ID
 * @param {string} after The cursor for pagination
 * @param {number} first The number of objects to return
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires None
*/

module.exports = async ({ extension_id, id, after, first }, credentials) => {

    var data = await api.call({
        path: `/extensions/transactions${util.generateQueryString({ "extension_id": extension_id, "id": id, "after": after, "first": first })}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || index.credentials || {}),

    })

    return data.data || data
}
