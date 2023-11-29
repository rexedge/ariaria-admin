'use client';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'Group A', value: Math.floor(Math.random() * 800) },
	{ name: 'Group B', value: Math.floor(Math.random() * 800) },
	{ name: 'Group C', value: Math.floor(Math.random() * 800) },
	{ name: 'Group D', value: Math.floor(Math.random() * 800) },
];

const COLORS = ['#FFBF80', '#552A00', '#FFE5CC', '#FF7F00'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
// 	cx,
// 	cy,
// 	midAngle,
// 	innerRadius,
// 	outerRadius,
// 	percent,
// 	index,
// }: {
// 	cx: any;
// 	cy: any;
// 	midAngle: any;
// 	innerRadius: any;
// 	outerRadius: any;
// 	percent: any;
// 	index: any;
// }) => {
// 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// 	const x = cx + radius * Math.cos(-midAngle * RADIAN);
// 	const y = cy + radius * Math.sin(-midAngle * RADIAN);

// 	return (
// 		<text
// 			x={x}
// 			y={y}
// 			fill='white'
// 			textAnchor={x > cx ? 'start' : 'end'}
// 			dominantBaseline='central'
// 		>
// 			{`${(percent * 100).toFixed(0)}%`}
// 		</text>
// 	);
// };

export default class AriariaPie extends PureComponent {
	render() {
		return (
			<ResponsiveContainer
				width='100%'
				height='100%'
			>
				<PieChart>
					<Pie
						data={data}
						labelLine={false}
						// label={renderCustomizedLabel}
						outerRadius={'100%'}
						innerRadius={'70%'}
						fill='#8884d8'
						dataKey='value'
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		);
	}
}
