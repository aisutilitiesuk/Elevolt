import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
  LabelList
} from 'recharts';
import { ChartDataPoint } from '../types';

interface ChartRendererProps {
  type: string;
  data: ChartDataPoint[];
  xAxisKey: string;
  dataKeys: { key: string; color: string; name?: string }[];
}

const ChartRenderer: React.FC<ChartRendererProps> = ({ type, data, xAxisKey, dataKeys }) => {
  // Common style configurations
  const axisStyle = {
    tick: { fill: '#cbd5e1', fontSize: 16, fontWeight: 700 }, // Bolder and brighter
    tickLine: { stroke: '#94a3b8', strokeWidth: 1 },
    axisLine: { stroke: '#475569', strokeWidth: 2 }
  };
  
  const tooltipStyle = {
    contentStyle: { backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', fontSize: '14px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' },
    itemStyle: { color: '#f8fafc', fontWeight: 600 }
  };

  const legendStyle = {
    wrapperStyle: { paddingTop: '24px', fontSize: '14px', fontWeight: 600 }
  };

  const formatYAxis = (value: any) => {
    if (typeof value === 'number') {
      if (value >= 1000) return `${(value/1000).toFixed(1)}k`;
      return value.toString();
    }
    return value;
  };

  const margins = { top: 40, right: 30, left: 10, bottom: 30 }; // Increased bottom margin for X-axis labels

  if (type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={margins}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => value.toLocaleString()} cursor={{fill: '#334155', opacity: 0.2}} />
          <Legend {...legendStyle} />
          {dataKeys.map((k) => (
            <Bar key={k.key} dataKey={k.key} fill={k.color} name={k.name} radius={[4, 4, 0, 0]}>
              <LabelList 
                dataKey={k.key} 
                position="top" 
                fill="#e2e8f0" 
                fontSize={16} 
                fontWeight={800}
                formatter={(val: number) => val.toLocaleString()} 
              />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'line') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={margins}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => value.toLocaleString()} />
          <Legend {...legendStyle} />
          {dataKeys.map((k) => (
            <Line 
              key={k.key} 
              type="monotone" 
              dataKey={k.key} 
              stroke={k.color} 
              name={k.name} 
              strokeWidth={5} 
              dot={{ fill: k.color, r: 6, strokeWidth: 2, stroke: '#1e293b' }} 
              activeDot={{ r: 8, strokeWidth: 0 }}
            >
              <LabelList 
                dataKey={k.key} 
                position="top" 
                fill={k.color} 
                fontSize={16} 
                fontWeight={800}
                offset={15} 
                formatter={(val: number) => val.toLocaleString()} 
              />
            </Line>
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'area') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={margins}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => value.toLocaleString()} />
          <Legend {...legendStyle} />
          {dataKeys.map((k) => (
            <Area 
              key={k.key} 
              type="monotone" 
              dataKey={k.key} 
              stroke={k.color} 
              fill={k.color} 
              fillOpacity={0.3} 
              name={k.name} 
              strokeWidth={4}
            >
              <LabelList 
                dataKey={k.key} 
                position="top" 
                fill={k.color} 
                fontSize={16} 
                fontWeight={800}
                formatter={(val: number) => val.toLocaleString()} 
              />
            </Area>
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'composed') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={margins}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#94a3b8" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => value.toLocaleString()} />
          <Legend {...legendStyle} />
          {dataKeys.map((k, index) => {
            if (index === 0) return (
                <Bar key={k.key} dataKey={k.key} fill={k.color} name={k.name} radius={[4, 4, 0, 0]} barSize={60}>
                  <LabelList 
                    dataKey={k.key} 
                    position="top" 
                    fill="#e2e8f0" 
                    fontSize={16} 
                    fontWeight={800}
                    formatter={(val: number) => val.toLocaleString()} 
                  />
                </Bar>
            );
            return (
                <Line key={k.key} type="monotone" dataKey={k.key} stroke={k.color} name={k.name} strokeWidth={5} dot={{r:6, strokeWidth: 2, stroke: '#1e293b'}}>
                  <LabelList 
                    dataKey={k.key} 
                    position="top" 
                    fill={k.color} 
                    fontSize={16} 
                    fontWeight={800}
                    offset={15} 
                    formatter={(val: number) => val.toLocaleString()} 
                  />
                </Line>
            );
          })}
        </ComposedChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'donut' || type === 'pie') {
    const COLORS = ['#10b981', '#3b82f6', '#ef4444', '#f59e0b', '#8b5cf6'];
    const dataKey = dataKeys[0].key;
    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 80, left: 80, bottom: 20 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={type === 'donut' ? 70 : 0}
            outerRadius={100}
            paddingAngle={5}
            dataKey={dataKey}
            nameKey={xAxisKey}
            labelLine={{ stroke: '#94a3b8', strokeWidth: 1 }}
            label={(props: any) => {
               const { x, y, cx, name, value } = props;
               return (
                 <text 
                   x={x} 
                   y={y} 
                   fill="#e2e8f0" 
                   textAnchor={x > cx ? 'start' : 'end'} 
                   dominantBaseline="central" 
                   fontSize={14} 
                   fontWeight={700}
                 >
                   {`${name}: ${value}`}
                 </text>
               );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#1e293b" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip {...tooltipStyle} formatter={(value: number) => value.toLocaleString()} />
          <Legend {...legendStyle} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
};

export default ChartRenderer;