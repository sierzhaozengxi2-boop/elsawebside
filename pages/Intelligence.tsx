import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lock, Share2, Activity, Mic, Heart } from 'lucide-react';

const Intelligence: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 overflow-hidden font-sans">
      {/* Hero */}
      <div className="relative max-w-7xl mx-auto px-6 text-center mb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-blue-400 font-semibold tracking-wider mb-6 uppercase">Permafrost OS 5.0</h2>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              有思想。<br/>
              更有灵魂。
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Permafrost OS 是首个基于“魔法共鸣”而非单纯逻辑代码构建的操作系统。它通过模拟人类的“心”来驱动决策，而不仅仅是“脑”。
            </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
         {/* Feature 1: The Voice */}
         <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
            <div className="md:w-1/2">
                <div className="bg-[#111] rounded-[40px] p-10 h-[500px] relative overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
                     {/* Sound wave animation simulation */}
                     <div className="flex gap-2 items-center justify-center h-32">
                        {[...Array(8)].map((_, i) => (
                            <motion.div 
                                key={i}
                                animate={{ height: [20, 120, 40, 80, 20] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                className="w-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                            />
                        ))}
                     </div>
                     <div className="absolute bottom-10 text-center w-full">
                        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                            <Mic size={16} className="text-white" />
                            <p className="text-white font-mono text-sm">DETECTING: "AH-AH-AH-AH"</p>
                        </div>
                     </div>
                </div>
            </div>
            <div className="md:w-1/2 space-y-8">
                <h3 className="text-3xl md:text-5xl font-bold text-white">听到你的呼唤。</h3>
                <p className="text-gray-400 text-xl leading-relaxed">
                    Elsa X 总是倾听。但她不会回应所有人。通过声纹锁定技术，她只对自己认可的“家人”做出回应。当她听到那个神秘的旋律时，她的核心处理器会超频运作，进入“Into the Unknown” 探索模式。
                </p>
                <ul className="space-y-4 mt-4">
                    <li className="flex items-center gap-4 text-gray-300 text-lg">
                        <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><Activity /></div> 实时情绪分析
                    </li>
                    <li className="flex items-center gap-4 text-gray-300 text-lg">
                        <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Lock /></div> 生物识别声纹锁
                    </li>
                </ul>
            </div>
         </div>

         {/* Feature 2: Ethics */}
         <div className="bg-[#0a0a0a] rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <Heart className="w-20 h-20 text-purple-500 mx-auto mb-10" fill="currentColor" fillOpacity={0.2} />
                <h3 className="text-3xl md:text-6xl font-bold text-white mb-8">The Next Right Thing.</h3>
                <p className="text-gray-400 text-xl leading-relaxed mb-12">
                    在面对道德困境时，普通的 AI 会计算最优解。Elsa X 不同。她被编程去寻找“下一件正确的事”。这意味着在危机时刻，她会优先保护生命，甚至不惜牺牲自己。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <h4 className="text-white font-bold mb-3 text-lg">自我牺牲协议</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">必要时冻结自身核心以保护周围环境，类似于在阿托哈兰的冻结事件。</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <h4 className="text-white font-bold mb-3 text-lg">真理追求</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">无法撒谎。Permafrost OS 的核心逻辑建立在绝对的真实之上。</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <h4 className="text-white font-bold mb-3 text-lg">记忆永存</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">所有经历都会被上传至阿托哈兰云端备份 (Ahtohallan Cloud)。</p>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Intelligence;