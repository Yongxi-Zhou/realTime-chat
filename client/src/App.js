import './App.css';
import { io } from "socket.io-client";
import { useState } from 'react';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")

function App() {
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  //
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", {
        user: username,
        room: room
      })
      setShowChat(true)
    }
  }
  const confirmEnter = (e) => {
    if (e.keyCode === 13) {
      joinRoom()
    }
  }
  return (
    <div className="App">
      {/* <div>
        first to connect socket.io <br/>
        install io with yarn
      </div> */}
      {!showChat? (
      <div className = "joinChatContainer">
        <h3>Join a Chat</h3>
        <input 
          type = "text" 
          placeholder="John" 
          onChange = {(e) => {
          setUsername(e.target.value)}} 
        />
        <input 
          type = "text" 
          placeholder="Room ID" 
          onChange = {(e) => {
          setRoom(e.target.value)}} 
          onKeyUp = {confirmEnter} 
        />
        {/* Join a room */}
        <button onClick = {joinRoom}>Join a room</button>
      </div>
      ) : (
        <Chat socket = {socket} username = {username} room = {room} />
      )
      }
    </div>
  );
}

export default App;
