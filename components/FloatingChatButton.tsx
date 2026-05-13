'use client'

export default function FloatingChatButton() {
  return (
    <a
      href="http://pf.kakao.com/_VJJxbX/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-brand-yellow w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform text-black shadow-[0_0_20px_rgba(204,255,0,0.4)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM176,144H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" />
      </svg>
    </a>
  )
}
