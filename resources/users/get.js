var api = require("../api")
var util = require("../../util")
var creds = require("../credentials")

/**
 * @param {string[] | string} user_login The user login(s) to get
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires Scope `None`
*/


module.exports = async (user_login, credentials) => {
    if (typeof user_login == "object") user_login = user_login.join("&login=")

    var data = await api.call({
        path: `users?login=${encodeURI(user_login)}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || await creds.get() || {}),
    })

    return data.data || data

}
