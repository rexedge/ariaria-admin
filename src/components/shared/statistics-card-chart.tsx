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

export default class StatisticsCardChart extends PureComponent<IStatisticsCardChartProps> {
	render() {
		const { data } = this.props;
		return (
			<ResponsiveContainer
				width='100%'
				height='100%'
			>
				<LineChart
					width={300}
					height={100}
					data={data}
				>
					<Line
						type='natural'
						dataKey='value'
						stroke='#f97316'
						strokeWidth={3}
					/>
					{/* <CartesianGrid stroke='#efefef' /> */}
					<Tooltip content={<CustomTooltip />} />
				</LineChart>
			</ResponsiveContainer>
		);
	}
}
