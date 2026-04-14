import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-white/80 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-electric-blue animate-pulse" />
            AI-Powered Website Builder MVP
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
            3분 만에 완성되는<br />
            <span className="gradient-text">나만의 AI 비즈니스</span><br />
            파트너
          </h1>
          
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            코딩 지식 없이도 당신의 비즈니스를 위한 완벽한 웹사이트를 구축하세요. 
            AuraBuild AI가 디자인부터 배포까지 모든 과정을 자동화합니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-blue to-neon-purple font-bold flex items-center gap-2 shadow-2xl shadow-electric-blue/20 group"
            >
              지금 바로 AI로 홈페이지 만들기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl glass border-white/10 font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Play className="w-5 h-5 fill-white" />
              데모 영상 보기
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-electric-blue" />
              신용카드 필요 없음
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-electric-blue" />
              무료 시작 가능
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* 3D Isometric Mockup Simulation */}
          <div className="relative z-10 animate-float">
            <div className="glass rounded-3xl p-4 shadow-2xl border-white/20">
              <img 
                src="https://picsum.photos/seed/tech-ui/800/600" 
                alt="AI Dashboard Preview" 
                className="rounded-2xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass p-6 rounded-2xl border-white/20 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-wider">Status</p>
                  <p className="text-sm font-bold">AI Generation Complete</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border-white/20 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/40/40`} 
                      className="w-10 h-10 rounded-full border-2 border-dark-navy"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold">1,200+ Users</p>
                  <p className="text-xs text-white/40">Joined this week</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
