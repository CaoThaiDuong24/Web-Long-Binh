'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const targetDate = new Date('2025-11-29T07:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'sectors', 'agenda', 'news', 'contact', 'register'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <Header activeSection={activeSection} isHomePage={true} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mt-10 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-400/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-bold text-green-100 tracking-wide uppercase">
              Sự kiện Chính trị - Kinh tế trọng điểm
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-8 drop-shadow-2xl tracking-tight" style={{ lineHeight: '1.3' }}>
            ĐẠI HỘI THÀNH LẬP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              HỘI DOANH NGHIỆP
            </span>
            <br />
            PHƯỜNG LONG BÌNH
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-slate-200 font-bold mb-10 max-w-3xl mx-auto uppercase tracking-wide">
            &quot;Đoàn kết – Hợp tác – Hiệu quả – Bền vững&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              <span className="font-bold">Thứ 7, 29.11.2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              <span className="font-bold">07:00 Sáng</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              <span className="font-bold">UBND P. Long Bình</span>
            </div>
          </div>
          <div className="flex gap-3 md:gap-6 justify-center mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-2xl">
                <span className="text-2xl md:text-4xl font-black text-white">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] md:text-xs text-green-400 font-bold mt-2 uppercase tracking-widest">Ngày</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-2xl">
                <span className="text-2xl md:text-4xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] md:text-xs text-green-400 font-bold mt-2 uppercase tracking-widest">Giờ</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-2xl">
                <span className="text-2xl md:text-4xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] md:text-xs text-green-400 font-bold mt-2 uppercase tracking-widest">Phút</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-2xl">
                <span className="text-2xl md:text-4xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="text-[10px] md:text-xs text-green-400 font-bold mt-2 uppercase tracking-widest">Giây</span>
            </div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center pb-16">
            <a href="#agenda" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2 transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-label="Xem chương trình đại hội">
              Xem Chương Trình
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-full h-full bg-slate-100 rounded-3xl -z-10 group-hover:bg-green-50 transition-colors duration-500"></div>
              <img src="/images/icd-longbinh-1.jpg" alt="Cảng ICD Long Bình" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) sharpen(1)'}} />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path>
                      <path d="M10 21.9V14L2.1 9.1"></path>
                      <path d="m10 14 11.9-6.9"></path>
                      <path d="M14 19.8v-8.1"></path>
                      <path d="M18 17.5V9.4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Cảng ICD Long Bình</p>
                    <p className="text-sm text-slate-500">Trung tâm Logistics lớn nhất phía Đông TP.HCM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-green-600 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-8 h-1 bg-green-600 rounded-full"></span> Về Thế Chiến Lược
              </h4>
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Cửa Ngõ Giao Thương <br /> Huyết Mạch</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed text-justify">
                Phường Long Bình không chỉ là nơi đặt <strong>Depot Metro Bến Thành - Suối Tiên</strong> mà còn sở hữu hệ thống cảng cạn ICD sầm uất. Sự kết hợp giữa hạ tầng giao thông hiện đại và quỹ đất công nghiệp rộng lớn tạo nên vị thế độc tôn cho Long Bình trong bản đồ kinh tế TP. Thủ Đức.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-2xl text-green-600 mb-1">20+ ha</h4>
                  <p className="font-bold text-slate-800">Diện tích Depot Metro</p>
                  <p className="text-xs text-slate-500">Trung tâm vận hành tàu điện hiện đại</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-2xl text-blue-600 mb-1">500+</h4>
                  <p className="font-bold text-slate-800">Doanh nghiệp</p>
                  <p className="text-xs text-slate-500">Đa dạng lĩnh vực: Logistics, SX, DV</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg> Thư Viện Hình Ảnh
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img src="/images/redsunic.com_image20.jpg" alt="Cảng ICD Long Bình" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold">Smart Logistics</p>
                  <p className="text-green-300 text-xs">Kho vận thông minh</p>
                </div>
              </div>
              <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img src="/images/redsunic.com_image5.jpg" alt="Cổng ICD Tân Cảng Long Bình" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold">Đô Thị Xanh</p>
                  <p className="text-green-300 text-xs">Khu đô thị Grand Park</p>
                </div>
              </div>
              <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img src="/images/con_tan_cang.jpg" alt="Nhà kho ICD Long Bình" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold">Kết Nối Metro</p>
                  <p className="text-green-300 text-xs">Depot Long Bình</p>
                </div>
              </div>
              <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img src="/images/Duong_di_1.jpg" alt="Container yard ICD Long Bình" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold">Cảng ICD</p>
                  <p className="text-green-300 text-xs">Cửa ngõ xuất nhập khẩu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Lĩnh Vực Trọng Tâm</h2>
            <p className="text-slate-500">Hội Doanh Nghiệp P. Long Bình tập trung thúc đẩy 3 trụ cột kinh tế chính.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Logistics & Chuỗi Cung Ứng</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Tối ưu hóa vận tải đa phương thức (Đường bộ - Đường thủy - Đường sắt) tại cụm cảng ICD, kết nối vùng kinh tế trọng điểm phía Nam.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Kinh Tế Xanh (ESG)</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Khuyến khích doanh nghiệp áp dụng năng lượng mặt trời mái nhà, giảm phát thải Carbon và xây dựng môi trường làm việc bền vững.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Chuyển Đổi Số & Đổi Mới</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Hỗ trợ doanh nghiệp SME tiếp cận công nghệ AI, phần mềm quản lý kho (WMS) và thương mại điện tử để bứt phá.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Chương Trình Chi Tiết</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4">Lịch Trình Đại Hội 29.11</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 relative">
            <div className="hidden md:block absolute left-28 top-4 bottom-4 w-0.5 bg-slate-200"></div>
            
            <div className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group">
              <div className="md:w-48 flex-shrink-0 flex md:justify-end items-center relative z-10 md:pl-0 pt-1">
                <div className="font-bold py-2 px-4 rounded-lg border-2 text-sm md:text-base w-fit bg-white border-green-600 text-green-700 shadow-sm">07:30 - 08:00</div>
                <div className="hidden md:block absolute right-[-25px] w-4 h-4 rounded-full border-4 bg-white border-slate-400 group-hover:border-green-600 transition-colors"></div>
              </div>
              <div className="flex-1 p-6 md:p-8 rounded-2xl shadow-sm border transition-all bg-white border-slate-100 hover:shadow-lg hover:border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">ĐÓN TIẾP ĐẠI BIỂU</h3>
                </div>
                <p className="text-slate-500 font-medium mb-4 italic">Check-in, nhận tài liệu & ổn định tổ chức.</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group">
              <div className="md:w-48 flex-shrink-0 flex md:justify-end items-center relative z-10 md:pl-0 pt-1">
                <div className="font-bold py-2 px-4 rounded-lg border-2 text-sm md:text-base w-fit bg-white border-green-600 text-green-700 shadow-sm">08:00 - 10:00</div>
                <div className="hidden md:block absolute right-[-25px] w-4 h-4 rounded-full border-4 bg-white border-slate-400 group-hover:border-green-600 transition-colors"></div>
              </div>
              <div className="flex-1 p-6 md:p-8 rounded-2xl shadow-sm border transition-all bg-white border-slate-100 hover:shadow-lg hover:border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">ĐẠI HỘI PHIÊN TRÙ BỊ</h3>
                </div>
                <p className="text-slate-500 font-medium mb-4 italic">Các nội dung kiện toàn tổ chức & văn kiện.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Chào cờ, Tuyên bố lý do, Giới thiệu đại biểu.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Hiệp thương nhân sự Đoàn Chủ tịch, Đoàn Thư ký.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Phát biểu khai mạc & Công bố Quyết định thành lập Hội.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Thông qua Chương trình, Quy chế & Điều lệ Hội.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Báo cáo quá trình vận động & Phương hướng nhiệm kỳ 2025-2030.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Hiệp thương nhân sự Ban Chấp hành & Ban Kiểm tra.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group">
              <div className="md:w-48 flex-shrink-0 flex md:justify-end items-center relative z-10 md:pl-0 pt-1">
                <div className="font-bold py-2 px-4 rounded-lg border-2 text-sm md:text-base w-fit bg-white border-green-600 text-green-700 shadow-sm">10:00 - 10:15</div>
                <div className="hidden md:block absolute right-[-25px] w-4 h-4 rounded-full border-4 bg-white border-slate-400 group-hover:border-green-600 transition-colors"></div>
              </div>
              <div className="flex-1 p-6 md:p-8 rounded-2xl shadow-sm border transition-all bg-white border-slate-100 hover:shadow-lg hover:border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">NGHỈ GIẢI LAO</h3>
                </div>
                <p className="text-slate-500 font-medium mb-4 italic">Đón khách mời phiên chính thức.</p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group">
              <div className="md:w-48 flex-shrink-0 flex md:justify-end items-center relative z-10 md:pl-0 pt-1">
                <div className="font-bold py-2 px-4 rounded-lg border-2 text-sm md:text-base w-fit bg-white border-green-600 text-green-700 shadow-sm">10:15 - 11:00</div>
                <div className="hidden md:block absolute right-[-25px] w-4 h-4 rounded-full border-4 bg-white border-slate-400 group-hover:border-green-600 transition-colors"></div>
              </div>
              <div className="flex-1 p-6 md:p-8 rounded-2xl shadow-sm border transition-all bg-white border-slate-100 hover:shadow-lg hover:border-green-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">ĐẠI HỘI PHIÊN CHÍNH THỨC</h3>
                </div>
                <p className="text-slate-500 font-medium mb-4 italic">Ra mắt BCH & Tiếp thu ý kiến chỉ đạo.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Báo cáo kết quả phiên thứ nhất & Ra mắt BCH nhiệm kỳ I.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Lãnh đạo Phường & TP.HCM phát biểu chúc mừng.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Thông qua Nghị quyết Đại hội.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Diễn văn bế mạc & Chào cờ.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group">
              <div className="md:w-48 flex-shrink-0 flex md:justify-end items-center relative z-10 md:pl-0 pt-1">
                <div className="font-bold py-2 px-4 rounded-lg border-2 text-sm md:text-base w-fit bg-yellow-100 border-yellow-400 text-yellow-700 shadow-sm">11:15 - 13:30</div>
                <div className="hidden md:block absolute right-[-25px] w-4 h-4 rounded-full border-4 bg-white border-yellow-500 transition-colors"></div>
              </div>
              <div className="flex-1 p-6 md:p-8 rounded-2xl shadow-sm border transition-all bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-yellow-800 transition-colors">GALA CHÚC MỪNG</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 w-6 h-6 animate-bounce">
                    <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                    <path d="M4 3h.01"></path>
                    <path d="M22 8h.01"></path>
                    <path d="M15 2h.01"></path>
                    <path d="M22 20h.01"></path>
                    <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
                    <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path>
                    <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path>
                    <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
                  </svg>
                </div>
                <p className="text-slate-500 font-medium mb-4 italic">Tại Hoa Viên Cúc Linh (41 Đường Số 16, P. Long Bình).</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Tiệc thân mật chúc mừng thành công Đại hội.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>Tri ân Nhà tài trợ & Trao giấy Chứng nhận Hội viên.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900">Tin Tức & Sự Kiện</h2>
              <p className="text-slate-500 mt-2">Cập nhật hoạt động mới nhất của cộng đồng doanh nghiệp.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-green-600 font-bold hover:text-green-700">
              Xem tất cả 
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/news/dai-hoi-hoi-lbba" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-slate-100 block">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/imagenew/z7277788004234_bdc7dcb6d1f29e14f45ca2deb899d9d5.jpg" alt="Đại Hội Hội LBBA" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Sự kiện</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg> 29/11/2025
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">Đại hội Hội Doanh nghiệp phường Long Bình lần thứ I, nhiệm kỳ 2025 – 2030</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">Sự kiện quan trọng của Hội Doanh Nghiệp Phường Long Bình với sự tham gia đông đảo của các doanh nghiệp trên địa bàn.</p>
                <span className="flex items-center gap-1 text-xs font-bold text-green-600 uppercase">
                  Đọc tiếp 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
            </a>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-slate-100">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/IMG_7701.jpg" alt="Doanh nghiệp Long Bình chung tay vì an sinh xã hội" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Hoạt động xã hội</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg> 20/11/2025
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">Doanh nghiệp Long Bình chung tay vì an sinh xã hội</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">Trao tặng 200 phần quà cho các hộ gia đình khó khăn trên địa bàn phường nhân dịp Tết đến xuân về.</p>
                <span className="flex items-center gap-1 text-xs font-bold text-green-600 uppercase">
                  Đọc tiếp 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-slate-100">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/icd-longbinh-7.jpg" alt="Hội thảo: Ứng dụng AI trong quản lý Logistics kho bãi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Công nghệ</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg> 15/11/2025
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">Hội thảo: Ứng dụng AI trong quản lý Logistics kho bãi</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">Các chuyên gia chia sẻ giải pháp tối ưu hóa vận hành cảng ICD Long Bình bằng công nghệ tự động hóa.</p>
                <span className="flex items-center gap-1 text-xs font-bold text-green-600 uppercase">
                  Đọc tiếp 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
            </div>
            {/* <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-slate-100">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/THANH_VIEN_DU_AN_ISO.jpg" alt="Gặp gỡ Cafe Doanh Nhân: Kết nối cung cầu cuối năm" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}} />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Kết nối</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg> 01/11/2025
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">Gặp gỡ Cafe Doanh Nhân: Kết nối cung cầu cuối năm</h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">Cơ hội để các doanh nghiệp thành viên giới thiệu sản phẩm và tìm kiếm đối tác chiến lược.</p>
                <span className="flex items-center gap-1 text-xs font-bold text-green-600 uppercase">
                  Đọc tiếp 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* <div className="mb-20 text-center">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">Đối tác đồng hành</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl md:text-2xl font-black text-white hover:text-green-400 cursor-default">Vietcombank</div>
              <div className="text-xl md:text-2xl font-black text-white hover:text-green-400 cursor-default">Agribank</div>
              <div className="text-xl md:text-2xl font-black text-white hover:text-green-400 cursor-default">Vinhomes</div>
              <div className="text-xl md:text-2xl font-black text-white hover:text-green-400 cursor-default">Suoi Tien Group</div>
              <div className="text-xl md:text-2xl font-black text-white hover:text-green-400 cursor-default">Tan Cang Logistics</div>
            </div>
          </div> */}
          <div className="grid md:grid-cols-2 gap-16 items-center bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Đăng Ký Tham Dự Đại Hội</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Hãy trở thành một phần của sự kiện lịch sử này. Cùng nhau kiến tạo tương lai cho cộng đồng doanh nghiệp Long Bình.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span>Mở rộng mạng lưới quan hệ</span>
                </div>
                <div className="flex items-center gap-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span>Cập nhật thông tin quy hoạch mới</span>
                </div>
                <div className="flex items-center gap-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span>Cơ hội hợp tác đầu tư</span>
                </div>
              </div>
            </div>
            <form className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
              <div className="space-y-5 text-slate-800">
                <div>
                  <label htmlFor="fullname" className="text-xs font-bold text-slate-500 uppercase ml-1 block mb-2">Họ và tên <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="fullname" 
                    name="fullname"
                    required
                    aria-required="true"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" 
                    placeholder="Nguyễn Văn A" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase ml-1 block mb-2">Số điện thoại <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    aria-required="true"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" 
                    placeholder="0909 xxx xxx" 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-xs font-bold text-slate-500 uppercase ml-1 block mb-2">Doanh nghiệp</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" 
                    placeholder="Tên công ty..." 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6"
                  aria-label="Xác nhận đăng ký tham dự đại hội"
                >
                  Xác Nhận Đăng Ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
