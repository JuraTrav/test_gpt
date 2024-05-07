require("dotenv").config()
const express = require("express")
const app = express()

const OpenAI = require("openai")

const openai = new OpenAI()

app.use(express.json())

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    })

    const answer = await response.choices[0].message.content

    res.json(answer)
  } catch (error) {
    console.log(error)
  }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
