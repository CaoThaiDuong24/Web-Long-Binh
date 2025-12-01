'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  activeSection?: string;
  isHomePage?: boolean;
}

export default function Header({ activeSection: externalActiveSection, isHomePage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(externalActiveSection || 'home');

  useEffect(() => {
    if (isHomePage) {
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
    } else if (externalActiveSection) {
      setActiveSection(externalActiveSection);
    }
  }, [isHomePage, externalActiveSection]);

  const getLinkClass = (section: string) => {
    const baseClass = 'text-sm font-semibold hover:text-green-500 transition-colors focus:outline-none';
    const isActive = activeSection === section;
    return `${baseClass} ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-600'}`;
  };

  const getMobileLinkClass = (section: string) => {
    const baseClass = 'text-sm font-semibold hover:text-green-500 transition-colors py-2 px-4 rounded-lg hover:bg-slate-50';
    const isActive = activeSection === section;
    return `${baseClass} ${isActive ? 'text-green-600 bg-green-50 border-l-4 border-green-600' : 'text-slate-600'}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo LBBA.png" alt="LBBA Logo" className="h-12 md:h-14 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/#home" className={getLinkClass('home')}>
            Trang chủ
          </Link>
          <Link href="/#about" className={getLinkClass('about')}>
            Về Long Bình
          </Link>
          <Link href="/#sectors" className={getLinkClass('sectors')}>
            Hoạt động
          </Link>
          <Link href="/#agenda" className={getLinkClass('agenda')}>
            Chương trình
          </Link>
          <Link href="/#news" className={getLinkClass('news')}>
            Tin tức
          </Link>
          <Link href="/#contact" className={getLinkClass('contact')}>
            Liên hệ
          </Link>
          <Link 
            href="/#register" 
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Đăng Ký Tham Dự
          </Link>
        </nav>
        <button 
          className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-4 pb-4 pt-2 flex flex-col space-y-3 bg-white border-t">
          <Link 
            href="/#home" 
            className={getMobileLinkClass('home')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Trang chủ
          </Link>
          <Link 
            href="/#about" 
            className={getMobileLinkClass('about')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Về Long Bình
          </Link>
          <Link 
            href="/#sectors" 
            className={getMobileLinkClass('sectors')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Hoạt động
          </Link>
          <Link 
            href="/#agenda" 
            className={getMobileLinkClass('agenda')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Chương trình
          </Link>
          <Link 
            href="/#news" 
            className={getMobileLinkClass('news')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Tin tức
          </Link>
          <Link 
            href="/#contact" 
            className={getMobileLinkClass('contact')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Liên hệ
          </Link>
          <Link 
            href="/#register" 
            className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-green-500/30 transition-all text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Đăng Ký Tham Dự
          </Link>
        </nav>
      </div>
    </header>
  );
}

