var creds = { }

/**
 * set({ "client_id": "x", "client_secret": "x", "access_token": "x" })
 * @param {object} credentials Credentials Object
 * @param {string} credentials.client_id The client id of the application
 * @param {string} credentials.client_secret The client secret of the application
 * @param {string} credentials.access_token The access token of the user
 * @requires None
 */

module.exports = (credentials) => {
    creds = credentials ? credentials : creds
    return creds
}