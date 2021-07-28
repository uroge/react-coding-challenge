import React, { useEffect } from 'react';
import './Series.scss';

import axios from '../../axios/axios';
import { fetchSeries } from '../../store/actions/actions'; 

import { useDispatch } from 'react-redux';

const Series = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSeries());
    }, []);

    return (
        <h1>Series</h1>
    );
}

export default Series;