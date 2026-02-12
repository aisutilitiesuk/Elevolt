export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface SlideContent {
  id: number;
  title: string;
  subTitle?: string;
  mainMessage: string; // New field for the core narrative of the slide
  chart1: {
    title: string;
    type: 'bar' | 'line' | 'area' | 'pie' | 'composed' | 'donut';
    data: ChartDataPoint[];
    dataKeys: { key: string; color: string; name?: string }[];
    xAxisKey: string;
    note: string;
  };
  chart2: {
    title: string;
    type: 'bar' | 'line' | 'area' | 'pie' | 'composed' | 'donut' | 'scatter';
    data: ChartDataPoint[];
    dataKeys: { key: string; color: string; name?: string }[];
    xAxisKey: string;
    note: string;
  };
  keyTakeaways: string[];
  keywords: string[];
}