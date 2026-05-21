'use client'

export default function FooterSection() {
  return (
    <footer className="bg-black w-full border-t border-zinc-800 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* 컬럼 1 — 브랜드 */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              {/* 레조넌스 RE 취소선 아이콘 */}
              <span className="relative inline-block text-white font-black text-2xl tracking-tighter leading-none">
                RE
                <span className="absolute top-1/2 left-[-6%] w-[112%] h-[5px] bg-brand-yellow -translate-y-1/2 shadow-[0_0_8px_rgba(204,255,0,0.6)] pointer-events-none" />
                <span className="absolute top-1/2 left-[-6%] w-[112%] h-[1.5px] bg-[#FF003C] -translate-y-1/2 pointer-events-none" />
              </span>
              <span className="text-white font-bold text-lg tracking-tight">TEAM RESONANCE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              노출이 아닌 전환을 만드는 팀.<br />
              팔리는 구조로 브랜드의 스케일업을 돕습니다.
            </p>

            {/* SNS 아이콘 */}
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/resonancecompany" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@resonancecompany" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.48-2.5 6.07-1.8 1.81-4.46 2.67-6.95 2.25-2.58-.42-4.9-2.22-5.91-4.63-1.03-2.45-.73-5.38.74-7.58 1.35-2.02 3.65-3.23 6.05-3.32.01 1.48-.01 2.96.01 4.43-1.04.14-2.12.64-2.78 1.49-.78.98-.82 2.45-.11 3.48.66.97 1.89 1.44 3.04 1.25 1.15-.19 2.12-1.04 2.45-2.14.16-.54.21-1.11.21-1.67V.02z" />
                </svg>
              </a>
              <a href="mailto:contact@rsnc.co.kr" aria-label="Email" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* 컬럼 2 — Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { label: '인플루언서 시딩', href: '#contact' },
                { label: '컨텐츠 방향성 제시', href: '#contact' },
                { label: '크리에이터 DB 제공', href: '#contact' },
                { label: '상담 신청', href: '#contact' },
              ].map((it) => (
                <li key={it.label}>
                  <a href={it.href} className="text-gray-400 hover:text-white text-sm transition-colors">{it.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 컬럼 3 — Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Cases', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Contact', href: '#contact' },
              ].map((it) => (
                <li key={it.label}>
                  <a href={it.href} className="text-gray-400 hover:text-white text-sm transition-colors">{it.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 컬럼 4 — Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>서울특별시 영등포구 버드나루로 90 10층</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
                <a href="mailto:contact@rsnc.co.kr" className="hover:text-white transition-colors">contact@rsnc.co.kr</a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:02-0000-0000" className="hover:text-white transition-colors">02-0000-0000</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="border-t border-zinc-800 pt-8 mt-16 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <p className="text-gray-500 text-sm">© 2026 team resonance. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2 leading-relaxed">
              상호: 팀레조넌스 | 대표: 홍길동 | 사업자등록번호: 000-00-00000 | 통신판매업신고: 제2026-서울강남-0000호
            </p>
          </div>
          <div className="flex gap-6 shrink-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">이용약관</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
