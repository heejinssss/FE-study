# WebSocket

1️⃣ $ `npm init`

2️⃣ $ `npm install express ws`

- 서버, 웹소켓 연결

3️⃣ `server.js` (하단 코드)

```jsx
const express = require("express");
const app = express();

app.use("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);
```

4️⃣ `index.html` (하단 코드)

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h4>How to use WebSocket</h4>
    <button id="send">send</button>
  </body>
</html>
```

5️⃣ $ `node server.js`

6️⃣ `server.js` (하단 코드)

```jsx
const express = require("express");
const app = express();

app.use("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);

//

const WebSocket = require("ws");

const socket = new WebSocket.Server({
  port: 8081,
});
```

7️⃣ `index.html` (하단 코드)

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h4>How to use WebSocket</h4>
    <button id="send">send</button>
		<html lang="en">
		<!-- 웹소켓 커넥션 요청 -->
    <script>
      let socket = new WebSocket("ws://localhost:8081");
    </script>
		<!-- 웹소켓 커넥션 요청 -->
  </body>
</html>
```

8️⃣ `server.js` (하단 코드)

```jsx
const express = require("express");
const app = express();

app.use("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);

//

const WebSocket = require("ws");

const socket = new WebSocket.Server({
  port: 8081,
});

//

socket.on("connection", (ws, req) => {
  ws.on("message", (msg) => {
    console.log("Ding-Dong: " + msg);
  });
});
```

9️⃣ `index.html` (하단 코드)

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h4>How to use WebSocket</h4>
    <button id="send" onclick="socket.send('Hello')">send</button>
		<!-- 웹소켓 커넥션 요청 -->
    <script>
      let socket = new WebSocket("ws://localhost:8081");
    </script>
		<!-- 웹소켓 커넥션 요청 -->
  </body>
</html>
```