var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `None`
*/

module.exports = async ({ broadcaster_id, msg_id, msg_text, user_id }, credentials) => {

    var data = await api.call({
        path: `/moderation/enforcements/status${(util.generateQueryString({ broadcaster_id }))}`,
        method: "POST",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
        body: {
            "msg_id": msg_id,
            "msg_text": msg_text,
            "user_id": user_id
        },
    })

    return data.data || data
}
