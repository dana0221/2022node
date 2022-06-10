const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3333

// morgan HTTP request 기록해주는 미들웨어
app.use(morgan('dev'))

app.listen(PORT)