'use client'

export default function FloatingChatButton() {
  return (
    <a
      href="http://pf.kakao.com/_VJJxbX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오 채널"
      className="group fixed bottom-28 right-6 z-50 bg-[#FEE500] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(254,229,0,0.4)]"
    >
      {/* 툴팁 */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        카카오 채널
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-zinc-900" />
      </span>

      {/* 카카오 말풍선 아이콘 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#3C1E1E"
      >
        <path d="M12 3C6.477 3 2 6.701 2 11.25c0 2.848 1.67 5.365 4.217 6.896L5.2 21.1c-.08.28.18.54.45.4l4.35-2.65c.65.09 1.32.14 2 .14 5.523 0 10-3.701 10-8.25S17.523 3 12 3z" />
      </svg>
    </a>
  )
}
