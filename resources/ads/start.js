var api = require("../api")
var util = require("../../util")
var index = require("../../index")

/**
 * @param {string} broadcaster_id The broadcaster ID
 * @param {number} length The length of the commercial in seconds ( 30, 60, 90, 120, 150, 180 )
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id The client id of the application
 * @param {string} credentials.client_secret The client secret of the application
 * @param {string} credentials.access_token The redirect uri of the application
 * @requires Scope `channel:edit:commercial`
 */

module.exports = async ({broadcaster_id, length}, credentials) => {

    var data = await api.call({
        path: "/channels/commercial",
        method: "POST",
        headers: util.TwitchHeaders(credentials || index.credentials || {}),
        body: {
            "broadcaster_id": `${broadcaster_id}`,
            "length": length
        }
    })

    return data.data || data

}
