import React, { useState, useEffect } from 'react';
import { slides } from './data';
import ChartRenderer from './components/ChartRenderer';
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="h-screen w-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white flex flex-col overflow-hidden">
      
      {/* Header */}
      <header className="h-16 shrink-0 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
            <Presentation className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-tight">Elevolt</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Investor Presentation</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="hidden sm:block text-xs text-slate-500">
             Use <kbd className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-slate-600 font-mono">←</kbd> <kbd className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-slate-600 font-mono">→</kbd> to navigate
           </div>
           <div className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            Slide <span className="text-emerald-600 font-bold">{currentSlide.id}</span> / {totalSlides}
          </div>
        </div>
      </header>

      {/* Main Content Area - Scrollable */}
      <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden relative scroll-smooth">
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
          
          {/* Header Section of Slide */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              {currentSlide.title}
            </h2>
            {currentSlide.subTitle && (
              <h3 className="text-xl md:text-2xl text-slate-500 font-light border-l-2 border-slate-300 pl-4">
                {currentSlide.subTitle}
              </h3>
            )}
          </div>

          {/* Main Message Block */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500"></div>
            <div className="flex items-start gap-4">
              <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg">
                <Quote className="w-6 h-6 text-emerald-500" />
              </div>
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed font-serif italic">
                "{currentSlide.mainMessage}"
              </p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Chart 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  {currentSlide.chart1.title}
                </h4>
              </div>
              <div className="w-full h-[300px] lg:h-[350px] relative">
                <ChartRenderer 
                  type={currentSlide.chart1.type} 
                  data={currentSlide.chart1.data} 
                  xAxisKey={currentSlide.chart1.xAxisKey}
                  dataKeys={currentSlide.chart1.dataKeys}
                  suffix={currentSlide.chart1.suffix}
                />
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600 flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <Info className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <p><span className="font-semibold text-emerald-700">Insight:</span> {currentSlide.chart1.note}</p>
              </div>
            </div>

            {/* Chart 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                  {currentSlide.chart2.title}
                </h4>
              </div>
              <div className="w-full h-[300px] lg:h-[350px] relative">
                <ChartRenderer 
                  type={currentSlide.chart2.type} 
                  data={currentSlide.chart2.data} 
                  xAxisKey={currentSlide.chart2.xAxisKey}
                  dataKeys={currentSlide.chart2.dataKeys}
                  suffix={currentSlide.chart2.suffix}
                />
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600 flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <Info className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
                <p><span className="font-semibold text-cyan-700">Insight:</span> {currentSlide.chart2.note}</p>
              </div>
            </div>

          </div>

          {/* Bottom Section: Takeaways & Keywords */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
            
            {/* Key Takeaways */}
            <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 blur-[40px] rounded-full -mr-10 -mt-10 pointer-events-none opacity-60"></div>
              <h4 className="text-emerald-700 font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                Key Takeaways
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {currentSlide.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 shadow-sm animate-pulse" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Keywords */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-center shadow-sm">
              <h4 className="text-slate-500 font-bold mb-4 text-sm uppercase tracking-wider">Strategic Vocabulary</h4>
              <div className="flex flex-wrap gap-2">
                {currentSlide.keywords.map((kw, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200 hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50 transition-all cursor-default shadow-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="h-20 shrink-0 border-t border-slate-200 bg-white px-6 flex items-center justify-between z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          onClick={prevSlide} 
          disabled={currentSlideIndex === 0}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${currentSlideIndex === 0 ? 'border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50' : 'border-slate-300 text-slate-600 hover:bg-slate-100 hover:border-slate-400'}`}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {/* Progress Dots */}
        <div className="flex gap-2 items-center">
          {slides.map((_, idx) => (
            <button
              key={idx} 
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlideIndex ? 'bg-emerald-500 w-10 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-slate-300 w-2 hover:bg-slate-400'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlideIndex === totalSlides - 1}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${currentSlideIndex === totalSlides - 1 ? 'border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50' : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 shadow-sm'}`}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};

export default App;