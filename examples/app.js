const express 			= require('express');
const path 			    = require('path')
const bodyParser 		= require('body-parser')


const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res, next) =>{
	res.json({message: 'foi enviada com sucesso!'})
})

app.get('/api/events', (req, res, next) =>{
	res.json({message: 'enviados os eventos'})
})

app.use( (req, res, next) => {
	const err = new Error('Not Found')
	err.status = 404
	next(err)
});

app.use( (err, req, res, next) => {

	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	res.status(err.status || 500)
	res.render(config.skin+'/partials/error')

});

module.exports = app;