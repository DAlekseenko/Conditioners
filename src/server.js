import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import morgan from 'morgan'
import React from 'react'
import manifest from '../public/assets/manifest'
import LayoutFactory from './Layout/LayoutFactory'
import Router from './ServerRouter'
import nocache from './express/nocache'

const app = express();
const mode = (process.env.NODE_ENV && process.env.NODE_ENV.replace(/[^A-Z]/ig, '')) || 'production';
const PORT = process.env.PORT || 3003;
LayoutFactory.setManifest(manifest).setProd(mode === 'production');

app.use(cookieParser());

app.use(morgan('combined'));

// Сжимаем файлы
app.use(compress());

// Настраиваем путь для статичных файлов:
app.use(express.static('public', {
    maxage: '1Y',
}));

app.use('*', nocache);
app.use('/', Router);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});