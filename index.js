import express from 'express'

const app = express();

app.get('/', (req, res) => {
    console.log('hello 489')
   res.json('hello world!') 
});

app.listen(8080, () => {
    console.log('App started successfully!')
})