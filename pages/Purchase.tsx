import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Truck, CreditCard, Package, Loader2, QrCode, Snowflake, AlertCircle, ChevronRight, ShieldCheck } from 'lucide-react';
import { OrderStatus } from '../types';

const Purchase: React.FC = () => {
  const [status, setStatus] = useState<OrderStatus>(OrderStatus.IDLE);
  const [selectedColor, setSelectedColor] = useState<'silver' | 'blue'>('silver');
  const [progress, setProgress] = useState(0);

  const price = 99999;

  // Simulation Logic
  useEffect(() => {
    if (status === OrderStatus.PROCESSING) {
      const timer = setTimeout(() => setStatus(OrderStatus.PAYMENT_PENDING), 2000);
      return () => clearTimeout(timer);
    }
    
    if (status === OrderStatus.PAID) {
      setProgress(0);
      const timer = setTimeout(() => {
          setStatus(OrderStatus.SHIPPING);
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (status === OrderStatus.SHIPPING) {
        // Simulate progress bar over 5 seconds
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setStatus(OrderStatus.DELIVERED);
                    return 100;
                }
                return prev + 1; // increment
            });
        }, 50);
        return () => clearInterval(interval);
    }
  }, [status]);

  const handlePay = () => setStatus(OrderStatus.PROCESSING);
  const confirmPayment = () => setStatus(OrderStatus.PAID);
  const confirmReceipt = () => setStatus(OrderStatus.CONFIRMED);

  return (
    <div className="bg-[#000] min-h-screen pt-20 flex items-center justify-center text-black p-4 font-sans">
      <div className="max-w-6xl w-full bg-white rounded-[0px] overflow-hidden min-h-[800px] flex flex-col md:flex-row border border-gray-800">
        
        {/* Left: Product Preview - Industrial Design Studio Style */}
        <div className={`md:w-1/2 p-10 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-700 bg-[#f0f0f0]`}>
            {/* Studio Background Grid */}
            <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1462889/grid.png')] opacity-5"></div>
            
            <motion.div 
                layout 
                className="relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                key={selectedColor}
            >
               {/* Simulated Product Representation - Clean Abstract Shape */}
               <div className="relative w-[320px] h-[600px] bg-white shadow-2xl overflow-hidden border-[8px] border-[#e5e5e5] flex flex-col relative">
                    
                    {/* Product Surface Texture */}
                    <img 
                        src={selectedColor === 'silver' 
                            ? "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" // White Tech texture
                            : "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop" // Blue Tech texture
                        } 
                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                        alt="Skin Texture" 
                    />

                    {/* Overlay UI - Lock Screen */}
                    <div className="relative z-20 h-full flex flex-col justify-between p-8 bg-gradient-to-b from-black/10 to-black/40">
                         <div className="text-center mt-12">
                             <p className="text-6xl font-thin text-white tracking-tighter font-mono">12:21</p>
                             <p className="text-sm text-white/80 mt-2 font-mono uppercase tracking-widest">System Active</p>
                         </div>
                         
                         <div className="flex justify-between items-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                <Snowflake className="text-white w-4 h-4" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                <ShieldCheck className="text-white w-4 h-4" />
                            </div>
                         </div>
                    </div>
               </div>
               
               {/* Reflection/Shadow */}
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-8 bg-black/20 blur-xl rounded-[100%]"></div>
            </motion.div>

            <div className="mt-12 text-center z-10">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 font-mono">{selectedColor === 'silver' ? 'FINISH: PURE PLATINUM' : 'FINISH: GLACIER BLUE'}</h3>
                <p className="text-gray-500 mt-2 flex items-center justify-center gap-2 text-xs font-mono uppercase">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Stock Available
                </p>
            </div>
        </div>

        {/* Right: Interaction Panel */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col bg-white relative">
          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
                
              {/* STAGE 1: SELECTION */}
              {status === OrderStatus.IDLE && (
                <motion.div 
                    key="selection"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 font-mono">Arendelle Robotics Store</h2>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 tracking-tight">Configure Unit.</h1>
                        <p className="text-gray-500 text-lg leading-relaxed font-light">Select your finish. Includes 5th Spirit connectivity module.</p>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-900 mb-4 uppercase tracking-wider">Chassis Material</label>
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => setSelectedColor('silver')}
                                className={`p-6 border flex flex-col items-center gap-3 transition-all duration-300 relative overflow-hidden ${selectedColor === 'silver' ? 'border-blue-600 bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
                            >
                                <div className="w-8 h-8 rounded-full bg-[#e2e8f0] shadow-inner border border-gray-300 mb-2"></div>
                                <span className="text-xs font-bold uppercase text-gray-900">Platinum</span>
                            </button>
                            <button 
                                onClick={() => setSelectedColor('blue')}
                                className={`p-6 border flex flex-col items-center gap-3 transition-all duration-300 relative overflow-hidden ${selectedColor === 'blue' ? 'border-blue-600 bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
                            >
                                <div className="w-8 h-8 rounded-full bg-[#93c5fd] shadow-inner border border-blue-300 mb-2"></div>
                                <span className="text-xs font-bold uppercase text-gray-900">Glacier</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 border-l-4 border-blue-500">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
                            <div className="text-sm text-gray-600">
                                <p className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wide">Shipping Notice</p>
                                <p className="text-xs leading-relaxed">Units are shipped in cryo-stasis containers. Do not open until fully acclimatized.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                         <div className="flex justify-between items-end mb-8">
                            <div>
                                <span className="text-3xl font-bold tracking-tight text-gray-900 font-mono">¥{price.toLocaleString()}</span>
                                <p className="text-xs text-gray-400 mt-1 uppercase">Excl. Tax</p>
                            </div>
                         </div>
                         <button onClick={handlePay} className="w-full bg-black hover:bg-gray-800 text-white py-5 font-bold text-sm uppercase tracking-widest transition-all hover:shadow-lg">
                             Proceed to Checkout
                         </button>
                    </div>
                </motion.div>
              )}

              {/* STAGE 2: PROCESSING */}
              {status === OrderStatus.PROCESSING && (
                <motion.div 
                    key="processing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center space-y-6"
                >
                    <div className="relative">
                        <Loader2 size={64} className="text-black animate-spin" />
                    </div>
                    <p className="text-gray-900 font-mono text-sm uppercase animate-pulse">Secure Handshake...</p>
                </motion.div>
              )}

              {/* STAGE 3: PAYMENT QR */}
              {status === OrderStatus.PAYMENT_PENDING && (
                <motion.div 
                    key="payment"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center space-y-8 max-w-sm mx-auto"
                >
                    <div className="w-20 h-20 bg-gray-50 flex items-center justify-center border border-gray-200">
                        <CreditCard size={32} className="text-black" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900 font-mono uppercase">Awaiting Transfer</h2>
                        <p className="text-gray-500 text-sm">Scan via Oaken-Pay terminal.</p>
                    </div>
                    
                    <div 
                        className="bg-white p-4 border border-gray-200 cursor-pointer hover:border-black transition-all group relative overflow-hidden" 
                        onClick={confirmPayment}
                    >
                        <QrCode size={160} className="text-black relative z-10" />
                        
                        {/* Scan effect */}
                        <motion.div 
                            initial={{ top: 0 }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 w-full h-px bg-red-500 z-20"
                        />
                    </div>
                    <p className="text-[10px] text-gray-400 font-mono uppercase">Click QR to simulate transaction approval</p>
                </motion.div>
              )}

              {/* STAGE 4: SHIPPING */}
              {(status === OrderStatus.PAID || status === OrderStatus.SHIPPING) && (
                <motion.div 
                    key="shipping"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full space-y-12 w-full max-w-sm mx-auto"
                >
                    <Truck size={80} className="text-black" />
                    
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900 font-mono uppercase">
                            {status === OrderStatus.PAID ? "Order Confirmed" : "In Transit"}
                        </h2>
                        <p className="text-gray-500 text-sm font-mono">
                            Tracking ID: ELSA-X-5592
                        </p>
                    </div>
                    
                    {status === OrderStatus.SHIPPING && (
                        <div className="w-full space-y-2">
                            <div className="w-full bg-gray-100 h-1 overflow-hidden">
                                <motion.div 
                                    className="bg-black h-full" 
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-400 font-mono uppercase">
                                <span>Depot</span>
                                <span>Transit</span>
                                <span>Arrival</span>
                            </div>
                        </div>
                    )}
                </motion.div>
              )}

              {/* STAGE 5: DELIVERED */}
              {status === OrderStatus.DELIVERED && (
                 <motion.div 
                    key="delivered"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full space-y-10 text-center max-w-sm mx-auto"
                 >
                    <div className="w-32 h-32 bg-gray-50 flex items-center justify-center border border-gray-200">
                        <Package size={48} className="text-black" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 font-mono uppercase">Delivered</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">Unit has arrived at designated coordinates.</p>
                    </div>
                    <button onClick={confirmReceipt} className="bg-black hover:bg-gray-800 text-white px-12 py-4 font-bold text-sm uppercase tracking-widest transition-all">
                        Confirm Receipt
                    </button>
                 </motion.div>
              )}

              {/* STAGE 6: CONFIRMED */}
              {status === OrderStatus.CONFIRMED && (
                 <motion.div 
                    key="confirmed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full space-y-8 text-center"
                 >
                    <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="w-24 h-24 bg-black rounded-full flex items-center justify-center"
                    >
                        <Check size={48} className="text-white" strokeWidth={3} />
                    </motion.div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 font-mono">ACTIVATED</h2>
                        <p className="text-gray-500 text-sm">Welcome to the future.</p>
                    </div>
                    <button onClick={() => {setStatus(OrderStatus.IDLE); setProgress(0);}} className="text-gray-500 hover:text-black font-mono text-xs mt-12 flex items-center gap-2 transition-colors border-b border-transparent hover:border-black pb-1 uppercase">
                        Order Additional Unit <ChevronRight size={12} />
                    </button>
                 </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;