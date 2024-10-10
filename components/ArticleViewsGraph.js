// components/ArticleViewsGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ArticleViewsGraph = ({ data }) => {
    const chartData = {
        labels: data.labels, // Days of the current month
        datasets: [
            {
                label: 'Article Views',
                data: data.views, // Views for each day
                borderColor: '#0078e8',
                backgroundColor: 'rgba(0, 120, 232, 0.1)',
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Article Views This Month',
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default ArticleViewsGraph;
