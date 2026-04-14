import { Sparkles, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">AuraBuild <span className="gradient-text">AI</span></span>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              AuraBuild AI는 차세대 인공지능 기술을 활용하여 누구나 쉽고 빠르게 
              전문가 수준의 웹사이트를 구축할 수 있도록 돕습니다. 
              당신의 비즈니스 가치를 디지털 세상에 완벽하게 전달하세요.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/20 font-medium uppercase tracking-widest">
          <p>© 2026 AuraBuild AI. All rights reserved.</p>
          <p>Made with ❤️ for visionary entrepreneurs</p>
        </div>
      </div>
    </footer>
  );
}
