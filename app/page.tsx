"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Clock,
  Copy,
  Check,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

export default function RoyalEngagementFinal() {
  const [stage, setStage] = useState<"envelope" | "pulling" | "opened">(
    "envelope"
  );
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-06T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
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

  const heroImage = "/images/moment4.jpeg";
  const galleryImgs = [
    "/images/moment1.jpeg",
    "/images/moment2.jpeg",
    "/images/moment3.jpeg",
  ];

  const handleOpenEnvelope = () => {
    if (stage !== "envelope") return;
    setStage("pulling");
  };

  const handleManualOpen = () => {
    setStage("opened");
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "قصر السعادة - غزة، تقاطع شارع الجلاء مع شارع الثورة"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tabContent = [
    "تشريفكم الكريم يضفي على اللقاء أسمى معاني الفرح والسرور.",
    "إلى من تزهو بوجودهم المناسبات وتطيب بلقياهم اللحظات.",
    "أهلاً ومرحباً بمن لبى الدعوة وأضفى على الليلة بهاءها.",
  ];

  return (
    <main
      className="min-h-screen bg-[#0A0103] flex items-center justify-center p-0 sm:p-4 font-['Cairo',serif] text-[#F9F6F0]"
      dir="ltr"
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Great+Vibes&display=swap");
        .font-cairo {
          font-family: "Cairo", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-vibes {
          font-family: "Great Vibes", cursive;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="w-full max-w-[440px] h-screen sm:h-[960px] bg-[#1A0307] shadow-[0_30px_100px_rgba(0,0,0,0.95)] relative overflow-hidden flex flex-col sm:rounded-[45px] border-[8px] border-[#0E0103]">
        <AnimatePresence mode="wait">
          {stage !== "opened" ? (
            <motion.div
              key="envelope-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 1.05,
                filter: "blur(15px)",
                transition: { duration: 2.0 },
              }}
              className="absolute inset-0 bg-gradient-to-b from-[#380711] via-[#220308] to-[#100103] z-50 flex items-center justify-center select-none overflow-hidden p-4"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:30px_30px]"></div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full max-w-[380px] h-[660px] bg-gradient-to-b from-[#4A0916] via-[#2B040A] to-[#140103] shadow-[0_40px_90px_rgba(0,0,0,0.9)] border-2 border-[#D4AF37]/50 rounded-2xl overflow-hidden flex flex-col justify-between my-auto"
              >
                <div className="absolute inset-4 border border-[#D4AF37]/30 rounded-xl pointer-events-none z-30"></div>

                <motion.div
                  initial={{ y: 180, opacity: 0 }}
                  animate={
                    stage === "pulling"
                      ? { y: -5, opacity: 1 }
                      : { y: 180, opacity: 0 }
                  }
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  className="absolute inset-x-5 top-8 bottom-8 bg-[#FFFDF9] text-[#220308] rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.6)] p-5 flex flex-col items-center justify-between text-center z-30 border-2 border-[#FBE8C9]"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#801326] font-cairo font-black">
                      دعوة خطوبة مباركة
                    </span>
                    <div className="my-2 space-y-1.5" dir="rtl">
                      <p className="text-base text-[#A47825] font-black font-playfair">
                        آل أبو الخير
                      </p>
                      <p className="text-sm text-stone-600 font-bold">
                        {" "}
                        السيد معين أبو الخير{" "}
                      </p>
                      <p className="text-base font-black text-[#220308] tracking-wide">
                        م. إبراهيم معين أبو الخير
                      </p>
                      <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto my-1.5"></div>
                      <p className="text-sm text-stone-600 font-bold">
                        {" "}
                        المرحوم خيري أبو الخير{" "}
                      </p>
                      <p className="text-base font-black text-[#220308] tracking-wide">
                        م. أمل خيري أبو الخير
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-[#FAF3EC] border border-[#D4AF37]/50 py-2 px-3 rounded-xl shadow-sm">
                    <span className="block text-[9px] uppercase tracking-widest text-[#801326] font-bold">
                      موعد الإشهار
                    </span>
                    <span className="block text-xs font-black text-[#220308] tracking-wider">
                      الثلاثاء · 6 أكتوبر 2026
                    </span>
                  </div>

                  <div className="space-y-2.5 w-full">
                    <p
                      className="text-[11px] text-stone-700 font-cairo font-bold leading-relaxed"
                      dir="rtl"
                    >
                      نتشرف بحضوركم حفل عقد قران لنشارك معاً أجمل اللحظات
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleManualOpen}
                      className="w-full py-3 bg-gradient-to-r from-[#801326] to-[#560B1A] hover:from-[#6B0B1F] hover:to-[#4A0916] text-[#FBE8C9] font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition cursor-pointer border border-[#D4AF37]/40"
                    >
                      <span className="tracking-wide">دخول للدعوة</span>
                      <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={
                    stage === "pulling"
                      ? { rotateX: -180, y: -260, opacity: 0.1 }
                      : { rotateX: 0 }
                  }
                  transition={{ duration: 1.4 }}
                  style={{ transformOrigin: "top" }}
                  className="absolute top-0 inset-x-0 h-[260px] bg-gradient-to-b from-[#6B0B1F] via-[#4A0916] to-[#2B040A] [clip-path:polygon(0_0%,100%_0%,50%_100%)] z-40 shadow-xl border-b-2 border-[#D4AF37]/70"
                ></motion.div>

                {stage === "envelope" && (
                  <motion.div
                    onClick={handleOpenEnvelope}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.06, 1], opacity: 1 }}
                    transition={{
                      scale: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 m-auto w-36 h-36 bg-gradient-to-br from-[#FBE8C9] via-[#D4AF37] to-[#A47825] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.8)] border-[5px] border-[#FFFDF9] cursor-pointer z-50"
                  >
                    <div className="w-[120px] h-[120px] rounded-full border border-[#220308]/20 flex flex-col items-center justify-center bg-[#FAF3EC] shadow-inner">
                      <span className="text-[#560B1A] font-vibes text-3xl font-bold mt-1">
                        A & I
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#801326] font-cairo font-extrabold mt-1">
                        Click to open
                      </span>
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
              transition={{ duration: 1.5 }}
              className="flex-1 overflow-y-auto scrollbar-hide bg-[#0A0103] relative text-[#F9F6F0] pb-28"
            >
              {/* Hero Header */}
              <div
                className="relative w-full h-[720px] overflow-hidden flex flex-col justify-end text-center p-6 bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: `url('${heroImage}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0103] via-[#0A0103]/50 to-transparent"></div>

                <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                  <motion.div
                    animate={{
                      x: ["-10%", "110%"],
                      y: ["10%", "25%", "15%"],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute text-white text-2xl top-12"
                  >
                    🕊️
                  </motion.div>
                  <motion.div
                    animate={{
                      x: ["110%", "-10%"],
                      y: ["35%", "20%"],
                      scale: [1.2, 1.4, 1.2],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    }}
                    className="absolute text-white/90 text-3xl top-28"
                  >
                    🕊️
                  </motion.div>
                  <motion.div
                    animate={{
                      x: ["-5%", "105%"],
                      y: ["25%", "40%"],
                      scale: [0.9, 1.2],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 3,
                    }}
                    className="absolute text-white/95 text-2xl top-44"
                  >
                    🕊️
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -70, 0],
                      x: [0, 35, -20, 0],
                      rotate: [0, 20, -20, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-20 right-6 w-9 h-9 text-[#D4AF37] z-20 drop-shadow-md"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-1.5 2-4 4-6 4-2 0-3-1-3-2.5C3 3 5 2 7 2c2.5 0 4.5 1 5 1zm0 0c1.5 2 4 4 6 4 2 0 3-1 3-2.5C21 3 19 2 17 2c-2.5 0-4.5 1-5 1zm0 5c-2 3-5 6-8 7-2 1-3 0-3-1 0-1.5 1.5-3 3-4 2-1 6-1 8-2zm0 0c2 3 5 6 8 7 2 1 3 0 3-1 0-1.5-1.5-3-3-4-2-1-6-1-8-2zm-2 9c0 2-1 4-3 5-1 .5-2 0-2-1 0-1 1-2 2-3 1-.5 2-.5 3-.7zm4 0c0 2 1 4 3 5 1 .5 2 0 2-1 0-1-1-2-2-3-1-.5-2-.5-3-.7z" />
                    </svg>
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, -60, 0],
                      x: [0, -30, 20, 0],
                      rotate: [0, -20, 20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute top-48 left-8 w-8 h-8 text-[#EED299] z-20 drop-shadow-md"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-1.5 2-4 4-6 4-2 0-3-1-3-2.5C3 3 5 2 7 2c2.5 0 4.5 1 5 1zm0 0c1.5 2 4 4 6 4 2 0 3-1 3-2.5C21 3 19 2 17 2c-2.5 0-4.5 1-5 1zm0 5c-2 3-5 6-8 7-2 1-3 0-3-1 0-1.5 1.5-3 3-4 2-1 6-1 8-2zm0 0c2 3 5 6 8 7 2 1 3 0 3-1 0-1.5-1.5-3-3-4-2-1-6-1-8-2zm-2 9c0 2-1 4-3 5-1 .5-2 0-2-1 0-1 1-2 2-3 1-.5 2-.5 3-.7zm4 0c0 2 1 4 3 5 1 .5 2 0 2-1 0-1-1-2-2-3-1-.5-2-.5-3-.7z" />
                    </svg>
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, -50, 0],
                      x: [0, 20, 30, 0],
                      rotate: [0, 25, -25, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute top-72 right-16 w-7 h-7 text-[#D4AF37] z-20 drop-shadow-md"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-1.5 2-4 4-6 4-2 0-3-1-3-2.5C3 3 5 2 7 2c2.5 0 4.5 1 5 1zm0 0c1.5 2 4 4 6 4 2 0 3-1 3-2.5C21 3 19 2 17 2c-2.5 0-4.5 1-5 1zm0 5c-2 3-5 6-8 7-2 1-3 0-3-1 0-1.5 1.5-3 3-4 2-1 6-1 8-2zm0 0c2 3 5 6 8 7 2 1 3 0 3-1 0-1.5-1.5-3-3-4-2-1-6-1-8-2zm-2 9c0 2-1 4-3 5-1 .5-2 0-2-1 0-1 1-2 2-3 1-.5 2-.5 3-.7zm4 0c0 2 1 4 3 5 1 .5 2 0 2-1 0-1-1-2-2-3-1-.5-2-.5-3-.7z" />
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="relative z-25 w-full space-y-3 pb-8 text-center"
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-cairo font-extrabold flex items-center justify-center gap-2 drop-shadow-md">
                    <Sparkles size={14} /> حفل عقد قران · 06.10.2026{" "}
                    <Sparkles size={14} />
                  </span>

                  <div
                    className="bg-[#0A0103]/75 backdrop-blur-md p-5 rounded-3xl border border-[#D4AF37]/50 shadow-2xl max-w-sm mx-auto space-y-2.5"
                    dir="rtl"
                  >
                    <p className="text-base text-[#EED299] font-bold">
                      آل أبو الخير
                    </p>
                    <p className="text-base text-stone-300 font-semibold">
                      {" "}
                      السيد معين أبو الخير{" "}
                    </p>
                    <p className="text-lg font-bold text-white tracking-wide">
                      م. إبراهيم معين أبو الخير
                    </p>
                    <div className="w-20 h-[1px] bg-[#D4AF37] mx-auto my-1.5"></div>
                    <p className="text-base text-stone-300 font-semibold">
                      {" "}
                      المرحوم خيري أبو الخير{" "}
                    </p>
                    <p className="text-lg font-bold text-white tracking-wide">
                      م. أمل خيري أبو الخير
                    </p>
                  </div>

                  <p className="text-xs text-[#EED299] tracking-[0.2em] font-cairo font-semibold pt-1">
                    ننتظر لقاءكم بكل الحب والسرور
                  </p>
                </motion.div>
              </div>

              {/* Wave 1 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mb-1">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="relative block w-full h-14 text-[#FAF7F2] fill-current"
                >
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="px-6 py-12 text-center space-y-4 bg-[#FAF7F2] text-[#220308] z-10 shadow-lg"
              >
                <Heart className="mx-auto text-[#D4AF37]" size={34} />
                <h3 className="text-3xl font-vibes text-[#801326] font-bold">
                  في مطلع الحكاية
                </h3>
                <p
                  className="text-xs text-stone-700 leading-relaxed font-cairo font-bold max-w-sm mx-auto"
                  dir="rtl"
                >
                  حين تتقاطع دروب القلوب وتتزين الأيام بالفرح، يسعدنا حضوركم
                  لنشارك معاً بداية قصة حبنا الأبدية.
                </p>
              </motion.div>

              {/* Wave 2 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mt-1 rotate-180">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="relative block w-full h-14 text-[#FAF7F2] fill-current"
                >
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="px-6 py-12 text-center space-y-6 bg-[#220308]"
              >
                <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
                  <Clock size={18} />
                  <h3 className="text-xs font-cairo tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                    العد التنازلي لموعد الإشهار (6 أكتوبر 2026)
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-2.5 max-w-sm mx-auto">
                  <div className="bg-[#33050C] border border-[#D4AF37]/60 p-4 rounded-2xl shadow-2xl text-[#F9F6F0]">
                    <span className="block font-bold text-2xl">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] uppercase text-[#EED299] font-cairo font-bold">
                      أيام
                    </span>
                  </div>
                  <div className="bg-[#33050C] border border-[#D4AF37]/60 p-4 rounded-2xl shadow-2xl text-[#F9F6F0]">
                    <span className="block font-bold text-2xl">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[10px] uppercase text-[#EED299] font-cairo font-bold">
                      ساعات
                    </span>
                  </div>
                  <div className="bg-[#33050C] border border-[#D4AF37]/60 p-4 rounded-2xl shadow-2xl text-[#F9F6F0]">
                    <span className="block font-bold text-2xl">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[10px] uppercase text-[#EED299] font-cairo font-bold">
                      دقائق
                    </span>
                  </div>
                  <div className="bg-[#33050C] border border-[#D4AF37]/60 p-4 rounded-2xl shadow-2xl text-[#F9F6F0]">
                    <span className="block font-bold text-2xl">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[10px] uppercase text-[#EED299] font-cairo font-bold">
                      ثوانٍ
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Wave 3 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mb-1">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="relative block w-full h-14 text-[#FAF7F2] fill-current"
                >
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Milestones */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-[#FAF7F2] text-[#220308] px-6 py-10 text-center space-y-5 shadow-md"
              >
                <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-black text-[#801326]">
                  تشريفكم تمام الفرح
                </h3>
                <div className="flex justify-center gap-2">
                  {["استهلال اللقاء", "تشريف الحضور", "تمام السعادة"].map(
                    (tab, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-4 py-2 rounded-full text-xs font-cairo font-bold transition shadow-sm ${
                          activeTab === idx
                            ? "bg-[#801326] text-[#FAF7F2]"
                            : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-xs text-stone-800 leading-relaxed font-cairo font-bold max-w-xs mx-auto min-h-[50px] flex items-center justify-center"
                  >
                    {tabContent[activeTab]}
                  </motion.div>
                </AnimatePresence>
                <div className="text-[#D4AF37] text-xl">✦ ✦ ✦</div>
              </motion.div>

              {/* Wave 4 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mt-1 rotate-180">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="relative block w-full h-14 text-[#FAF7F2] fill-current"
                >
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Gallery */}
              <div className="px-6 py-12 space-y-5 bg-[#220308]">
                <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
                  <Sparkles size={16} />
                  <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-bold text-[#D4AF37]">
                    Moments & Memories
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {galleryImgs.map((imgUrl, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      whileHover={{ scale: 1.05 }}
                      className="h-36 rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl relative group flex flex-col justify-end p-2 text-center"
                    >
                      <img
                        src={imgUrl}
                        alt={`Memory ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#220308]/90 via-[#220308]/40 to-transparent"></div>
                      <div className="relative z-10 space-y-0.5">
                        <span className="block text-[11px] font-bold text-[#D4AF37] font-playfair">
                          Moment {index + 1}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Wave 5 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mb-1">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="relative block w-full h-14 text-[#FAF7F2] fill-current"
                >
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Venue */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="px-6 py-14 space-y-5 bg-[#FAF7F2] text-[#220308] shadow-lg"
              >
                <h3 className="text-sm font-cairo tracking-[0.3em] uppercase font-black text-[#801326] text-center">
                  VENUE LOCATION
                </h3>

                <div className="bg-gradient-to-br from-[#33050C] to-[#1E0207] text-[#F9F6F0] border-2 border-[#D4AF37] p-7 rounded-3xl shadow-2xl space-y-5 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0 shadow-inner text-3xl">
                      <MapPin size={30} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[#FFFDF9] font-playfair font-bold text-3xl tracking-wide">
                        قصر السعادة
                      </h4>
                      <p
                        className="text-sm text-[#EED299] font-cairo font-bold leading-relaxed"
                        dir="rtl"
                      >
                        غزة - تقاطع شارع الجلاء مع شارع الثورة
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={copyAddress}
                      className="w-full py-4 bg-[#220308] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition shadow-xl uppercase tracking-widest"
                    >
                      {copied ? (
                        <Check size={16} className="text-emerald-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                      {copied
                        ? "Address Copied Successfully!"
                        : "Copy Venue Address"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Wave 6 */}
              <div className="relative w-full overflow-hidden leading-none z-25 -mt-1 rotate-180">
                <svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="relative block w-full h-14 text-[#FAF7F2] fill-current"
                >
                  <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
                </svg>
              </div>

              {/* Final Note */}
              <div className="bg-[#220308] px-6 py-14 text-center space-y-4">
                <Star className="mx-auto text-[#D4AF37]" size={30} />
                <h3 className="text-xs font-cairo tracking-[0.3em] uppercase font-bold text-[#D4AF37]">
                  نتشرف بحضوركم
                </h3>
                <p
                  className="text-xs text-[#EED299]/90 leading-relaxed font-cairo font-bold max-w-xs mx-auto"
                  dir="rtl"
                >
                  حضوركم يزهر ليلتنا ويزيدها بهجة وسروراً.
                </p>
                <div
                  className="pt-3 text-base font-playfair font-bold text-[#D4AF37]"
                  dir="rtl"
                >
                  م. إبراهيم معين أبو الخير & م. أمل خيري أبو الخير
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#140103] px-6 py-8 text-center border-t border-[#D4AF37]/20">
                <div className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-cairo font-bold">
                  ROYAL ENGAGEMENT · GAZA, PALESTINE · 2026
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
