import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    { title: "Schematics (设计蓝图)", items: [
        // Tech/Abstract/Blueprint style images
        { url: 'https://images.unsplash.com/photo-1531297461136-82lwde?q=80&w=1000&auto=format&fit=crop', alt: 'Neural Network Diagram', size: 'tall' },
        { url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop', alt: 'Visual Sensor Logic', size: 'small' }
    ]},
    { title: "Chassis & Structure (机身构造)", items: [
        { url: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1600&auto=format&fit=crop', alt: 'Prototype Assembly', size: 'wide' },
        { url: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=1000&auto=format&fit=crop', alt: 'Cybernetic Eye Detail', size: 'tall' }
    ]},
    { title: "Core Processing (核心组件)", items: [
        { url: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1000&auto=format&fit=crop', alt: 'Ahtohallan Chipset', size: 'small' },
        { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop', alt: 'Data Stream Visualization', size: 'tall' }
    ]}
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 border-b border-gray-900 pb-12">
            <p className="text-blue-500 font-mono text-xs tracking-widest mb-4">CONFIDENTIAL FILES</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Design Archives.</h1>
            <p className="text-xl text-gray-400 font-light">Declassified engineering data from Ahtohallan.</p>
        </div>

        <div className="space-y-32">
            {categories.map((cat, catIdx) => (
                <div key={catIdx}>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-2 h-2 bg-blue-500 rounded-none"></div>
                        <h2 className="text-2xl text-white font-bold font-mono uppercase">{cat.title}</h2>
                        <div className="flex-grow h-px bg-gray-900"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                        {cat.items.map((img, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className={`relative border border-gray-800 overflow-hidden group bg-[#050505] ${
                                    img.size === 'wide' ? 'md:col-span-2' : 
                                    img.size === 'tall' ? 'md:row-span-2' : ''
                                }`}
                            >
                                {/* Image with filters to look like blueprints/tech */}
                                <img 
                                    src={img.url} 
                                    alt={img.alt} 
                                    className="w-full h-full object-cover transition-all duration-1000 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                
                                {/* Blueprint Overlay Grid */}
                                <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1462889/grid.png')] opacity-20 pointer-events-none"></div>
                                
                                {/* Info Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                                    <div className="self-end text-blue-500 font-mono text-xs border border-blue-500 px-2 py-1">
                                        IMG_REF_{Math.floor(Math.random() * 9000) + 1000}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-xl font-mono">{img.alt}</p>
                                        <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">Rendered by Kristoff</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;