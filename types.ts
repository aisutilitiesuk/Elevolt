export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface SlideContent {
  id: number;
  title: string;
  subTitle?: string;
  mainMessage: string;
  chart1: {
    title: string;
    type: 'bar' | 'line' | 'area' | 'pie' | 'composed' | 'donut';
    data: ChartDataPoint[];
    dataKeys: { key: string; color: string; name?: string }[];
    xAxisKey: string;
    note: string;
    suffix?: string;
  };
  chart2: {
    title: string;
    type: 'bar' | 'line' | 'area' | 'pie' | 'composed' | 'donut' | 'scatter';
    data: ChartDataPoint[];
    dataKeys: { key: string; color: string; name?: string }[];
    xAxisKey: string;
    note: string;
    suffix?: string;
  };
  keyTakeaways: string[];
  keywords: string[];
}