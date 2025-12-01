'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DaiHoiHoiLBBA() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Danh sách tất cả hình ảnh từ thư mục imagenew
  const images = [
    '/images/imagenew/z7277788004234_bdc7dcb6d1f29e14f45ca2deb899d9d5.jpg',
    '/images/imagenew/z7277788004235_d6840d384c23a341019d0bd19faf57a6.jpg',
    '/images/imagenew/z7277788004236_578ff641e1f0070f8f36cd69aafe3697.jpg',
    '/images/imagenew/z7277788004237_e3598d0c4bd99261626e5f6f2ce01358.jpg',
    '/images/imagenew/z7277788004238_6df032c7499a8f4e594c31bc5d526e35.jpg',
    '/images/imagenew/z7277788004239_b40774dceb92f4e493f29dd552468a9c.jpg',
    '/images/imagenew/z7277788004240_1d59f6bda462d96aa03c95600b83a63c.jpg',
    '/images/imagenew/z7277788004241_a076e01bd02ad1de5315eeb86e19e292.jpg',
    '/images/imagenew/z7277788004242_de29c2d365bfeb7529d5c875ccf760ac.jpg',
    '/images/imagenew/z7277788004243_b696bdd2a0dbb6a5cb674354fd97bb64.jpg',
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <Header activeSection="news" />

      {/* Article Content */}
      <article className="pt-28 pb-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
          {/* Breadcrumb */}
          <nav className="mb-10 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-green-600 transition-colors font-medium">Trang chủ</Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <Link href="/#news" className="hover:text-green-600 transition-colors font-medium">Tin tức</Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="text-slate-800 font-semibold">Đại Hội Hội LBBA</span>
            </div>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="font-medium">29/11/2025</span>
              </div>
              <div className="h-4 w-px bg-slate-300"></div>
              <span className="uppercase tracking-wide font-semibold text-green-600">Thông cáo báo chí</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.2] tracking-tight">
              ĐẠI HỘI HỘI DOANH NGHIỆP PHƯỜNG LONG BÌNH<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                LẦN THỨ I, NHIỆM KỲ 2025–2030
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
              <div className="h-1.5 w-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            </div>
          </header>

          {/* Featured Image */}
          {images.length > 0 && (
            <div className="mb-12 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={images[0]} 
                  alt="Đại Hội Hội LBBA" 
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="bg-white p-10 md:p-14 lg:p-16 rounded-3xl shadow-xl border border-slate-100/50 backdrop-blur-sm">
              <p className="text-slate-700 text-xl leading-[1.9] mb-8 text-justify font-light">
                Đại hội Hội Doanh nghiệp phường Long Bình lần thứ I, nhiệm kỳ 2025 – 2030 diễn ra lúc <strong className="font-bold text-slate-900">08 giờ 00, Thứ Bảy, ngày 29 tháng 11 năm 2025</strong>, tại Ủy ban nhân dân phường Long Bình, TP. Hồ Chí Minh. Đây là sự kiện có ý nghĩa đặc biệt quan trọng, đánh dấu bước trưởng thành mới của cộng đồng doanh nghiệp địa phương, diễn ra sau khi Thành phố Hồ Chí Minh hoàn tất việc sắp xếp các đơn vị hành chính trên cơ sở Nghị quyết của Trung ương và của Ủy ban Thường vụ Quốc hội, tạo điều kiện thuận lợi để thành lập Hội Doanh nghiệp phường Long Bình – tổ chức đại diện, kết nối và thúc đẩy phát triển kinh tế – xã hội bền vững của địa phương.
              </p>
              
              <p className="text-slate-700 text-xl leading-[1.9] mb-8 text-justify font-light">
                Theo <strong className="font-bold text-slate-900">Quyết định số 2453/QĐ-UBND ngày 18/11/2025</strong>, Hội Doanh nghiệp phường Long Bình chính thức được thành lập với sứ mệnh trở thành tổ chức đại diện, cầu nối và động lực phát triển của đội ngũ doanh nghiệp – doanh nhân trên địa bàn. Sự ra đời của Hội góp phần cụ thể hóa vai trò của cộng đồng doanh nghiệp trong tiến trình xây dựng phường Long Bình trở thành khu vực phát triển năng động, hiện đại, gắn với tầm nhìn chiến lược về logistics, dịch vụ – thương mại và kinh tế số của Thành phố Hồ Chí Minh. Với khẩu hiệu hành động <strong className="font-bold text-green-700">&quot;Đoàn kết – Hợp tác – Hiệu quả – Bền vững&quot;</strong>, Hội khẳng định quyết tâm kiến tạo môi trường kinh doanh minh bạch, cởi mở và bền vững, đồng hành cùng chính quyền thực hiện thắng lợi Nghị quyết Đại hội Đảng bộ phường Long Bình lần thứ I, nhiệm kỳ 2025–2030.
              </p>

              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-l-4 border-green-600 p-8 rounded-2xl mb-8 shadow-sm">
                <h3 className="font-black text-slate-900 mb-4 text-2xl flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-600 rounded-full"></div>
                  Định hướng phát triển
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Hội xác định việc triển khai các mục tiêu nhiệm kỳ phải bám sát tinh thần các nghị quyết quan trọng của Trung ương, bao gồm:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia</li>
                  <li>Nghị quyết số 59-NQ/TW về hội nhập quốc tế trong tình hình mới</li>
                  <li>Nghị quyết số 66-NQ/TW về đổi mới công tác xây dựng và thi hành pháp luật đáp ứng yêu cầu phát triển đất nước trong kỷ nguyên mới</li>
                  <li>Nghị quyết số 68-NQ/TW ngày 04/5/2025 về phát triển kinh tế tư nhân</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-3">
                  Đây sẽ là kim chỉ nam xuyên suốt cho mọi hoạt động của Hội, bảo đảm định hướng phát triển phù hợp với xu thế thời đại và chiến lược quốc gia.
                </p>
              </div>

              <p className="text-slate-700 text-xl leading-[1.9] mb-8 text-justify font-light">
                Trong nhiệm kỳ mới, vai trò của Hội được xác định sẽ tiếp tục mở rộng và tăng cường, góp phần thu hút, phát triển số lượng doanh nghiệp hoạt động trên địa bàn. Hội từng bước khẳng định là lực lượng quan trọng trong việc đóng góp vào tổng hòa GDP của phường, thúc đẩy sự phát triển kinh tế – xã hội và gia tăng nội lực doanh nghiệp địa phương.
              </p>

              <p className="text-slate-700 text-xl leading-[1.9] mb-8 text-justify font-light">
                Trong nhiệm kỳ đầu, Hội ưu tiên củng cố nền tảng tổ chức, mở rộng mạng lưới hội viên, chuẩn hóa hoạt động sinh hoạt, xây dựng văn hóa doanh nghiệp văn minh và hình thành các câu lạc bộ chuyên đề như <strong className="font-bold text-slate-900">Doanh nghiệp trẻ</strong>, <strong className="font-bold text-slate-900">Logistics xanh</strong>, <strong className="font-bold text-slate-900">Chuyển đổi số</strong>. Hội định hướng xây dựng văn phòng làm việc chính thức, hoàn thiện hạ tầng số và phấn đấu toàn bộ hội viên đạt chuẩn <strong className="font-bold text-green-700">&quot;Doanh nghiệp văn minh 2026&quot;</strong>, góp phần nâng cao chất lượng doanh nghiệp trên địa bàn.
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl mb-8 border border-slate-200/50 shadow-sm">
                <h3 className="font-black text-slate-900 mb-6 text-2xl flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  Các hoạt động hỗ trợ doanh nghiệp
                </h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/50 hover:border-green-300 hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <span className="text-lg leading-relaxed pt-1">Tổ chức hội thảo, tọa đàm chuyên đề về logistics – công nghiệp – dịch vụ</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/50 hover:border-green-300 hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <span className="text-lg leading-relaxed pt-1">Chương trình xúc tiến thương mại, kết nối giao thương</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/50 hover:border-green-300 hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <span className="text-lg leading-relaxed pt-1">Xây dựng cổng thông tin số nhằm cung cấp dữ liệu thị trường, dự báo nhu cầu, kết nối chuỗi cung ứng và hỗ trợ doanh nghiệp chuyển đổi số</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/50 hover:border-green-300 hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <span className="text-lg leading-relaxed pt-1">Thúc đẩy ứng dụng công nghệ 4.0, logistics xanh, sản xuất – kinh doanh thân thiện môi trường</span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200/50 hover:border-green-300 hover:shadow-md transition-all">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <span className="text-lg leading-relaxed pt-1">Tổng hợp, kiến nghị tháo gỡ khó khăn cho doanh nghiệp liên quan đến thủ tục hành chính, quy hoạch và hạ tầng kinh tế – xã hội</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700 text-xl leading-[1.9] mb-8 text-justify font-light">
                Hội Doanh nghiệp phường Long Bình sẽ phối hợp chặt chẽ với chính quyền trong triển khai các chương trình phát triển kinh tế, bảo đảm an ninh trật tự, bảo vệ môi trường và phát triển thương mại – dịch vụ hiện đại. Hội tham gia góp ý đối với các dự án hạ tầng trọng điểm, đặc biệt là kết nối với <strong className="font-bold text-slate-900">Metro Bến Thành – Suối Tiên</strong>, <strong className="font-bold text-slate-900">Bến xe Miền Đông mới</strong> và các tuyến giao thông vùng. Bên cạnh đó, Hội trao tặng công trình bê tông hoá hai tuyến hẻm và vườn cây quà tặng cho các công viên trên địa bàn phường Long Bình, hỗ trợ các lớp học tình thương và vận động doanh nghiệp đồng hành phát triển mảng xanh, góp phần hiện thực hóa mục tiêu đô thị xanh – văn minh – hiện đại của phường Long Bình.
              </p>

              <p className="text-slate-700 text-xl leading-[1.9] mb-8 text-justify font-light">
                Với tinh thần trách nhiệm vì cộng đồng, Hội duy trì các chương trình an sinh như trao học bổng, chăm lo hộ nghèo – cận nghèo, hoạt động đền ơn đáp nghĩa, hiến máu nhân đạo, ủng hộ Quỹ Vì người nghèo, Quỹ Vì biển đảo quê hương – Vì tuyến đầu Tổ quốc. Hội cũng sẽ tổ chức các hoạt động văn hóa – thể thao, tạo không gian gắn kết doanh nghiệp với nhân dân địa phương; đồng thời biểu dương, tôn vinh các doanh nhân tiêu biểu nhằm lan tỏa giá trị tốt đẹp của đội ngũ doanh nhân Long Bình <strong className="font-bold text-green-700">&quot;Trí thức – Đạo đức – Văn minh – Trách nhiệm&quot;</strong>.
              </p>

              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-10 rounded-3xl border-2 border-green-200/50 mt-10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21v-8.5c0-1.25.75-2 2-2h4c1.25 0 2 .75 2 1.972V11c0 1.25-.75 2-2 2h-4"></path>
                    </svg>
                  </div>
                  <p className="text-slate-800 text-xl leading-[1.9] text-center font-light italic">
                    Đại hội Hội Doanh nghiệp phường Long Bình lần thứ I, nhiệm kỳ 2025–2030 là dấu mốc mở đầu cho chặng đường phát triển mới, thể hiện khát vọng đổi mới, bứt phá và phát triển bền vững của cộng đồng doanh nghiệp phường Long Bình. Đại hội trân trọng chào đón sự tham dự của Quý đại biểu, Quý doanh nghiệp và toàn thể hội viên, cùng chung tay xây dựng phường Long Bình ngày càng văn minh, hiện đại, giàu đẹp và trở thành điểm sáng phát triển của Thành phố Hồ Chí Minh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <section className="mb-16">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 flex items-center gap-3">
                <div className="w-1 h-10 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                <span>Hình Ảnh Sự Kiện</span>
              </h2>
              <p className="text-slate-500 text-lg ml-4">Khám phá những khoảnh khắc đáng nhớ từ Đại Hội</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={image} 
                    alt={`Hình ảnh ${index + 1} - Đại Hội Hội LBBA`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{imageRendering: 'crisp-edges', filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'}}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <p className="text-white font-bold text-base mb-1">Xem ảnh lớn</p>
                      <p className="text-white/80 text-sm">Ảnh {index + 1} / {images.length}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Back to News */}
          <div className="flex justify-center pt-8">
            <Link 
              href="/#news"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Quay lại Tin tức
            </Link>
          </div>
        </div>
      </article>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Đóng ảnh"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Hình ảnh lớn"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

