import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = Number(process.env.PORT || 8080);

app.use(morgan('dev'));

app.get('/', (_req, res) => {
	res.status(200).json({
		message: 'hello world sir2',
	});
});

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});
