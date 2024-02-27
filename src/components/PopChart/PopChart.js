import React from 'react';
import Chart from 'react-apexcharts';
import { AnalyticsAreaData, AnalyticsPieData } from '../AnalyticsData/AnalyticsData';

const PopChart = () => {

    return (
        <div className="container">
            <Chart
                options={AnalyticsAreaData.options}
                series={AnalyticsAreaData.series}
                type="area"
                height="450"
                width="100%"
            />
            <Chart
                options={AnalyticsPieData.options}
                series={AnalyticsPieData.series}
                type="pie"
                height="450"
                width="100%"
            />
        </div>
    )
}

export default PopChart