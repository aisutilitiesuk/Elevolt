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
  suffix?: string;
}

const ChartRenderer: React.FC<ChartRendererProps> = ({ type, data, xAxisKey, dataKeys, suffix = '' }) => {
  // Common style configurations for White Theme
  const axisStyle = {
    tick: { fill: '#475569', fontSize: 16, fontWeight: 700 }, // Slate 600
    tickLine: { stroke: '#cbd5e1', strokeWidth: 1 },
    axisLine: { stroke: '#94a3b8', strokeWidth: 2 }
  };
  
  const tooltipStyle = {
    contentStyle: { backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', fontSize: '14px', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' },
    itemStyle: { color: '#334155', fontWeight: 600 }
  };

  const legendStyle = {
    wrapperStyle: { paddingTop: '24px', fontSize: '14px', fontWeight: 600, color: '#334155' }
  };

  // Logic to format numbers with suffix and scaling
  const formatValue = (value: any, index?: number) => {
    if (typeof value !== 'number') return value;
    
    // Logic for mixed units on Slide 2 Chart 2
    let localSuffix = suffix;
    if (suffix === 'mixed' && typeof index === 'number' && data[index]) {
       const item = data[index];
       const category = String(item[xAxisKey] || '');
       if (category.includes('%')) localSuffix = '%';
       else if (category.includes('Mult')) localSuffix = 'x';
       else localSuffix = '';
    }

    if (localSuffix === 'M') {
      if (value >= 1000) return (value / 1000).toFixed(1) + 'B';
      return value.toLocaleString() + 'M';
    }
    if (localSuffix === 'k') {
      if (value >= 1000) return (value / 1000).toFixed(1) + 'M';
      return value.toLocaleString() + 'k';
    }
    
    // Standard append for $, %, x, B
    return value.toLocaleString() + (localSuffix === 'mixed' ? '' : localSuffix);
  };

  const formatYAxis = (value: any) => formatValue(value);
  const formatLabel = (value: any, index: number) => formatValue(value, index);

  const margins = { top: 40, right: 30, left: 10, bottom: 30 }; 

  if (type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={margins}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => formatValue(value)} cursor={{fill: '#f1f5f9'}} />
          <Legend {...legendStyle} />
          {dataKeys.map((k) => (
            <Bar key={k.key} dataKey={k.key} fill={k.color} name={k.name} radius={[4, 4, 0, 0]}>
              <LabelList 
                dataKey={k.key} 
                position="top" 
                fill="#334155" // Dark slate for visibility on white
                fontSize={24} // 100% bigger (from original ~12/14)
                fontWeight={800}
                formatter={formatLabel} 
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
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => formatValue(value)} />
          <Legend {...legendStyle} />
          {dataKeys.map((k) => (
            <Line 
              key={k.key} 
              type="monotone" 
              dataKey={k.key} 
              stroke={k.color} 
              name={k.name} 
              strokeWidth={5} 
              dot={{ fill: k.color, r: 6, strokeWidth: 2, stroke: '#ffffff' }} 
              activeDot={{ r: 8, strokeWidth: 0 }}
            >
              <LabelList 
                dataKey={k.key} 
                position="top" 
                fill={k.color} 
                fontSize={24} 
                fontWeight={800}
                offset={15} 
                formatter={formatLabel} 
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
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => formatValue(value)} />
          <Legend {...legendStyle} />
          {dataKeys.map((k) => (
            <Area 
              key={k.key} 
              type="monotone" 
              dataKey={k.key} 
              stroke={k.color} 
              fill={k.color} 
              fillOpacity={0.2} 
              name={k.name} 
              strokeWidth={4}
            >
              <LabelList 
                dataKey={k.key} 
                position="top" 
                fill={k.color} 
                fontSize={24} 
                fontWeight={800}
                formatter={formatLabel} 
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
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            dy={10}
          />
          <YAxis 
            stroke="#64748b" 
            tick={axisStyle.tick}
            tickLine={axisStyle.tickLine}
            axisLine={axisStyle.axisLine}
            tickFormatter={formatYAxis}
            dx={-10}
          />
          <Tooltip {...tooltipStyle} formatter={(value: number) => formatValue(value)} />
          <Legend {...legendStyle} />
          {dataKeys.map((k, index) => {
            if (index === 0) return (
                <Bar key={k.key} dataKey={k.key} fill={k.color} name={k.name} radius={[4, 4, 0, 0]} barSize={60}>
                  <LabelList 
                    dataKey={k.key} 
                    position="top" 
                    fill="#334155" 
                    fontSize={24} 
                    fontWeight={800}
                    formatter={formatLabel} 
                  />
                </Bar>
            );
            return (
                <Line key={k.key} type="monotone" dataKey={k.key} stroke={k.color} name={k.name} strokeWidth={5} dot={{r:6, strokeWidth: 2, stroke: '#ffffff'}}>
                  <LabelList 
                    dataKey={k.key} 
                    position="top" 
                    fill={k.color} 
                    fontSize={24} 
                    fontWeight={800}
                    offset={15} 
                    formatter={formatLabel} 
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
                   fill="#334155" 
                   textAnchor={x > cx ? 'start' : 'end'} 
                   dominantBaseline="central" 
                   fontSize={16} 
                   fontWeight={700}
                 >
                   {`${name}: ${formatValue(value)}`}
                 </text>
               );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#ffffff" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip {...tooltipStyle} formatter={(value: number) => formatValue(value)} />
          <Legend {...legendStyle} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
};

export default ChartRenderer;