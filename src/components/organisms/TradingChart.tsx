import React from 'react';
import ReactECharts from 'echarts-for-react';

interface Candle {
  time: number; // UNIX timestamp in milliseconds
  open: number;
  high: number;
  low: number;
  close: number;
}

interface TradingChartProps {
  data: Candle[];
}

const TradingChart: React.FC<TradingChartProps> = ({ data }) => {
  const categoryData = data.map((item) => {
    const date = new Date(item.time);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  });

  const values = data.map((item) => [item.open, item.close, item.low, item.high]);

  const option = {
    backgroundColor: '#111827',
    textStyle: {
      color: '#cbd5e1',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      type: 'category',
      data: categoryData,
      scale: true,
      boundaryGap: false,
      axisLine: { lineStyle: { color: '#334155' } },
      splitLine: { show: false },
    },
    yAxis: {
      scale: true,
      axisLine: { lineStyle: { color: '#334155' } },
      splitLine: { lineStyle: { color: '#334155' } },
    },
    series: [
      {
        type: 'candlestick',
        data: values,
        itemStyle: {
          color: '#16a34a', 
          color0: '#dc2626', 
          borderColor: '#16a34a',
          borderColor0: '#dc2626',
        },
      },
    ],
  };

  return (
    <div className="trading-chart">
      <h2 className="trading-chart__title">Candlestick Chart</h2>
      <ReactECharts option={option} style={{ height: 300 }} />
    </div>
  );
};

export default TradingChart;
