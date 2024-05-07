import React from "react"
import { ChatHistoryProps } from "./history"
import ChatMessage from "../../components/chat-message"

type ChatHistoryWindowProp = {
  data: ChatHistoryProps
}

export default function ChatHistoryWindow({ data }: ChatHistoryWindowProp) {
  return (
    <>
      <ChatMessage message={data.message} />
      <ChatMessage message={data.answer} isAnswer={true} />
    </>
  )
}

const MemoChatHistoryWindow = React.memo(ChatHistoryWindow, (prevProps, nextProps) => {
  return prevProps.data.id === nextProps.data.id
})

export { MemoChatHistoryWindow as ChatHistoryWindowComponent }