// app.ts
import app from './app';
import config from './infrastructure/config/config';

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
