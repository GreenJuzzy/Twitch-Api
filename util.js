var TwitchHeaders = (credentials) => {
    return { "Client-ID": credentials.client_id, "Authorization": `Bearer ${credentials.access_token}`}
}

var generateQueryString = (params) => {
    var queryString = "?"
    for (var key in params) {
        if (params.hasOwnProperty(key) && params[key]?.length > 0) {
            queryString += `${key}=${params[key]}&`
        }
    }
    return queryString
}

module.exports = {
    TwitchHeaders,
    generateQueryString
}