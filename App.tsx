import React, { useState } from 'react';
import { slides } from './data';
import ChartRenderer from './components/ChartRenderer';
import { Logo } from './components/Logo';
import { ChevronLeft, ChevronRight, Presentation, TrendingUp, Info, Quote } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500 selection:text-white overflow-hidden flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Presentation className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">Elevolt</h1>
            <p className="text-xs text-slate-400">Investor Presentation</p>
          </div>
        </div>
        <div className="text-sm font-medium text-slate-400">
          Slide <span className="text-emerald-400">{currentSlide.id}</span> of {totalSlides}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative flex flex-col md:flex-row">
        
        {/* Slide Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 flex flex-col gap-6">
          
          {/* Slide Title Section & Logo */}
          <div className="flex justify-between items-start gap-4 mb-2">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                {currentSlide.title}
              </h2>
              {currentSlide.subTitle && (
                <h3 className="text-xl text-slate-400 font-light">{currentSlide.subTitle}</h3>
              )}
            </div>
            {/* Elevolt Logo positioned top right */}
            <Logo className="w-40 h-auto shrink-0 opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          {/* Main Message Block */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-lg">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <p className="text-lg text-slate-200 font-medium leading-relaxed italic">
                "{currentSlide.mainMessage}"
              </p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 flex-1">
            
            {/* Chart 1 Container */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex flex-col shadow-xl hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-200 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  {currentSlide.chart1.title}
                </h4>
              </div>
              {/* Increased height to 400px for better visibility of data and axis labels */}
              <div className="w-full h-[400px]">
                <ChartRenderer 
                  type={currentSlide.chart1.type} 
                  data={currentSlide.chart1.data} 
                  xAxisKey={currentSlide.chart1.xAxisKey}
                  dataKeys={currentSlide.chart1.dataKeys}
                />
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-400 flex items-start gap-2 bg-slate-900/50 p-3 rounded-lg">
                <Info className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <p><span className="font-semibold text-emerald-400">Analysis:</span> {currentSlide.chart1.note}</p>
              </div>
            </div>

            {/* Chart 2 Container */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex flex-col shadow-xl hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-200 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-500" />
                  {currentSlide.chart2.title}
                </h4>
              </div>
              {/* Increased height to 400px for better visibility of data and axis labels */}
              <div className="w-full h-[400px]">
                <ChartRenderer 
                  type={currentSlide.chart2.type} 
                  data={currentSlide.chart2.data} 
                  xAxisKey={currentSlide.chart2.xAxisKey}
                  dataKeys={currentSlide.chart2.dataKeys}
                />
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-400 flex items-start gap-2 bg-slate-900/50 p-3 rounded-lg">
                <Info className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                <p><span className="font-semibold text-cyan-400">Analysis:</span> {currentSlide.chart2.note}</p>
              </div>
            </div>

          </div>

          {/* Footer / Key Takeaways */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
            <div className="lg:col-span-2 bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>
              <h4 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                Key Takeaways
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentSlide.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-center">
              <h4 className="text-slate-500 font-semibold mb-3 text-sm uppercase tracking-wider">Strategic Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {currentSlide.keywords.map((kw, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Controls */}
      <footer className="h-16 border-t border-slate-800 bg-slate-900 px-6 flex items-center justify-between shrink-0">
        <button 
          onClick={prevSlide} 
          disabled={currentSlideIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentSlideIndex === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === currentSlideIndex ? 'bg-emerald-500 w-8 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-700 w-2 hover:bg-slate-600'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlideIndex === totalSlides - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentSlideIndex === totalSlides - 1 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};

export default App;