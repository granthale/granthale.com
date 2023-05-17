const express = require('express')
const app = express()
// const favicon = require('serve-favicon');
// app.use(favicon('public/favicon.ico'));

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded( {extended:true} )) // Allows you to parse body
app.use(express.json()) // Allows you to parse JSON

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

const aboutRouter = require('./routes/about')
app.use('/about', aboutRouter)

const writingRouter = require('./routes/writing')
app.use('/writing', writingRouter)

const bookshelfRouter = require('./routes/bookshelf')
app.use('/bookshelf', bookshelfRouter)

const linksRouter = require('./routes/links')
app.use('/links', linksRouter)

const peopleRouter = require('./routes/people')
app.use('/people', peopleRouter)

const questionsRouter = require('./routes/questions')
app.use('/questions', questionsRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});