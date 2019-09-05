const express = require("express")
const app = express()
const port = process.env.PORT || 4000

const router = new express.Router()
router.get("/test", (req, res, next) => {
  res.send("Hello World!")
})
app.use(router)

app.listen(port, () => console.log(`Listening on :${port}`))