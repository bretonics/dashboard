# Dashboard

Example app of a simple dashboard that uses several API:

- [Github](https://docs.github.com/en/rest)
- [Accuweather](https://developer.accuweather.com/)
- [News](https://newsapi.org/)
- [MapQuest](https://developer.mapquest.com/)

## Tech Stack

- Angular
- Node
- MongoDB

## Usage

1. Create APi keys and add to `server/.env`

```
ACWEATHER_API_KEY=myPrivateAPIKey
GITHUB_API_KEY=myPrivateAPIKey
MAPQUEST_API_KEY=myPrivateAPIKey
NEWS_API_KEY=myPrivateAPIKey
```

2. Start MongoDB server and create a `dashboard` table
3. Client: `npm i && ng serve`
4. Server: `npm i && node server.js`
