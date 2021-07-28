import React, { useEffect } from 'react';
import './Series.scss';

import axios from '../../axios/axios';

const Series = () => {
    useEffect(() => {
        axios.get('sample.json')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <h1>Series</h1>
    );
}

export default Series;