"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Clock, Copy, Check, MapPin, Star } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "backOut" }
  }
};

export default function RoyalEngagementFinal() {
  const [stage, setStage] = useState<"envelope" | "pulling" | "opened">("envelope");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-10-06T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const heroImage = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85";
  const galleryImgs = [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"
  ];

  const handleOpenSequence = () => {
    if (stage !== "envelope") return;
    setStage("pulling");
    setTimeout(() => {
      setStage("opened");
    }, 3500);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText("قصر السعادة - غزة، تقاطع شارع الجلاء مع شارع الثورة");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tabContent = [
    "Moments beginning with a simple smile, destined to pave a wonderful path ahead.",
    "Exchanging sincere vows and promising a bright future together as partners.",
    "Stepping forward hand in hand toward a lifetime filled with love and success."
  ];

  return (
    <main className="min-h-screen bg-[#0A0103] flex items-center justify-center p-0 sm:p-4 font-['Cairo',serif] text-[#F9F6F0]" dir="ltr">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Great+Vibes&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-vibes { font-family: 'Great Vibes', cursive; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* الحاوية الرئيسية بضبط متساوي وتوسيط كامل */}
      <div className="w-full max-w-[430px] h-screen sm:h-[920px] bg-[#1A0307] shadow-[0_30px_100px_rgba(0,0,0,0.95)] relative overflow-hidden flex flex-col sm:rounded-[45px] border-[8px] border-[#0E0103]">

        <AnimatePresence mode="wait">
          
          {stage !== "opened" ? (
            <motion.div
              key="envelope-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(15px)", transition: { duration: 2.0 } }}
              className="absolute inset-0 bg-gradient-to-b from-[#380711] via-[#220308] to-[#100103] z-50 flex items-center justify-center select-none overflow-hidden p-4"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:30px_30px]"></div>

              {/* مغلف متمركز بدقة تامة */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full max-w-[370px] h-[580px] bg-gradient-to-b from-[#4A0916] via-[#2B040A] to-[#140103] shadow-[0_40px_90px_rgba(0,0,0,0.9)] border-2 border-[#D4AF37]/40 rounded-2xl overflow-hidden flex flex-col justify-between my-auto"
              >
                <div className="absolute inset-5 border border-[#D4AF37]/30 rounded-xl pointer-events-none z-30"></div>

                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  animate={stage === "pulling" ? { y: -15, opacity: 1 } : { y: 150, opacity: 0 }}
                  transition={{ duration: 2.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-6 top-16 bottom-16 bg-[#FFFDF9] text-[#220308] rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.6)] p-5 flex flex-col items-center justify-center text-center z-30 border-2 border-[#FBE8C9]"
                >
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#801326] font-cairo font-bold">OFFICIAL INVITATION</span>
                  <h2 className="text-xl font-playfair font-bold my-3 text-[#220308]" dir="rtl">
                    المهندسة أمل & المهندس إبراهيم
                  </h2>
                  <div className="w-12 h-[1px] bg-[#D4AF37] my-2"></div>
                  <p className="text-[11px] text-stone-700 font-cairo px-2 leading-relaxed">نتشرف بحضوركم حفل إشهار خطوبتنا لنشارك معاً أجمل لحظات العمر.</p>
                </motion.div>

                <motion.div 
                  initial={{ rotateX: 0 }}
                  animate={stage === "pulling" ? { rotateX: -180, y: -260, opacity: 0.1 } : { rotateX: 0 }}
                  transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "top" }}
                  className="absolute top-0 inset-x-0 h-[260px] bg-gradient-to-b from-[#6B0B1F] via-[#4A0916] to-[#2B040A] [clip-path:polygon(0_0%,100%_0%,50%_100%)] z-40 shadow-xl border-b-2 border-[#D4AF37]/70"
                ></motion.div>

                {stage === "envelope" && (
                  <motion.div 
                    onClick={handleOpenSequence}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                    transition={{ scale: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 m-auto w-36 h-36 bg-gradient-to-br from-[#FBE8C9] via-[#D4AF37] to-[#A47825] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.8)] border-[5px] border-[#FFFDF9] cursor-pointer z-50"
                  >
                    <div className="w-[120px] h-[120px] rounded-full border border-[#220308]/20 flex flex-col items-center justify-center bg-[#FAF3EC] shadow-inner">
                      <span className="text-[#560B1A] font-vibes text-3xl font-bold mt-1">A & I</span>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#801326] font-cairo font-extrabold mt-1">TAP TO OPEN</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex-1 overflow-y-auto scrollbar-hide bg-[#0A0103] relative text-[#F9F6F0] pb-28"
            >
              
              <div className="relative w-full h-[680px] overflow-hidden flex flex-col justify-end text-center p-6 bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url('${heroImage}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0103] via-[#0A0103]/40 to-transparent"></div>
                
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                  <motion.div
                    animate={{ x: ["-15%", "115%"], y: ["15%", "30%", "20%"], scale: [1.2, 1.5, 1.2] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    className="absolute text-white text-3xl top-16"
                  >
                    🕊️
                  </motion.div>
                  <motion.div
                    animate={{ x: ["115%", "-15%"], y: ["40%", "25%", "45%"], scale: [1.1, 1.4, 1.1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute text-white/95 text-3xl top-36"
                  >
                    🕊️
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -50, 0], x: [0, 25, -15, 0], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-24 right-8 w-10 h-10 text-[#D4AF37] z-20 drop-shadow-md"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-1.5 2-4 4-6 4-2 0-3-1-3-2.5C3 3 5 2 7 2c2.5 0 4.5 1 5 1zm0 0c1.5 2 4 4 6 4 2 0 3-1 3-2.5C21 3 19 2 17 2c-2.5 0-4.5 1-5 1zm0 5c-2 3-5 6-8 7-2 1-3 0-3-1 0-1.5 1.5-3 3-4 2-1 6-1 8-2zm0 0c2 3 5 6 8 7 2 1 3 0 3-1 0-1.5-1.5-3-3-4-2-1-6-1-8-2zm-2 9c0 2-1 4-3 5-1 .5-2 0-2-1 0-1 1-2 2-3 1-.5 2-.5 3-.7zm4 0c0 2 1 4 3 5 1 .5 2 0 2-1 0-1-1-2-2-3-1-.5-2-.5-3-.7z"/></svg>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                  className="relative z-25 w-full space-y-3 pb-8 text-center"
                >
                  <span className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] font-cairo font-bold flex items-center justify-center gap-2">
                    <Sparkles size={13} /> Royal Engagement · 06.10.2026 <Sparkles size={13} />
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-playfair text-white tracking-wide font-bold drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] leading-relaxed" dir="rtl">
                    المهندسة أمل خيري أبو الخير <br/>
                    <span className="text-xl text-[#D4AF37] font-vibes">&</span> <br/>
                    المهندس إبراهيم معين أبو الخير
                  </h1>
                  <p className="text-xs text-[#EED299] tracking-[0.25em] font-cairo font-semibold">Celebrating our new beginning with love & joy</p>
                </motion.div>
              </div>

              {/* Wave 1 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mb-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 text-[#FAF7F2] fill-current">
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
                className="px-6 py-10 text-center space-y-4 bg-[#FAF7F2] text-[#220308] z-10 shadow-md"
              >
                <Heart className="mx-auto text-[#D4AF37]" size={30} />
                <h3 className="text-3xl font-vibes text-[#801326] font-bold">
                  A Night to Remember
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed font-cairo font-medium max-w-sm mx-auto">
                  When destinies unite with grace and hearts align in love, we cordially invite you to celebrate our engagement with us.
                </p>
              </motion.div>

              {/* Wave 2 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mt-1 rotate-180">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 text-[#FAF7F2] fill-current">
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Countdown */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={scaleUp}
                className="px-6 py-10 text-center space-y-6 bg-[#220308]"
              >
                <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
                  <Clock size={16} />
                  <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-bold text-[#D4AF37]">
                    Countdown to October 6, 2026
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-2.5 max-w-sm mx-auto">
                  <div className="bg-[#33050C] border border-[#D4AF37]/50 p-3.5 rounded-2xl shadow-2xl text-[#F9F6F0]"><span className="block font-bold text-xl">{timeLeft.days}</span><span className="text-[9px] uppercase text-[#EED299] font-cairo font-bold">Days</span></div>
                  <div className="bg-[#33050C] border border-[#D4AF37]/50 p-3.5 rounded-2xl shadow-2xl text-[#F9F6F0]"><span className="block font-bold text-xl">{timeLeft.hours}</span><span className="text-[9px] uppercase text-[#EED299] font-cairo font-bold">Hours</span></div>
                  <div className="bg-[#33050C] border border-[#D4AF37]/50 p-3.5 rounded-2xl shadow-2xl text-[#F9F6F0]"><span className="block font-bold text-xl">{timeLeft.minutes}</span><span className="text-[9px] uppercase text-[#EED299] font-cairo font-bold">Mins</span></div>
                  <div className="bg-[#33050C] border border-[#D4AF37]/50 p-3.5 rounded-2xl shadow-2xl text-[#F9F6F0]"><span className="block font-bold text-xl">{timeLeft.seconds}</span><span className="text-[9px] uppercase text-[#EED299] font-cairo font-bold">Secs</span></div>
                </div>
              </motion.div>

              {/* Wave 3 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mb-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 text-[#FAF7F2] fill-current">
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Tabs */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeIn}
                className="bg-[#FAF7F2] text-[#220308] px-6 py-10 text-center space-y-5 shadow-md"
              >
                <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-black text-[#801326]">
                  Milestones of Joy
                </h3>
                <div className="flex justify-center gap-2">
                  {["First Glance", "The Promise", "Future Together"].map((tab, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1.5 rounded-full text-xs font-cairo font-bold transition shadow-sm ${activeTab === idx ? 'bg-[#801326] text-[#FAF7F2]' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-xs text-stone-700 leading-relaxed font-cairo font-medium max-w-xs mx-auto min-h-[50px]"
                  >
                    {tabContent[activeTab]}
                  </motion.div>
                </AnimatePresence>
                <div className="text-[#D4AF37] text-xl">✦ ✦ ✦</div>
              </motion.div>

              {/* Wave 4 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mt-1 rotate-180">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 text-[#FAF7F2] fill-current">
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Gallery */}
              <div className="px-6 py-10 space-y-5 bg-[#220308]">
                <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
                  <Sparkles size={16} />
                  <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-bold text-[#D4AF37]">
                    Moments & Memories
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {galleryImgs.map((imgUrl, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      whileHover={{ scale: 1.05 }}
                      className="h-32 rounded-xl overflow-hidden border border-[#D4AF37]/50 shadow-xl relative group flex flex-col justify-end p-2 text-center"
                    >
                      <img src={imgUrl} alt={`Memory ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#220308]/90 via-[#220308]/40 to-transparent"></div>
                      <div className="relative z-10 space-y-0.5">
                        <span className="block text-[11px] font-bold text-[#D4AF37] font-playfair">Moment {index + 1}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Wave 5 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mb-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 text-[#FAF7F2] fill-current">
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Venue */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
                className="px-6 py-10 space-y-4 bg-[#FAF7F2] text-[#220308] shadow-md"
              >
                <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-black text-[#801326] text-center">
                  Venue Location
                </h3>

                <div className="bg-gradient-to-br from-[#33050C] to-[#1E0207] text-[#F9F6F0] border border-[#D4AF37]/50 p-5 rounded-2xl shadow-2xl space-y-4 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-inner text-xl">
                      <MapPin size={22} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[#F9F6F0] font-playfair font-bold text-lg">قصر السعادة</h4>
                      <p className="text-xs text-[#EED299]/90 font-cairo leading-relaxed" dir="rtl">غزة - تقاطع شارع الجلاء مع شارع الثورة</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={copyAddress}
                      className="w-full py-3.5 bg-[#220308] border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-xl"
                    >
                      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />} 
                      {copied ? "Address Copied Successfully!" : "Copy Venue Address"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Wave 6 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mt-1 rotate-180">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-14 text-[#FAF7F2] fill-current">
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* نتشرف بحضوركم */}
              <div className="bg-[#220308] px-6 py-10 text-center space-y-4">
                <Star className="mx-auto text-[#D4AF37]" size={26} />
                <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-bold text-[#D4AF37]">
                  نتشرف بحضوركم
                </h3>
                <p className="text-xs text-[#EED299]/80 leading-relaxed font-cairo max-w-xs mx-auto">
                  Your presence will add infinite joy and brightness to our special celebration.
                </p>
                <div className="pt-3 text-base font-playfair font-bold text-[#D4AF37]" dir="rtl">
                  المهندسة أمل & المهندس إبراهيم
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#140103] px-6 py-8 text-center border-t border-[#D4AF37]/20">
                {/* <div className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-cairo font-bold">
                  ROYAL ENGAGEMENT · PALESTINE, GAZA · 2026
                </div> */}
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </main>
  );
}