import { SlideContent } from './types';

export const slides: SlideContent[] = [
  {
    id: 1,
    title: 'The 10-Year ISP "Stock Capture"',
    subTitle: 'From Commodity Maintenance to Green Utility',
    mainMessage: "Transforming a $3,200 commodity unit into a $4,500 Green Utility asset by layering digital revenue on top of base maintenance.",
    chart1: {
      title: 'Revenue Composition: Base vs. Green',
      type: 'bar',
      xAxisKey: 'period',
      data: [
        { period: 'Year 1', base: 409, green: 166 },
        { period: 'Year 5', base: 2040, green: 832 },
        { period: 'Year 10', base: 4090, green: 1660 },
      ],
      dataKeys: [
        { key: 'base', color: '#94a3b8', name: 'Base Revenue ($M)' },
        { key: 'green', color: '#10b981', name: 'Green Revenue ($M)' },
      ],
      note: 'The "Green Lock" adds a recurring revenue layer that grows to $1.66B by Year 10, creating a defensive moat.',
    },
    chart2: {
      title: 'Total Units Captured (Cumulative)',
      type: 'area',
      xAxisKey: 'period',
      data: [
        { period: 'Year 1', units: 128 },
        { period: 'Year 3', units: 384 },
        { period: 'Year 5', units: 640 },
        { period: 'Year 7', units: 960 },
        { period: 'Year 10', units: 1280 },
      ],
      dataKeys: [
        { key: 'units', color: '#3b82f6', name: 'Units (Thousands)' },
      ],
      note: 'Accumulating 1.28M units is not just growth; it is capturing 20% of the global addressable market by 2036.',
    },
    keyTakeaways: [
      'Unit Economics Shift: Revenue per unit jumps from $3,200 to $4,500.',
      'Defensive Moat: Green-Locked contracts prevent competitor poaching.',
      'Scale: 1.28 million units represents a critical mass in the global ISP ecosystem.'
    ],
    keywords: ['Green Premium', 'Stock Capture', 'Hollowing Out']
  },
  {
    id: 2,
    title: 'The "Double-Action" Blitz',
    subTitle: 'Exponential Growth vs Linear Stagnation',
    mainMessage: "We don't just grow revenue; we expand the valuation multiple simultaneously, creating a 'Double-Action' value multiplier.",
    chart1: {
      title: 'Revenue vs Enterprise Value Evolution',
      type: 'composed',
      xAxisKey: 'year',
      data: [
        { year: '2026', revenue: 4.48, ev: 22.7 },
        { year: '2028', revenue: 5.26, ev: 29.5 },
        { year: '2031', revenue: 6.66, ev: 42.8 },
        { year: '2036', revenue: 9.78, ev: 74.4 },
      ],
      dataKeys: [
        { key: 'revenue', color: '#3b82f6', name: 'Revenue ($B)' },
        { key: 'ev', color: '#10b981', name: 'Enterprise Value ($B)' },
      ],
      note: 'Notice the divergence: EV triples while Revenue doubles. This is the "Magic Wand" of multiple expansion.',
    },
    chart2: {
      title: 'Traditional vs. Blitz Comparison',
      type: 'bar',
      xAxisKey: 'metric',
      data: [
        { metric: 'CAGR %', traditional: 4, blitz: 13.5 },
        { metric: 'EBITDA Mult', traditional: 16, blitz: 23.5 },
      ],
      dataKeys: [
        { key: 'traditional', color: '#94a3b8', name: 'Traditional OEM' },
        { key: 'blitz', color: '#10b981', name: 'The Blitz OEM' },
      ],
      note: 'Traditional OEMs are stuck in 4% linear growth. The Blitz strategy unlocks 13.5% CAGR and a 23.5x Multiple.',
    },
    keyTakeaways: [
      'The Magic Wand: Simultanous growth in EBITDA and EBITDA Multiplier.',
      'Efficiency: Cost of Acquisition is zero (via hardware) compared to 15x EBITDA for buyouts.',
      'Liquidation: We are systematically liquidating the old ISP business model.'
    ],
    keywords: ['Double-Action', 'Magic Wand', 'Systemic Liquidation']
  },
  {
    id: 3,
    title: 'Market Segmentation & "Blitz City"',
    subTitle: 'Asset Reclamation in High-Density Markets',
    mainMessage: "We ignore low-value sprawl to dominate the $158B 'Dirty Gap' in high-density urban centers like NYC, London, and Paris.",
    chart1: {
      title: '2026 Market Value Segmentation ($B)',
      type: 'donut',
      xAxisKey: 'name',
      data: [
        { name: 'New Installs', value: 59.5 },
        { name: 'Modernization', value: 15.2 },
        { name: 'The Dirty Gap', value: 158.2 },
      ],
      dataKeys: [
        { key: 'value', color: '#10b981', name: 'Value ($B)' }
      ],
      note: 'The "Dirty Gap" ($158.2B) represents existing, non-modernized elevators—our prime target for capture.',
    },
    chart2: {
      title: 'Blitz City Valuation Realization',
      type: 'area',
      xAxisKey: 'year',
      data: [
        { year: '2026', value: 0.25 },
        { year: '2028', value: 0.71 },
        { year: '2031', value: 6.2 },
        { year: '2036', value: 14.8 },
      ],
      dataKeys: [
        { key: 'value', color: '#f59e0b', name: 'Equity Gain ($B)' },
      ],
      note: 'In Blitz Cities, asset value compounds faster due to route density. $250M yields $14.8B Equity Gain.',
    },
    keyTakeaways: [
      'The Dirty Gap: The largest market segment is also the most vulnerable.',
      'Blitz City Strategy: High density equals lower service costs and higher margins.',
      'Velocity: Investment is fully realized within 24 months in these target zones.'
    ],
    keywords: ['Blitz City', 'Dirty Gap', 'Asset Reclamation']
  },
  {
    id: 4,
    title: 'Strategic Multipliers & 5-Year Blitz',
    subTitle: 'Capture & Shield Economics',
    mainMessage: "The market pays a premium for Green Revenue. A dollar of Green Revenue is worth 2x more to investors than a dollar of Legacy Revenue.",
    chart1: {
      title: 'Valuation Multiplier Shift (EV/EBITDA)',
      type: 'bar',
      xAxisKey: 'type',
      data: [
        { type: 'Legacy', mult: 13 },
        { type: 'Green Edge', mult: 21 },
        { type: 'Premium', mult: 24 },
      ],
      dataKeys: [
        { key: 'mult', color: '#8b5cf6', name: 'Multiplier (x)' },
      ],
      note: 'Investors re-rate the stock from a 13x Hardware manufacturer to a 24x Green Tech Utility.',
    },
    chart2: {
      title: '5-Year Incremental Green Revenue',
      type: 'line',
      xAxisKey: 'year',
      data: [
        { year: 'Y1', rev: 202 },
        { year: 'Y2', rev: 410 },
        { year: 'Y3', rev: 625 },
        { year: 'Y4', rev: 846 },
        { year: 'Y5', rev: 1070 },
      ],
      dataKeys: [
        { key: 'rev', color: '#10b981', name: 'Green Revenue ($M)' },
      ],
      note: 'By Year 5, we generate over $1B in incremental Green Revenue annually—pure margin expansion.',
    },
    keyTakeaways: [
      'Valuation Arbitrage: Trading low-multiple hardware revenue for high-multiple software/utility revenue.',
      'Utility-Grade Status: Achieving the predictability and safety of a utility.',
      'Sovereign Multiplier: Reaching 2.6x the valuation of standard competitors.'
    ],
    keywords: ['Capture & Shield', 'Utility-Grade', 'Multiplier Shift']
  },
  {
    id: 5,
    title: 'Global Portfolio Vulnerability',
    subTitle: 'The Shadow Portfolio Opportunity',
    mainMessage: "The 'Big 4' are vulnerable. 48% of the global market is 'Dirty', and competitors like TKE are heavily exposed to our strategy.",
    chart1: {
      title: 'Big 4 Portfolio Composition (Millions)',
      type: 'bar',
      xAxisKey: 'name',
      data: [
        { name: 'Otis', dirty: 0.96, green: 1.44 },
        { name: 'KONE', dirty: 0.50, green: 1.15 },
        { name: 'Schindler', dirty: 0.65, green: 0.90 },
        { name: 'TKE', dirty: 0.54, green: 0.91 },
      ],
      dataKeys: [
        { key: 'dirty', color: '#ef4444', name: 'Non-Regen (Dirty)' },
        { key: 'green', color: '#10b981', name: 'Regen (Green)' },
      ],
      note: 'The red bars represent "Dirty" units. This is the "Shadow Portfolio" we will capture.',
    },
    chart2: {
      title: 'Net Service Growth via ISP M&A (%)',
      type: 'bar',
      xAxisKey: 'name',
      data: [
        { name: 'Otis', growth: 126 },
        { name: 'KONE', growth: 20 },
        { name: 'Schindler', growth: 125 },
        { name: 'TKE', growth: 207 },
      ],
      dataKeys: [
        { key: 'growth', color: '#3b82f6', name: 'Growth %' },
      ],
      note: 'TKE relies 207% on acquiring ISPs for growth. By capturing ISPs ourselves, we starve TKE of its growth engine.',
    },
    keyTakeaways: [
      'The Weakest Link: TKE has the highest dependency on ISP acquisition.',
      'Market Share Swing: Capturing the "Dirty" units directly impacts Big 4 market share.',
      'Shadow Portfolio: 48% of the total market is undefended against Green Edge.'
    ],
    keywords: ['Shadow Portfolio', 'Non-Regen', 'Acquired Heritage']
  },
  {
    id: 6,
    title: 'Service Plan Economics',
    subTitle: 'The "Zero-Dollar" Weapon',
    mainMessage: "Green Edge Plus creates an 'ISP Killer' offer: We trade $0 CapEx upfront for a 10-year, high-margin exclusive contract.",
    chart1: {
      title: 'Plan Comparison: Cost vs Value',
      type: 'bar',
      xAxisKey: 'feature',
      data: [
        { feature: 'Upfront Cost ($)', green: 7000, edge: 0 },
        { feature: 'Annual Rev ($)', green: 3840, edge: 4480 },
      ],
      dataKeys: [
        { key: 'green', color: '#94a3b8', name: 'Standard Green' },
        { key: 'edge', color: '#10b981', name: 'Green Edge Plus' },
      ],
      note: 'Green Edge Plus removes the $7,000 barrier to entry, making the upgrade a "no-brainer" for building owners.',
    },
    chart2: {
      title: 'Cumulative Net Profit (Green Edge)',
      type: 'line',
      xAxisKey: 'year',
      data: [
        { year: 'Y1', profit: 0.18 },
        { year: 'Y2', profit: 0.38 },
        { year: 'Y4', profit: 1.2 },
        { year: 'Y5', profit: 2.1 },
        { year: 'Y10', profit: 12.4 },
      ],
      dataKeys: [
        { key: 'profit', color: '#10b981', name: 'Net Profit ($B)' },
      ],
      note: 'Break-even occurs at Month 16. The remaining 104 months of the contract are pure equity profit.',
    },
    keyTakeaways: [
      'Frictionless Sales: $0 upfront cost eliminates budget objections.',
      'Long-Term Lock: 10-year contracts replace month-to-month ISP uncertainty.',
      'Profitability: After Month 16, the contract becomes a pure cash-flow engine.'
    ],
    keywords: ['Zero-Dollar Upgrade', 'ISP Killer', 'Month 16 Break-Even']
  },
  {
    id: 7,
    title: 'Market Value Transformation',
    subTitle: 'The "Hidden Gem" Realized',
    mainMessage: "The endpoint of this 10-year strategy is a $78 Billion Sovereign Utility that dominates global infrastructure.",
    chart1: {
      title: '10-Year Market Value (EV) Climb',
      type: 'area',
      xAxisKey: 'year',
      data: [
        { year: '2026', ev: 22.7 },
        { year: '2028', ev: 31.2 },
        { year: '2031', ev: 45.8 },
        { year: '2036', ev: 78.2 },
      ],
      dataKeys: [
        { key: 'ev', color: '#10b981', name: 'Enterprise Value ($B)' },
      ],
      note: 'We grow from $22.7B to $78.2B, a 3.5x increase in value, driven by the shift to Utility economics.',
    },
    chart2: {
      title: 'EBITDA Multiple Expansion',
      type: 'line',
      xAxisKey: 'year',
      data: [
        { year: '2026', mult: 14.0 },
        { year: '2028', mult: 15.5 },
        { year: '2031', mult: 19.5 },
        { year: '2036', mult: 22.5 },
      ],
      dataKeys: [
        { key: 'mult', color: '#8b5cf6', name: 'EBITDA Multiple (x)' },
      ],
      note: 'The market rewards our dominance with a Sovereign Utility multiple of 22.5x, solidifying our leadership.',
    },
    keyTakeaways: [
      'The Destination: A $78 Billion Enterprise Value.',
      'The Strategy: Systematically converting "Dirty" units to "Green" assets.',
      'The Outcome: Complete dominance of the global ISP elevator market.'
    ],
    keywords: ['Hidden Gem', 'Sovereign Utility', '$78.2 Billion']
  }
];
