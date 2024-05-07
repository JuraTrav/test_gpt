import ChatForm from "./features/chat/chat-form"
import ChatWindow from "./features/history/chat-window"

function App() {
  return (
    <div className="w-dvw h-dvh flex justify-around">
      <div className="flex flex-col-reverse w-[800px] bg-slate-50 pb-5 justify-center">
        <ChatForm />
        <ChatWindow />
      </div>
    </div>
  )
}

export default App
