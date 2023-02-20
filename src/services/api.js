import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public/';

const publicKey = '44968474dd54e2ceb5e21b5c6a93fb78';
const privateKey = '6de64e3b092f2bdf605535582b19ef5fe34768e4';

const timeStamp = Number(new Date());

const hash = md5(timeStamp + privateKey + publicKey)

const api = axios.create({
    baseURL,
    params: {
        ts: timeStamp,
        apikey: publicKey,
        hash
    }
});

export default api