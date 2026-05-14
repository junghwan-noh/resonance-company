import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'team resonance — Most Brands Spray. We Target.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Arial Black, Arial, sans-serif',
        }}
      >
        {/* 우측 상단 라디얼 글로우 */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 800,
            height: 800,
            background: 'radial-gradient(circle, rgba(204,255,0,0.18) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* 좌하단 보조 라디얼 */}
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(204,255,0,0.10) 0%, transparent 60%)',
            display: 'flex',
          }}
        />

        {/* SVG 웨이브 + 파티클 */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {/* 굵은 노란 웨이브 (글로우) */}
          <path
            d="M 0 360 Q 200 260 400 360 T 800 360 T 1200 360"
            stroke="rgba(204,255,0,0.22)"
            strokeWidth="6"
            fill="none"
          />
          {/* 메인 노란 웨이브 */}
          <path
            d="M 0 360 Q 200 280 400 360 T 800 360 T 1200 360"
            stroke="#ccff00"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          {/* 흰색 코어 라인 */}
          <path
            d="M 0 360 Q 200 320 400 360 T 800 360 T 1200 360"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
          />
          {/* 파티클 */}
          {[
            [120, 180, 3], [220, 460, 2], [340, 100, 4], [460, 520, 2.5],
            [580, 220, 3], [700, 480, 2], [820, 140, 3.5], [940, 420, 2.5],
            [1060, 200, 3], [180, 80, 2], [380, 580, 2.5], [620, 60, 2],
            [840, 540, 3], [1080, 100, 2.5], [60, 280, 2], [990, 320, 3],
            [260, 340, 2], [520, 100, 2], [740, 580, 2.5], [900, 280, 2],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#ccff00" opacity={0.5} />
          ))}
        </svg>

        {/* 메인 콘텐츠 */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          {/* RESONANCE — RE 부분에 줄긋기 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 140,
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-6px',
              lineHeight: 1,
              fontFamily: 'Arial Black, Arial, sans-serif',
            }}
          >
            {/* RE + strikethrough overlay */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex' }}>RE</div>
              {/* 노란 굵은 줄 */}
              <div
                style={{
                  position: 'absolute',
                  left: -10,
                  right: -10,
                  top: '50%',
                  height: 10,
                  background: '#ccff00',
                  transform: 'translateY(-50%)',
                  boxShadow: '0 0 20px rgba(204,255,0,0.8)',
                }}
              />
              {/* 빨간 얇은 줄 */}
              <div
                style={{
                  position: 'absolute',
                  left: -10,
                  right: -10,
                  top: '50%',
                  height: 3,
                  background: '#ff2200',
                  transform: 'translateY(-50%)',
                }}
              />
            </div>
            <div style={{ display: 'flex' }}>SONANCE</div>
          </div>

          {/* 서브텍스트 */}
          <div
            style={{
              marginTop: 36,
              fontSize: 32,
              color: '#888888',
              fontWeight: 500,
              letterSpacing: '0.5px',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Most Brands Spray. We Target.
          </div>

          {/* rsnc.co.kr 버튼 */}
          <div
            style={{
              marginTop: 56,
              display: 'flex',
              alignItems: 'center',
              padding: '18px 44px',
              background: '#ccff00',
              color: '#0a0a0a',
              fontSize: 28,
              fontWeight: 900,
              borderRadius: 999,
              letterSpacing: '0.3px',
              boxShadow: '0 0 30px rgba(204,255,0,0.45)',
              fontFamily: 'Arial Black, Arial, sans-serif',
            }}
          >
            rsnc.co.kr
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
