const express = require("express")
//app实例对象
const app = express()
const http = require("http")
const cors = require("cors")
const {Server} = require("socket.io")

app.use(cors())


//app 部署的server
const server = http.createServer(app)

//把express上的server作为参数传到socket.io的Server class中, config cors for the FE server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3002",
        methods: ["GET", "POST"],
    }
})

//when other connect the server, the callback function would be called
io.on("connection", socket => {
    console.log(`User enter with socket id : ${socket.id}`);

    //connect后的信息交互逻辑要写在connection里面
    socket.on("join_room", data => {
        //标记当前客户端所在的房间号！！！
        socket.join(data.room)
        console.log("success!!");
        console.log(`${data.user} is login in Room ${data.room}`);
    })

    socket.on("send_message", data => {
        console.log(data);
        //to()的参数根据join的参数决定发送给哪个room
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on("disconnect", () => {
        console.log(`User disconnected socket id : ${socket.id}`);
    })
})



server.listen(3001, () => {
    console.log("server is running....");
})