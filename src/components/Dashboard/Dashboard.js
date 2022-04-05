import React, { useEffect, useState } from 'react';
import { Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [dashboard, setDashboard] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDashboard(data))
    }, []);

    // console.log(dashboard)

    return (
        <div className='grid sm:grid-cols-2 justify-center'>
            <div>
                <h1 className='my-6 text-4xl text-center'>Monthly Sales</h1>
                <ResponsiveContainer width='50%' height={350}>
                    <LineChart width={800} height={350} data={dashboard}>
                        <Line dataKey='sell'></Line>
                        <XAxis dataKey='month'></XAxis>
                        <YAxis dataKey='sell'></YAxis>
                        <Tooltip />
                        <Legend verticalAlign='top' height={36} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h1 className='my-6 text-4xl text-center'>Investment vs Revenue</h1>
                <ResponsiveContainer width='50%' height={500}>
                    <PieChart width={800} height={350}>
                        <Pie data={dashboard} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={dashboard} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;