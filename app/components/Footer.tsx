export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo LBBA.png" alt="LBBA Logo" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Đảng ủy - HĐND - UBND - UB MTTQ Việt Nam<br />
              Phường Long Bình, TP. Hồ Chí Minh.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-green-500">Ban Tiếp Đón</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500 shrink-0">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <div>
                  <p className="font-bold">Ms. Phạm Thị Yến Nhi</p>
                  <p className="text-slate-400">0912 116 668</p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500 shrink-0">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <div>
                  <p className="font-bold">Ms. Trần Thị Thuý Hiền</p>
                  <p className="text-slate-400">0978 727 438</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-green-500">Địa Chỉ & Bản Đồ</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500 shrink-0 mt-0.5">
                  <path d="M10 18v-7"></path>
                  <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path>
                  <path d="M14 18v-7"></path>
                  <path d="M18 18v-7"></path>
                  <path d="M3 22h18"></path>
                  <path d="M6 18v-7"></path>
                </svg>
                <div>
                  <span className="font-bold block text-white">Đại Hội: UBND P. Long Bình</span>
                  <span>325 Nguyễn Văn Tăng, P. Long Bình, TP. Thủ Đức</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5">
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
                <div>
                  <span className="font-bold block text-white">Gala: Hoa Viên Cúc Linh</span>
                  <span>41 Đường Số 16, P. Long Bình, TP. Thủ Đức</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-600">
          <p>© 2025 Hội Doanh Nghiệp Phường Long Bình. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

