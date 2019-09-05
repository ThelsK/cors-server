const express = require("express")
const app = express()
app.use(require("cors")())

const router = new express.Router()
router.get("/test", (req, res, next) => {
  res.send("Hello World!")
})
app.use(router)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on :${port}`))