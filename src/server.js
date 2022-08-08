import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sockets = [];

// In server.js socket means connected browser
wss.on("connection", (socket) => {
    sockets.push(socket);
    console.log("Connected to the Browser ✅");
    // socket.on("close", console.log("Disconnected from the Browser ❌"));
    socket.on("message", (message) => {
        sockets.forEach((aSocket) => aSocket.send(messagee.toString()));
    });
});

server.listen(3000, handleListen);
