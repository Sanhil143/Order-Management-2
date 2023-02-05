const express = require('express')
const router  = require('./routers/router')
require('./database/mysqlConn')

const app = express()
app.use(express.json())


app.use("/", router)

app.listen(5000, () => {
      console.log("Express app running on port " + 5000);
})