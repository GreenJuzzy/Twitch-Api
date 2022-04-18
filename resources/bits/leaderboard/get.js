var api = require("../../api")
var util = require("../../../util")
var index = require("../../../index")

/**
 * get({ count, period, started_at, user_id }, credentials)
 * @param {number} count The number of objects to return
 * @param {string} period The period of the leaderboard
 * @param {string} started_at The date of the leaderboard
 * @param {string} user_id The user ID 
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id Twitch Client ID
 * @param {string} credentials.client_secret Twitch Client Secret
 * @param {string} credentials.access_token Twitch Access Token
 * @requires bits:read
*/

module.exports = async ({ count, period, started_at, user_id }, credentials) => {

    var data = await api.call({
        path: `/bits/leaderboard${util.generateQueryString({ "count": count, "period": period, "started_at": started_at, "user_id": user_id })}`,
        method: "GET",
        headers: util.TwitchHeaders(credentials || index.credentials || {}),

    })

    return data.data || data
}
