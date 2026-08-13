function Timeshow(){
const sendMessage = () => {
  if (message.trim() === "") return;

  const newMessage = {
    text: message,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  socket.emit("send-message", newMessage);

  setMessage("");
}
};
return(
    <>
{messages.map((msg, index) => (
  <div key={index}>
    <span>{msg.text}</span>
    <small>{msg.time}</small>
  </div>
))}
</>
)
export default Timeshow