# Getting Access Tokens

Read [Create a request](https://github.com/GreenJuzzy/TwitchAPI/blob/master/examples/createRequest) on how to use your credentials.

<br>

---
## Client Credentials
<br>

This method gives you an access token just by client id and secret.
<br>

```javascript
// In an asynchronus function

var Twitch = requre("./TwitchAPI") // Folder or index.js

var credentials = { "client_id": "ID", "client_secret": "SECRET" }

var grantData = await Twitch.auth.client.get(credentials) // Returns access_token, expires_in, and token_type
```

