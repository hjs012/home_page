import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₩0",
    features: [
      "AI 기본 템플릿 1개",
      "기본 도메인 제공",
      "월 1,000회 방문자",
      "커뮤니티 지원"
    ]
  },
  {
    name: "Professional",
    price: "₩29,000",
    recommended: true,
    features: [
      "AI 맞춤형 디자인 무제한",
      "커스텀 도메인 연결",
      "월 50,000회 방문자",
      "우선 순위 고객 지원",
      "SEO 최적화 도구"
    ]
  },
  {
    name: "Enterprise",
    price: "₩99,000",
    features: [
      "다중 웹사이트 관리",
      "무제한 방문자",
      "전담 매니저 배정",
      "API 연동 지원",
      "화이트 라벨링"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            투명하고 합리적인 <span className="gradient-text">가격 정책</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto break-keep">
            비즈니스의 규모에 맞는 최적의 플랜을 선택하세요. 언제든지 업그레이드 가능합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${
                tier.recommended 
                  ? 'glass border-electric-blue/50 shadow-2xl shadow-electric-blue/10' 
                  : 'glass border-white/5 hover:border-white/20'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-electric-blue to-neon-purple text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-white/40 text-sm">/ month</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-electric-blue" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                tier.recommended 
                  ? 'bg-gradient-to-r from-electric-blue to-neon-purple shadow-lg shadow-electric-blue/20 hover:opacity-90' 
                  : 'glass border-white/10 hover:bg-white/10'
              }`}>
                플랜 선택하기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
