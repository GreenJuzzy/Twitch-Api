var fetch = require("node-fetch")

/**
 * call({ url: "", path: "", method: "", headers: {}, body: {} })
 * @param {object} param0 Object
 * @requires None
 */

module.exports = async ({ url, path, method, headers, body = undefined }) => {
    var statusData
    try {
        var options = {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        }
        if (!body) delete options.body
        

        return await fetch(url ? url : `https://api.twitch.tv/helix${path.charAt(0) == "/" ? path : path = "/" + path}`, options).then(res => {
            statusData = { status: res.status, statusText: res.statusText }
            return res.json()
        })

    } catch (error) {
        return { statusData, error: error.message }
    }
}