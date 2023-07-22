import app from './src/app';

app.listen(Number.parseInt(process.env.PORT ?? '3000', 10));
