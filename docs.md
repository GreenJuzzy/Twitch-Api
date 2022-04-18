 - [ads](ads)
    - [start.js]()


<br>

 - [analystics](analystics)


<br>

 - [api](api)
    - [call.js]()


<br>

 - [auth](auth)
    - [client](#auth/client)
    - [implicit](#auth/implicit)
        - [generate()](#generate)


<br>

 - [bits](bits)
    - [cheermotes](#bits/cheermotes)
        - [get()](#get)
    - [extensions](#bits/extensions)
        - [get()](#get)
    - [leaderboard](#bits/leaderboard)
        - [get()](#get)


<br>

 - [channels](channels)
    - [editors](#channels/editors)
        - [get()](#get)
    - [get.js]()
    - [modify.js]()


<br>

 - [chat](chat)


<br>

 - [clips](clips)


<br>

 - [credentials](credentials)
    - [get.js]()
    - [set.js]()


<br>

 - [entitlements](entitlements)


<br>

 - [eventsub](eventsub)


<br>

 - [extensions](extensions)


<br>

 - [games](games)


<br>

 - [goals](goals)


<br>

 - [hypetrain](hypetrain)


<br>

 - [moderation](moderation)


<br>

 - [music](music)


<br>

 - [points](points)


<br>

 - [polls](polls)


<br>

 - [predictions](predictions)


<br>

 - [schedule](schedule)


<br>

 - [search](search)


<br>

 - [streams](streams)


<br>

 - [subscriptions](subscriptions)


<br>

 - [tags](tags)


<br>

 - [teams](teams)


<br>

 - [users](users)
    - [get.js]()
    - [update.js]()


<br>

 - [videos](videos)


<br>



<br>

<br>

---
## ads
<br>

<br>

### `start`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster ID
number | length | The length of the commercial in seconds ( 30, 60, 90, 120, 150, 180 )
object | credentials | Credentials Object
string | credentials.client_id | The client id of the application
string | credentials.client_secret | The client secret of the application
string | credentials.access_token | The access token of the user

#### Scope - `channel:edit:commercial`

 #### Example
```javascript
start({ broadcaster_id, length }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/ads/start.js#L16)

<br>

---
## analystics
<br>

<br>

---
## api
<br>

<br>

### `call`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | param0 | Object

#### Scope - `None`

 #### Example
```javascript
Call Function
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/api/call.js#L9)

<br>

---
## auth
<br>

## auth/implicit
<br>

### `generate`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `None`

 #### Example
```javascript
generate()
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/auth/implicit/generate.js#L13)

<br>

---
## bits
<br>

## bits/cheermotes
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster ID
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `bits:read`

 #### Example
```javascript
get(broadcaster_id, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/bits/cheermotes/get.js#L15)

## bits/extensions
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | extension_id | The extension ID
string | id | The transaction ID
string | after | The cursor for pagination
number | first | The number of objects to return
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `None`

 #### Example
```javascript
get({ extension_id, id, after, first }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/bits/extensions/get.js#L18)

## bits/leaderboard
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
number | count | The number of objects to return
string | period | The period of the leaderboard
string | started_at | The date of the leaderboard
string | user_id | The user ID
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `bits:read`

 #### Example
```javascript
get({ count, period, started_at, user_id }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/bits/leaderboard/get.js#L18)

<br>

---
## channels
<br>

## channels/editors
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster ID
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `channel:read:editors`

 #### Example
```javascript
get(broadcaster_id, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/channels/editors/get.js#L15)

<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster ID(s)
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `None`

 #### Example
```javascript
get(broadcaster_id, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/channels/get.js#L15)

<br>

### `modify`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster ID
string | game_id | The game ID
string | broadcaster_language | The broadcaster language
string | title | The title
number | delay | The delay in seconds
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `channel:manage:broadcast`

 #### Example
```javascript
mofify({ broadcaster_id, game_id, broadcaster_language, title, delay }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/channels/modify.js#L19)

<br>

---
## chat
<br>

<br>

---
## clips
<br>

<br>

---
## credentials
<br>

<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-

#### Scope - `None`

 #### Example
```javascript
get()
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/credentials/get.js#L8)

<br>

### `set`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | credentials | Credentials Object
string | credentials.client_id | The client id of the application
string | credentials.client_secret | The client secret of the application
string | credentials.access_token | The access token of the user

#### Scope - `None`

 #### Example
```javascript
set({ "client_id": "x", "client_secret": "x" })
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/credentials/set.js#L12)

<br>

---
## entitlements
<br>

<br>

---
## eventsub
<br>

<br>

---
## extensions
<br>

<br>

---
## games
<br>

<br>

---
## goals
<br>

<br>

---
## hypetrain
<br>

<br>

---
## moderation
<br>

<br>

---
## music
<br>

<br>

---
## points
<br>

<br>

---
## polls
<br>

<br>

---
## predictions
<br>

<br>

---
## schedule
<br>

<br>

---
## search
<br>

<br>

---
## streams
<br>

<br>

---
## subscriptions
<br>

<br>

---
## tags
<br>

<br>

---
## teams
<br>

<br>

---
## users
<br>

<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
Array.<string> | user_login | The user login(s) to get
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `None`

 #### Example
```javascript
get(user_login, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/users/get.js#L16)

<br>

### `update`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | description | The description to set
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `user:edit`

 #### Example
```javascript
update(description, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/c:\Users\Bossy\Documents\GitHub\,witchAPI/resources/users/update.js#L15)

<br>

---
## videos
<br>

