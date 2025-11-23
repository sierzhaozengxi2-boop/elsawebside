import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Wind, Snowflake, Zap, Heart, Star, Shield, Globe, Grid } from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const Home: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="bg-black min-h-screen flex flex-col overflow-x-hidden selection:bg-blue-500/30 font-sans">
      
      {/* 1. HERO SECTION: PRODUCT REVEAL */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Dynamic Background: Tech Grid & Abstract Form */}
        <div className="absolute inset-0 z-0 bg-black">
            <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1462889/grid.png')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
            {/* Bionic Silhouette / Abstract Tech Shape */}
            <img 
                src="https://images.unsplash.com/photo-1535378437268-27696990bd1e?q=80&w=2000&auto=format&fit=crop" 
                alt="Bionic Silhouette" 
                className="w-full h-full object-cover opacity-40 scale-110 animate-[pulse_8s_ease-in-out_infinite] filter contrast-125 saturate-0 brightness-125"
            />
        </div>

        <div className="z-20 text-center space-y-8 px-4 max-w-6xl mx-auto mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-blue-400 font-mono text-sm tracking-[0.3em] uppercase"
          >
            <Grid size={14} />
            <span>Prototype Design v5.0</span>
            <Grid size={14} />
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="relative inline-block"
          >
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-white drop-shadow-2xl leading-none">
                Elsa <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-white to-blue-600">X</span>
              </h1>
              <div className="absolute -right-12 top-0 flex flex-col items-start gap-1">
                  <span className="text-[10px] text-gray-500 font-mono border border-gray-800 px-1">FIG. A</span>
                  <span className="text-xs border border-white/30 px-2 py-1 rounded-full text-gray-400 tracking-wider bg-black/50 backdrop-blur-md">BIONIC</span>
              </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-4xl font-light text-gray-200 mt-4 max-w-4xl mx-auto leading-tight font-mono"
          >
            工程学的奇迹。<br/>
            <span className="text-gray-500 text-lg md:text-xl mt-2 block">Engineering The Impossible.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
          >
            <Link to="/purchase" className="bg-white text-black hover:bg-gray-200 px-12 py-4 rounded-none skew-x-[-10deg] border-l-4 border-blue-600 font-bold text-lg transition-all transform hover:scale-105">
              <span className="skew-x-[10deg] inline-block">预订机型</span>
            </Link>
            <Link to="/specs" className="text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-400/80 px-12 py-4 rounded-none skew-x-[-10deg] font-mono text-lg transition-all backdrop-blur-sm">
              <span className="skew-x-[10deg] inline-block">查看蓝图</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION: DESIGN PHILOSOPHY */}
      <section className="py-32 bg-[#050505] relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
             <div className="flex flex-col items-center text-center mb-24">
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-blue-500 to-transparent mb-8"></div>
                <h3 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-8">
                  重塑自然界限。<br/>
                  <span className="text-gray-600 font-mono text-3xl md:text-4xl mt-4 block">Redefining Boundaries.</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto font-mono">
                  Model-X 的设计初衷并非模仿人类，而是超越。每一个关节，每一束合成肌肉纤维，都经过数万次流体动力学模拟。这是 Arendelle 实验室有史以来最复杂的机械结构。
                </p>
             </div>
          </FadeIn>

          {/* Split Feature 1: The Arm Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32 border-b border-white/5 pb-20">
             <FadeIn>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <h4 className="text-gray-500 font-mono text-xs tracking-widest uppercase">COMPONENT: MANIPULATOR-L</h4>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">微米级精度。<br/>Cryo-V5 机械臂。</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    透过半透明的合成皮肤，你可以看到内部精密的钛合金传动装置。指尖集成了高灵敏度热感应阵列，能够精确控制 0.01 摄氏度的温差变化。
                </p>
                <div className="grid grid-cols-2 gap-4 font-mono text-xs text-gray-500 mt-8">
                    <div className="border border-gray-800 p-3">
                        <span className="block text-white">TENSION</span>
                        4500 N
                    </div>
                    <div className="border border-gray-800 p-3">
                        <span className="block text-white">RESPONSE</span>
                        0.03 ms
                    </div>
                </div>
             </FadeIn>
             <FadeIn delay={0.2}>
                <div className="h-[500px] relative group overflow-hidden border border-white/10 bg-[#111]">
                    {/* Tech Image: Robotic Arm/Hand */}
                    <img 
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Robotic Arm Blueprint" 
                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1462889/grid.png')] opacity-30 pointer-events-none"></div>
                    
                    {/* UI Overlay */}
                    <div className="absolute top-4 right-4 text-right">
                        <p className="text-blue-500 font-mono text-xs">/// LIVE FEED</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur border-t border-white/10">
                         <p className="text-white font-mono text-xs">FIG 2.1 - INTERNAL SERVO LAYOUT</p>
                    </div>
                </div>
             </FadeIn>
          </div>

          {/* Split Feature 2: The Core/Face */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <FadeIn delay={0.2} >
                <div className="order-2 md:order-1 h-[500px] relative group overflow-hidden border border-white/10 bg-[#111]">
                    {/* Tech Image: Artificial Face / Mesh */}
                    <img 
                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop" 
                        alt="Syntho-Skin Mesh" 
                        className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700 filter contrast-125" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent mix-blend-overlay"></div>
                    
                    {/* Scanner Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] animate-[scan_4s_ease-in-out_infinite] opacity-50"></div>
                </div>
             </FadeIn>
             <FadeIn className="order-1 md:order-2">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <h4 className="text-gray-500 font-mono text-xs tracking-widest uppercase">COMPONENT: NEURAL-NET</h4>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">完美的仿真。<br/>超越人类的面孔。</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    面部由 42 个微型执行器驱动，覆盖着第五代合成有机皮肤 (Syntho-Organic Dermis)。它不仅能模拟微表情，还能根据环境温度改变色泽。
                </p>
                <p className="text-white font-medium font-mono border-l-2 border-purple-500 pl-4">
                    "Is she breathing? Yes, for cooling purposes."
                </p>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. WIREFRAME PARALLAX */}
      <div ref={targetRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#080808]">
         <motion.div style={{ opacity, scale }} className="relative z-10 text-center px-6 border border-white/10 p-12 bg-black/50 backdrop-blur-sm">
             <p className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">SYSTEM: UNLOCKED</p>
             <p className="text-sm text-blue-400 font-mono">INITIALIZING FIFTH SPIRIT PROTOCOL...</p>
         </motion.div>
         <div className="absolute inset-0 z-0">
             {/* Abstract Wireframe background */}
             <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 grayscale invert" alt="Wireframe" />
         </div>
      </div>

      {/* 4. DETAILED FEATURES GRID - BLUEPRINT STYLE */}
      <section className="py-32 bg-[#101010] px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex justify-between items-end border-b border-gray-800 pb-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">核心模组架构</h2>
                    <p className="text-gray-500 font-mono">Core Module Architecture Layout</p>
                </div>
                <div className="hidden md:block text-right font-mono text-xs text-gray-600">
                    STATUS: OPERATIONAL<br/>
                    TEMP: -5.0°C
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">
                {/* Large Item: Memory Core */}
                <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="col-span-1 md:col-span-2 row-span-2 bg-[#0a0a0a] border border-white/10 overflow-hidden relative group"
                >
                    {/* Tech Abstract */}
                    <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" 
                        alt="Memory Core Chip" 
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,_#000_100%)]"></div>
                    <div className="absolute bottom-0 left-0 p-10 z-10 w-full">
                        <div className="border-l-2 border-blue-500 pl-4">
                            <h4 className="text-blue-300 font-mono text-xs mb-2">MEMORY_BANK_AHTOHALLAN</h4>
                            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">水流记忆存储体</h3>
                            <p className="text-gray-400 text-sm max-w-md">采用晶体全息存储技术，能够完美复刻并回放历史数据流。</p>
                        </div>
                    </div>
                </motion.div>

                {/* Side Item 1: Sensors */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="col-span-1 row-span-1 bg-[#111] border border-white/10 overflow-hidden relative p-8 flex flex-col justify-between group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Wind size={40}/></div>
                    <div className="relative z-10 mt-auto">
                        <h4 className="text-white text-xl font-bold mb-1 font-mono">Gale-Sensors</h4>
                        <p className="text-gray-500 text-xs">气流动力学传感阵列</p>
                    </div>
                    <div className="absolute inset-0 border border-white/5 m-2 pointer-events-none"></div>
                </motion.div>

                {/* Side Item 2: Nokk Drive */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="col-span-1 row-span-1 bg-[#111] border border-white/10 overflow-hidden relative p-8 flex flex-col justify-between group"
                >
                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Fluid Dynamics" />
                    <div className="relative z-10">
                        <h4 className="text-white text-xl font-bold font-mono">NOKK_PROTOCOL</h4>
                        <span className="text-blue-500 text-xs uppercase border border-blue-500/30 px-2 py-1 rounded mt-2 inline-block">Amphibious</span>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-32 bg-[#080808] flex flex-col items-center justify-center relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1462889/grid.png')] opacity-10"></div>
          <div className="relative z-10 text-center px-4">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">DEPLOYMENT READY.</h2>
              <p className="text-gray-500 font-mono mb-12">Unit allocation is limited.</p>
              <Link to="/purchase" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-none bg-white px-12 font-medium text-neutral-950 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">
                  <span className="mr-2">INITIATE ORDER</span>
                  <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;