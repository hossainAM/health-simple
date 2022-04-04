import React, { useEffect, useState } from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [dashboard, setDashboard] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDashboard(data))
    }, []);

    // console.log(dashboard)

    return (
        <div>
            <div>
                <h1 className='my-6 text-4xl '>Monthly Sales</h1>
                <ResponsiveContainer width='50%' height={500}>
                    <LineChart width={800} height={500} data={dashboard}>
                        <Line dataKey='sell'></Line>
                        <XAxis dataKey='month'></XAxis>
                        <YAxis dataKey='sell'></YAxis>
                        <Tooltip />
                        <Legend verticalAlign='top' height={36} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;