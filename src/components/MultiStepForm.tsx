import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';
import { FormData } from '../types';
import { ChevronRight, ChevronLeft, Check, Sparkles } from 'lucide-react';

interface Props {
  onComplete: (data: FormData) => void;
}

export default function MultiStepForm({ onComplete }: Props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    businessType: '',
    designStyle: 'Modern',
    primaryColor: '#0052FF',
    contactEmail: '',
    additionalInfo: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      onComplete(formData);
    } else {
      nextStep();
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-[2rem] border-white/10 shadow-2xl relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-electric-blue to-neon-purple"
          initial={{ width: '33.33%' }}
          animate={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="flex justify-between items-center mb-12">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`w-10 h-1.5 rounded-full transition-colors ${
                i <= step ? 'bg-electric-blue' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Step {step} of 3</span>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">비즈니스 정보</h2>
                <p className="text-white/40">당신의 멋진 비즈니스를 소개해주세요.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">비즈니스 이름</label>
                  <input 
                    required
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => updateField('businessName', e.target.value)}
                    placeholder="예: 카페 아우라"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-blue outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">업종</label>
                  <select 
                    required
                    value={formData.businessType}
                    onChange={(e) => updateField('businessType', e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-blue outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>업종을 선택하세요</option>
                    <option value="Cafe">카페/음식점</option>
                    <option value="Tech">IT/스타트업</option>
                    <option value="Freelancer">프리랜서/포트폴리오</option>
                    <option value="E-commerce">쇼핑몰</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">디자인 선호도</h2>
                <p className="text-white/40">AI가 참고할 스타일을 선택하세요.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {(['Minimal', 'Modern', 'Classic', 'Futuristic'] as const).map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => updateField('designStyle', style)}
                    className={`p-6 rounded-2xl border transition-all text-left relative group ${
                      formData.designStyle === style 
                        ? 'bg-electric-blue/10 border-electric-blue' 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="block font-bold mb-1">{style}</span>
                    <span className="text-xs text-white/40">
                      {style === 'Minimal' && '깔끔하고 정제된 느낌'}
                      {style === 'Modern' && '트렌디하고 세련된 느낌'}
                      {style === 'Classic' && '전통적이고 신뢰감 있는 느낌'}
                      {style === 'Futuristic' && '혁신적이고 앞서가는 느낌'}
                    </span>
                    {formData.designStyle === style && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">브랜드 컬러</label>
                <div className="flex gap-4">
                  <input 
                    type="color"
                    value={formData.primaryColor}
                    onChange={(e) => updateField('primaryColor', e.target.value)}
                    className="w-16 h-16 rounded-2xl bg-transparent border-none cursor-pointer"
                  />
                  <div className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center">
                    <span className="font-mono text-sm uppercase">{formData.primaryColor}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">마지막 단계</h2>
                <p className="text-white/40">연락처와 추가 요청사항을 입력해주세요.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">이메일 주소</label>
                  <input 
                    required
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => updateField('contactEmail', e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-blue outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">추가 요청사항 (선택)</label>
                  <textarea 
                    value={formData.additionalInfo}
                    onChange={(e) => updateField('additionalInfo', e.target.value)}
                    placeholder="AI에게 전달할 특별한 요청사항이 있다면 적어주세요."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-blue outline-none transition-colors h-32 resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 py-4 rounded-2xl glass border-white/10 font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              이전
            </button>
          )}
          <button
            type="submit"
            className="flex-[2] py-4 rounded-2xl bg-gradient-to-r from-electric-blue to-neon-purple font-bold flex items-center justify-center gap-2 shadow-xl shadow-electric-blue/20 group"
          >
            {step === 3 ? (
              <>
                <Sparkles className="w-5 h-5" />
                홈페이지 생성 시작
              </>
            ) : (
              <>
                다음 단계
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
