import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { PortfolioItem } from '../types';
import { ExternalLink } from 'lucide-react';

const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Cafe de Luna',
    category: 'Cafe',
    image: 'https://picsum.photos/seed/cafe1/600/400',
    description: '감성적인 분위기의 로컬 카페를 위한 미니멀 웹사이트'
  },
  {
    id: '2',
    title: 'Nexus Tech',
    category: 'Tech Startup',
    image: 'https://picsum.photos/seed/tech1/600/400',
    description: '차세대 클라우드 솔루션을 소개하는 하이테크 랜딩 페이지'
  },
  {
    id: '3',
    title: 'Studio Bloom',
    category: 'Freelancer',
    image: 'https://picsum.photos/seed/design1/600/400',
    description: '크리에이티브 디자이너를 위한 세련된 포트폴리오'
  },
  {
    id: '4',
    title: 'Eco Mart',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/shop1/600/400',
    description: '친환경 제품을 판매하는 깔끔한 온라인 스토어'
  },
  {
    id: '5',
    title: 'Urban Roast',
    category: 'Cafe',
    image: 'https://picsum.photos/seed/cafe2/600/400',
    description: '도심 속 휴식을 제공하는 로스터리 카페 홍보 페이지'
  },
  {
    id: '6',
    title: 'DataFlow AI',
    category: 'Tech Startup',
    image: 'https://picsum.photos/seed/tech2/600/400',
    description: '데이터 분석 플랫폼을 위한 직관적인 대시보드 UI'
  }
];

const categories: PortfolioItem['category'][] = ['Cafe', 'Freelancer', 'Tech Startup', 'E-commerce'];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioItem['category'] | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-dark-navy/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              성공적인 <span className="gradient-text">비즈니스의 시작</span>
            </motion.h2>
            <p className="text-white/40 break-keep">AI가 제작한 다양한 업종의 실제 포트폴리오를 확인해보세요.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'All' ? 'bg-electric-blue text-white shadow-lg shadow-electric-blue/20' : 'glass hover:bg-white/10'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat ? 'bg-electric-blue text-white shadow-lg shadow-electric-blue/20' : 'glass hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="glass rounded-3xl overflow-hidden border-white/5 group-hover:border-white/20 transition-all duration-500">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-white/10">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-12 h-12 rounded-full bg-white text-dark-navy flex items-center justify-center shadow-2xl">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed break-keep">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
