import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const TemperatureChart = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="day" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#eee" />
    <Line type="monotone" dataKey="temp" stroke="#8884d8" />
  </LineChart>
);

export default TemperatureChart;