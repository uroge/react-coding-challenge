import React, { useEffect } from 'react';
import './Series.scss';

import { fetchSeries } from '../../store/actions/actions'; 

import { useDispatch, useSelector } from 'react-redux';
import CardContainer from '../../components/CardContainer/CardContainer';

const Series = () => {
    const series = useSelector(state => state.series);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSeries());
    }, [dispatch]);

    return (
        <div className="series">
            <CardContainer cards={series}/>
        </div>
    );
}

export default Series;