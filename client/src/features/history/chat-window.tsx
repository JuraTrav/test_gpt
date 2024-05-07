import { useGetHistoryQuery } from "./apiSlice";
import { ChatHistoryWindowComponent } from "./chat-history-window";

const ChatWindow = () => {
  const { data: message } = useGetHistoryQuery()

  return (
    <div className="flex flex-col-reverse self-center h-full w-full px-10 py-7 overflow-auto">
      {message?.map((msg) => <ChatHistoryWindowComponent key={msg.id} data={msg} />)}
    </div>
  )
}

export default ChatWindow;