type ChatMessageProps = {
  message: string
  isAnswer?: boolean
}

const ChatMessage = ({ message, isAnswer }: ChatMessageProps) => {
  const msgPosition = isAnswer ? "justify-self-start" : "justify-self-end"
  const mt = isAnswer ? "my-3" : ""

  return (
    <div className="grid justify-items-stretch">
      <div className={`${msgPosition} border-0 rounded-md ring-1 ring-inset ring-gray-300 py-1 px-3 ${mt}`}>{message}</div>
    </div>
  )
}

export default ChatMessage