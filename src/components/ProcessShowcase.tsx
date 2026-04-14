import { motion } from 'motion/react';
import { MousePointer2, Layout, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MousePointer2,
    title: "요구사항 입력",
    description: "간단한 질문에 답하는 것만으로 당신의 비즈니스 정체성을 파악합니다.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Layout,
    title: "AI 구조 설계",
    description: "수만 개의 성공 사례를 분석하여 최적의 레이아웃과 UX를 설계합니다.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "맞춤형 디자인",
    description: "브랜드 컬러와 선호 스타일에 맞춘 고퀄리티 비주얼을 생성합니다.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Rocket,
    title: "즉시 배포",
    description: "단 한 번의 클릭으로 전 세계 어디서든 접속 가능한 사이트가 완성됩니다.",
    color: "from-green-500 to-emerald-500"
  }
];

export default function ProcessShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            AI가 웹사이트를 만드는 <span className="gradient-text">마법 같은 과정</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto break-keep">
            복잡한 코딩이나 디자인 고민은 이제 그만하세요. 
            AuraBuild AI가 당신의 상상을 현실로 만드는 4단계 프로세스입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="glass p-8 rounded-3xl border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="text-white w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 break-keep">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed break-keep">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-white/20 uppercase tracking-widest">
                  Step 0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
