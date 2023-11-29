'use client';
import React, { PureComponent } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

export const CustomTooltip = ({
	active,
	payload,
}: {
	active?: string;
	payload?: any;
}) => {
	if (active && payload && payload.length) {
		return (
			<div className='w-14 h-14 flex items-center justify-center text-background rounded-xl bg-primary p-2'>
				<p className='label'>{payload[0].value}</p>
			</div>
		);
	}

	return null;
};

const data = [
	{
		name: 'S',
		amt: Math.floor(Math.random() * 500),
	},
	{
		name: 'M',
		amt: Math.floor(Math.random() * 500),
	},
	{
		name: 'T',
		amt: Math.floor(Math.random() * 500),
	},
	{
		name: 'W',
		amt: Math.floor(Math.random() * 500),
	},
	{
		name: 'T',
		amt: Math.floor(Math.random() * 500),
	},
	{
		name: 'F',
		amt: Math.floor(Math.random() * 500),
	},
	{
		name: 'S',
		amt: Math.floor(Math.random() * 500),
	},
];

export default class AriariaLine extends PureComponent {
	render() {
		return (
			<ResponsiveContainer
				width='100%'
				height='100%'
			>
				<LineChart
					width={300}
					height={100}
					data={data}
					margin={{ top: 30, right: 30, left: 0, bottom: 30 }}
				>
					<Line
						type='monotone'
						dataKey='amt'
						stroke='#f97316'
						strokeWidth={2}
					/>
					{/* <CartesianGrid stroke='#efefef' /> */}
					<Tooltip content={<CustomTooltip />} />

					<XAxis
						dataKey='name'
						stroke='#888888'
						tickLine={false}
						axisLine={false}
					/>
					<YAxis
						allowDecimals={false}
						axisLine={false}
						tickLine={false}
						tickMargin={10}
						type='number'
					/>
				</LineChart>
			</ResponsiveContainer>
		);
	}
}
