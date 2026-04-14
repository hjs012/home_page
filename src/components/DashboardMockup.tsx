import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, Loader2, Layout, Palette, Code, Globe } from 'lucide-react';

export default function DashboardMockup() {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);

  const tasks = [
    { icon: Layout, label: '레이아웃 구조 설계 중...' },
    { icon: Palette, label: '브랜드 스타일 적용 중...' },
    { icon: Code, label: '반응형 코드 최적화 중...' },
    { icon: Globe, label: '글로벌 CDN 배포 준비 중...' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 25) setCurrentTask(0);
    else if (progress < 50) setCurrentTask(1);
    else if (progress < 75) setCurrentTask(2);
    else setCurrentTask(3);
  }, [progress]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="glass rounded-[2.5rem] border-white/10 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight">AI Generation Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-white/60">Live Processing</span>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {progress < 100 ? 'AI가 당신의 웹사이트를 제작 중입니다' : '웹사이트 제작이 완료되었습니다!'}
            </h2>
            <p className="text-white/40">잠시만 기다려주세요. 최적의 결과물을 위해 AI가 정교하게 작업하고 있습니다.</p>
          </div>

          {/* Progress Bar */}
          <div className="relative h-4 bg-white/5 rounded-full overflow-hidden mb-12">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-electric-blue to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white drop-shadow-md">{progress}%</span>
            </div>
          </div>

          {/* Tasks List */}
          <div className="grid md:grid-cols-2 gap-4">
            {tasks.map((task, i) => {
              const isActive = currentTask === i && progress < 100;
              const isDone = currentTask > i || progress === 100;
              
              return (
                <div 
                  key={i}
                  className={`p-6 rounded-2xl border transition-all duration-500 flex items-center gap-4 ${
                    isActive ? 'bg-white/10 border-electric-blue/50 scale-[1.02]' : 
                    isDone ? 'bg-white/5 border-white/10 opacity-60' : 
                    'bg-transparent border-white/5 opacity-30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-electric-blue text-white' : 
                    isDone ? 'bg-green-500/20 text-green-500' : 
                    'bg-white/5 text-white/20'
                  }`}>
                    {isActive ? <Loader2 className="w-6 h-6 animate-spin" /> : 
                     isDone ? <CheckCircle2 className="w-6 h-6" /> : 
                     <task.icon className="w-6 h-6" />}
                  </div>
                  <span className={`font-medium ${isActive ? 'text-white' : 'text-white/60'}`}>
                    {task.label}
                  </span>
                </div>
              );
            })}
          </div>

          {progress === 100 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-center"
            >
              <button className="px-10 py-4 rounded-2xl bg-white text-dark-navy font-bold hover:bg-white/90 transition-colors shadow-2xl shadow-white/10">
                완성된 웹사이트 확인하기
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
