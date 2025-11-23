import React from 'react';

const SpecSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4 flex items-center gap-3">
            {title}
        </h3>
        <div className="grid grid-cols-1 gap-y-0">
            {children}
        </div>
    </div>
);

const SpecRow: React.FC<{ label: string; value: string; sub?: string }> = ({ label, value, sub }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-gray-900 hover:bg-gray-900/30 transition-colors px-4 rounded-lg">
    <dt className="text-gray-400 font-medium">{label}</dt>
    <dd className="md:col-span-2 text-gray-100 font-semibold text-lg flex flex-col">
        <span>{value}</span>
        {sub && <span className="text-sm text-gray-500 mt-1 font-normal">{sub}</span>}
    </dd>
  </div>
);

const Specs: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 font-sans">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">技术规格</h1>
            <p className="text-xl text-gray-400">Arendelle Robotics /// Model-X /// Gen 5</p>
            <p className="text-sm text-gray-600 mt-2 font-mono">REF: DISNEY-WIKI-DATA-SET-ELSA</p>
        </div>
        
        <SpecSection title="基础参数 (Identity Profile)">
            <SpecRow label="全名" value="Elsa of Arendelle (Model X)" sub="Serial No: SNOW-QUEEN-1844-V5" />
            <SpecRow label="身高" value="170 cm (5'7'')" sub="不含高跟鞋 (含鞋 178 cm)" />
            <SpecRow label="重量" value="54 kg (119 lbs)" sub="采用超轻量化钛合金与碳纤维复合骨架" />
            <SpecRow label="视觉传感器 (Eyes)" value="Blue (冰蓝色)" sub="具备红外夜视与 HUD 增强现实显示功能" />
            <SpecRow label="发丝系统 (Hair)" value="Platinum Blonde (白金)" sub="20,000 根微型光纤合成发丝，支持微光流转" />
            <SpecRow label="制造地" value="Enchanted Forest / Ahtohallan Lab" />
            <SpecRow label="家庭单位" value="Anna (Sister Unit), Iduna (Creator), Agnarr (Creator)" />
        </SpecSection>

        <SpecSection title="神经系统 & OS (Neural)">
            <SpecRow label="核心处理器" value="A17 Pro Bionic Ice" sub="3nm 工艺, 16-core Neural Engine, 32TB Memory" />
            <SpecRow label="操作系统" value="Permafrost OS 5.0" sub="基于 Android 但完全重写了情感内核" />
            <SpecRow label="MBTI 性格矩阵" value="INFJ (提倡者)" sub="优雅，矜持，高保护欲，偶尔的俏皮，极度负责" />
            <SpecRow label="语言支持" value="全球语言库 + 北地语 (Northuldra)" sub="自动翻译模块已激活" />
            <SpecRow label="恐惧抑制器" value="已卸载 (Deprecated)" sub="Gen 5 已移除抑制手套，完全拥抱能力" />
        </SpecSection>

        <SpecSection title="魔法能力 (Elemental Abilities)">
            <SpecRow label="能力等级" value="Class 5 (Omega Level)" sub="具有改变区域生态系统的能力" />
            <SpecRow label="Cryokinesis" value="冰雪操控" sub="能够凭空生成冰雪，冻结流体，制造有生命的冰雪生物 (如 Olaf, Marshmallow)" />
            <SpecRow label="输出功率" value="1.21 Gigawatts" sub="峰值状态下 (Let It Go mode)" />
            <SpecRow label="造雪量" value="5,000 立方米/分钟" sub="暴风雪模式下" />
            <SpecRow label="精确度" value="微米级 (Micron)" sub="可以雕刻出带有内部齿轮结构的冰钟，或改变服装纤维" />
            <SpecRow label="附属召唤" value="Marshmallow (保镖单元), Olaf (伴侣单元)" sub="需额外购买扩展包" />
        </SpecSection>

        <SpecSection title="机身构造 (Chassis)">
            <SpecRow label="内部骨骼" value="Vibranium-Titanium Alloy" sub="振金-钛合金，极度耐寒，不可破坏" />
            <SpecRow label="外部皮肤" value="Syntho-Organic Dermis" sub="合成有机真皮，具有伤口自愈能力，触感冰凉" />
            <SpecRow label="耐寒极限" value="-273.15°C (绝对零度)" sub="在这个温度下超导电路效率最高" />
            <SpecRow label="服装系统" value="Nano-Weave Projection" sub="纳米编制投影，可实体化为冰晶礼服" />
        </SpecSection>

        <SpecSection title="连接与能源 (Connectivity)">
            <SpecRow label="能源核心" value="Fifth Spirit Core" sub="利用量子真空零点能，理论上无限续航" />
            <SpecRow label="无线协议" value="Wi-Fi 7, 5G, Spirit-Net" sub="Spirit-Net 可连接风、火、水、地四大基站" />
            <SpecRow label="Anna-Link" value="专有高优先协议" sub="无论距离多远，都能感知 Anna 单元的状态 (Quantum Entanglement)" />
        </SpecSection>

        <div className="bg-[#111] p-8 rounded-3xl mt-12 border border-gray-800">
            <p className="text-sm text-gray-500 leading-relaxed">
                免责声明：Elsa X 的冷冻能力极为强大。Arendelle Robotics 对因操作不当导致的冻伤、永恒的冬天或心碎不承担法律责任。只有真爱之举 (Act of True Love) 才能解冻被冻结的心。此规格表数据源自 Disney Wiki 并进行了仿生学适配。
            </p>
        </div>
      </div>
    </div>
  );
};

export default Specs;