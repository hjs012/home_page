import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "코딩을 전혀 몰라도 정말 가능한가요?",
    answer: "네, 당연합니다! AuraBuild AI는 코딩 지식이 전혀 없는 분들을 위해 설계되었습니다. 간단한 질문에 답하기만 하면 AI가 디자인부터 레이아웃, 기능 구현까지 모든 과정을 자동으로 처리합니다."
  },
  {
    question: "제작된 웹사이트의 소유권은 누구에게 있나요?",
    answer: "제작된 모든 웹사이트의 소유권은 사용자 본인에게 있습니다. 언제든지 데이터를 백업하거나 다른 호스팅 서비스로 이전할 수 있는 자유를 보장합니다."
  },
  {
    question: "기존에 사용하던 도메인을 연결할 수 있나요?",
    answer: "네, Professional 플랜 이상부터는 이미 보유하고 계신 커스텀 도메인을 간편하게 연결하여 사용하실 수 있습니다."
  },
  {
    question: "제작 후 수정이 필요한 경우는 어떻게 하나요?",
    answer: "AuraBuild AI의 직관적인 에디터를 통해 텍스트, 이미지, 컬러 등을 실시간으로 수정할 수 있습니다. AI에게 새로운 요청을 보내 전체적인 스타일을 변경하는 것도 가능합니다."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-dark-navy/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            자주 묻는 <span className="gradient-text">질문</span>
          </motion.h2>
          <p className="text-white/40 break-keep">궁금하신 점이 있으신가요? 가장 많이 묻는 질문들을 모았습니다.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-white/60 leading-relaxed text-sm break-keep">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
