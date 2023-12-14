import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    // ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Jan',
        goal: 180000,
        progress: 0,
        amt: 2400,
    },
    {
        name: 'Apr',
        goal: 180000,
        progress: 20000,
        amt: 2210,
    },
    {
        name: 'Jul',
        goal: 180000,
        progress: 60000,
        amt: 2290,
    },
    {
        name: 'Oct',
        goal: 180000,
        progress: 60000,
        amt: 2000,
    },
    {
        name: 'Dec',
        goal: 180000,
        progress: 175000,
        amt: 2181,
    },
];

const Linechart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="progress" stroke="#390048" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="goal" stroke="#004448" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Linechart;
