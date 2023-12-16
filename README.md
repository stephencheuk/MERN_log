# MERN_log

*reference: https://www.youtube.com/watch?v=S6Yd5cPtXr4&list=PL0g02APOH8okXhOQLOLcB_nifs1U41im5*

## Initial
```
npm init
md config controller middlewares models routes
```

## Add dependence
```
npm i express mongoose bcrypt body-parser dotenv
npm i nodemon --save-dev
```

## scripts in package.json
```
"start": "node index.js",
"server": "nodemon index.js",
```

## First App
### index.js
```
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send(`Hello from server side`);
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
})

```
### .env
```
PORT=5000
```

## Second App
