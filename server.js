const express = require('express')
const favicon = require('favicon')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static("public")) 
app.use(express.urlencoded( {extended:true} )) // Allows you to parse body
app.use(express.json()) // Allows you to parse JSON
app.use(serveFavicon)

app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res) {
    res.render(__dirname + '/views/pages/index.ejs');
  });

const aboutRouter = require('./routes/about')
app.use('/about', aboutRouter)

const blogRouter = require('./routes/blog')
app.use('/blog', blogRouter)

const bookshelfRouter = require('./routes/bookshelf')
app.use('/bookshelf', bookshelfRouter)

const linksRouter = require('./routes/links')
app.use('/links', linksRouter)

const peopleRouter = require('./routes/people')
app.use('/people', peopleRouter)

const questionsRouter = require('./routes/questions')
const serveFavicon = require('serve-favicon')
app.use('/questions', questionsRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});