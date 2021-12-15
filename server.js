const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()




app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))




mongoose.connect('mongodb://localhost/myapp').then(() => {
    console.log("it worked marky boy")
   
    
    
    
})



app.get('/', async(req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc'})
    const x = "copyright of sparky gordon"
    const y = "https://www.w3schools.com/"
    res.render('articles/index', {articles: articles, x: x, y: y})
})

app.use('/articles', articleRouter)



app.listen(5000)
//mongodb