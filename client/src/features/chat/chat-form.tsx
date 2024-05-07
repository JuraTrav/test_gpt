import { useState } from "react"
import InputField from "../../components/input-field"
import { usePostHistoryMutation } from "../history/apiSlice"

const ChatForm = () => {
  const [loading, setLoading] = useState(false)
  const [postHistory] = usePostHistoryMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const message = formData.get('message')

    setLoading(true);

    const fetchChatRequest = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    const answer = await fetchChatRequest.json()

    await postHistory({ message, answer, timestamp: Date.now() })

    setLoading(false)
  }

  return (
    <div className="self-center">
      {
        !loading ?
          <form className="flex" onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="message"
              id="message"
              className="self-center block w-96 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
              placeholder="Enter your request"
            />
            <button className="py-1.5 px-2 ml-3 mt-2 self-center border-0 rounded-md ring-1 ring-inset ring-gray-300" type="submit">
              Submit
            </button>
          </form> :
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900" />
      }

    </div>
  )
}

export default ChatForm
