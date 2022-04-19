 - [ads](#ads)
    - start()


<br>

 - [analystics](#analystics)


<br>

 - [api](#api)
    - call()


<br>

 - [auth](#auth)
    - [client](#authclient)
        - get()
    - [implicit](#authimplicit)
        - generate()


<br>

 - [bits](#bits)
    - [cheermotes](#bitscheermotes)
        - get()
    - [extensions](#bitsextensions)
        - get()
    - [leaderboard](#bitsleaderboard)
        - get()


<br>

 - [channels](#channels)
    - [editors](#channelseditors)
        - get()
    - get()
    - modify()


<br>

 - [chat](#chat)
    - [emotes](#chatemotes)
        - getChannel()
        - getGlobal()


<br>

 - [clips](#clips)


<br>

 - [credentials](#credentials)
    - get()
    - set()


<br>

 - [entitlements](#entitlements)


<br>

 - [eventsub](#eventsub)


<br>

 - [extensions](#extensions)


<br>

 - [games](#games)


<br>

 - [goals](#goals)


<br>

 - [hypetrain](#hypetrain)


<br>

 - [moderation](#moderation)
    - [automod](#moderationautomod)
        - check()
    - ban()
    - [banned](#moderationbanned)
        - get()
    - [mods](#moderationmods)
        - get()
    - unban()


<br>

 - [music](#music)


<br>

 - [points](#points)


<br>

 - [polls](#polls)


<br>

 - [predictions](#predictions)


<br>

 - [schedule](#schedule)


<br>

 - [search](#search)


<br>

 - [streams](#streams)
    - [followed](#streamsfollowed)
        - get()
    - get()
    - [marker](#streamsmarker)
        - create()
        - get()


<br>

 - [subscriptions](#subscriptions)


<br>

 - [tags](#tags)


<br>

 - [teams](#teams)


<br>

 - [users](#users)
    - get()
    - update()


<br>

 - [videos](#videos)


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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/ads/start.js#L16)

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
call({ url: "", path: "", method: "", headers: {}, body: {} })
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/api/call.js#L9)

<br>

---
## auth
<br>

## auth/client
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `Scope`

 #### Example
```javascript
get()
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/auth/client/get.js#L14)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/auth/implicit/generate.js#L14)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/bits/cheermotes/get.js#L15)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/bits/extensions/get.js#L18)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/bits/leaderboard/get.js#L18)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/channels/editors/get.js#L15)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/channels/get.js#L15)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/channels/modify.js#L19)

<br>

---
## chat
<br>

## chat/emotes
<br>

### `getChannel`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster ID
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `None`

 #### Example
```javascript
getChannel(broadcaster_id, credentials
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/chat/emotes/getChannel.js#L15)

## chat/emotes
<br>

### `getGlobal`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `Scope`

 #### Example
```javascript
undefined
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/chat/emotes/getGlobal.js#L13)

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
No parameters

#### Scope - `None`

 #### Example
```javascript
get()
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/credentials/get.js#L8)

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
set({ "client_id": "x", "client_secret": "x", "access_token": "x" })
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/credentials/set.js#L12)

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

## moderation/automod
<br>

### `check`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster's ID
string | msg_id | The message's ID
string | msg_text | The message's text
string | user_id | The user's ID
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `moderation:read`

 #### Example
```javascript
check({ broadcaster_id: "", msg_id: "", msg_text: "", user_id: "" }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/moderation/automod/check.js#L18)

<br>

### `ban`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster's ID
string | moderator_id | The moderator's ID
string | duration | The duration of the ban in seconds
string | reason | The reason for the ban
string | user_id | The user's ID
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `moderator:manage:banned_users`

 #### Example
```javascript
ban({ broadcaster_id, moderator_id, duration, reason, user_id }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/moderation/ban.js#L19)

## moderation/banned
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster's ID
string | user_id | The user's ID
number | first | The number of results to return
string | after | The cursor to use for pagination
string | before | The cursor to use for pagination
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `moderation:read`

 #### Example
```javascript
get({ broadcaster_id, user_id, first, after, before }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/moderation/banned/get.js#L19)

## moderation/mods
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster's ID
string | user_id | The user's ID
number | first | The number of results to return
string | after | The cursor to use for pagination
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `Scope`

 #### Example
```javascript
get({ broadcaster_id, user_id, first, after }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/moderation/mods/get.js#L18)

<br>

### `unban`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
string | broadcaster_id | The broadcaster's ID
string | moderator_id | The moderator's ID
string | user_id | The user's ID
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `Scope`

 #### Example
```javascript
unban({ broadcaster_id, moderator_id, user_id }, credentials)
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/moderation/unban.js#L17)

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

## streams/followed
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `user:read:follows`

 #### Example
```javascript
undefined
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/streams/followed/get.js#L13)

<br>

### `get`
 
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
undefined
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/streams/get.js#L13)

## streams/marker
<br>

### `create`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `channel:manage:broadcast`

 #### Example
```javascript
undefined
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/streams/marker/create.js#L13)

## streams/marker
<br>

### `get`
 
 #### Parameters
Type | Name | Description
:- | :- | :-
object | credentials | Credentials Object
string | credentials.client_id | Twitch Client ID
string | credentials.client_secret | Twitch Client Secret
string | credentials.access_token | Twitch Access Token

#### Scope - `user:read:broadcast`

 #### Example
```javascript
undefined
```

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/streams/marker/get.js#L13)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/users/get.js#L16)

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

- [Source](https://github.com/GreenJuzzy/Twitch-Api/blob/master/resources/users/update.js#L15)

<br>

---
## videos
<br>

