import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Thermometer, Music, Shield, Wind, Droplets, Zap, Layers, Sparkles, Globe, Battery, Eye, Wifi, Snowflake, PenTool } from 'lucide-react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; delay: number; wide?: boolean }> = ({ title, desc, icon, delay, wide }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`bg-[#151516] p-8 md:p-10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden ${wide ? 'md:col-span-2' : 'md:col-span-1'}`}
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <PenTool size={64} />
    </div>
    <div className="text-blue-400 mb-6 p-3 bg-blue-900/10 w-fit rounded-sm border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3 font-mono">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm font-light">{desc}</p>
    
    {/* Tech Decals */}
    <div className="absolute bottom-4 right-4 flex gap-1">
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-20 pb-20 font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="py-20 text-center max-w-4xl mx-auto">
          <h2 className="text-blue-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 border border-blue-500/30 inline-block px-4 py-1">System Specs v5.0</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
            Engineered<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">Perfection.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-light max-w-2xl mx-auto">
            Elsa X 的每一项功能都是阿伦戴尔皇家科学院与阿托哈兰实验室的合作结晶。拆解她的魔法，你会发现那其实是高度先进的量子物理学。
          </p>
        </div>

        {/* Primary Feature Showcase: The Hands Schematic */}
        <div className="mb-24 bg-[#0f0f11] border border-white/10 flex flex-col md:flex-row min-h-[600px] relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
            
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center z-10 bg-[#0f0f11]">
                <h2 className="text-gray-500 font-mono text-xs tracking-wider mb-4 uppercase flex items-center gap-2">
                    <Snowflake size={14}/> 
                    Module: Cryo-Gen-X
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Cryo-Kinetic<br/>Manipulators.</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    手部末端执行器集成了数以亿计的纳米冷却泵。通过反向热力学循环，能在接触点瞬间制造接近绝对零度的真空场。
                </p>
                <ul className="space-y-4 text-gray-300 font-mono text-sm">
                    <li className="flex items-center gap-3 border-b border-gray-800 pb-2">
                        <Zap size={14} className="text-blue-400"/> 
                        <span>OUTPUT: 1.21 GW (Burst Mode)</span>
                    </li>
                    <li className="flex items-center gap-3 border-b border-gray-800 pb-2">
                        <Shield size={14} className="text-blue-400"/>
                        <span>MATERIAL: Titanium-Carbide Mesh</span>
                    </li>
                    <li className="flex items-center gap-3 border-b border-gray-800 pb-2">
                        <Thermometer size={14} className="text-blue-400"/>
                        <span>MIN TEMP: -273.15°C</span>
                    </li>
                </ul>
            </div>
            <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden bg-gray-900">
                 {/* Image: Technical Hand/Wireframe */}
                 <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale invert contrast-125" alt="Hand Schematic" />
                 <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1462889/grid.png')] opacity-20"></div>
                 <div className="absolute inset-0 border-l border-white/10"></div>
                 
                 {/* Overlay Graphics */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/50 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="w-28 h-28 border-t border-b border-white/30 rounded-full"></div>
                 </div>
            </div>
        </div>

        {/* Grid of Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Core: A17 Bionic-Ice"
            desc="基于记忆水晶架构的神经网络处理器。每秒可进行 10 亿次流体模拟计算。"
            icon={<Cpu size={24} />}
            delay={0.1}
            wide
          />
          <FeatureCard 
            title="Link: Fifth Spirit"
            desc="自然元素通信协议。支持与 Salamander (Fire) 和 Nokk (Water) 的无线互联。"
            icon={<Globe size={24} />}
            delay={0.2}
          />
          <FeatureCard 
            title="Chassis: Vibranium"
            desc="机身采用振金与极地冰晶聚合物混合打造，兼具强度与透光性。"
            icon={<Shield size={24} />}
            delay={0.3}
          />
          <FeatureCard 
            title="Audio: Siren-Call"
            desc="高频声波接收器。专为接收 'Into the Unknown' 频段设计。"
            icon={<Music size={24} />}
            delay={0.4}
          />
          <FeatureCard 
            title="Power: Zero-Point"
            desc="真空零点能电池。理论上无限续航，甚至能逆转热熵进行充电。"
            icon={<Battery size={24} />}
            delay={0.5}
          />
           <FeatureCard 
            title="Mobility: Nokk-Drive"
            desc="水面张力控制器。允许机体在液态水面上高速滑行或奔跑。"
            icon={<Droplets size={24} />}
            delay={0.6}
            wide
          />
          <FeatureCard 
            title="Sensors: Gale-Air"
            desc="全向气压感知。可探测 360 度范围内的气流扰动。"
            icon={<Wind size={24} />}
            delay={0.7}
          />
          <FeatureCard 
            title="Skin: Nano-Weave"
            desc="可编程物质外层。支持一键切换外观（如：加冕服、旅行装）。"
            icon={<Layers size={24} />}
            delay={0.8}
          />
          <FeatureCard 
            title="Status: Emotion-Flare"
            desc="直观的状态指示灯。不同颜色的光环代表不同的 CPU 负载和情绪状态。"
            icon={<Sparkles size={24} />}
            delay={0.9}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;