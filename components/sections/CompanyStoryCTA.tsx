'use client'

import { useEffect, useRef, useState } from 'react'

export default function CompanyStoryCTA() {
  const [openInf, setOpenInf] = useState(false)
  const [openBrand, setOpenBrand] = useState(false)
  const [infSuccess, setInfSuccess] = useState(false)
  const [brandSuccess, setBrandSuccess] = useState(false)
  const [infSubmitting, setInfSubmitting] = useState(false)
  const [brandSubmitting, setBrandSubmitting] = useState(false)
  const infFormRef = useRef<HTMLFormElement>(null)
  const brandFormRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenInf(false); setOpenBrand(false) }
    }
    const onOpenInf = () => setOpenInf(true)
    const onOpenBrand = () => setOpenBrand(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('rsnc:open-influencer', onOpenInf)
    window.addEventListener('rsnc:open-brand', onOpenBrand)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('rsnc:open-influencer', onOpenInf)
      window.removeEventListener('rsnc:open-brand', onOpenBrand)
    }
  }, [])

  const handleInfSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInfSubmitting(true)
    setTimeout(() => {
      setInfSubmitting(false); setInfSuccess(true)
      setTimeout(() => {
        setOpenInf(false); setInfSuccess(false); infFormRef.current?.reset()
      }, 2500)
    }, 800)
  }

  const handleBrandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setBrandSubmitting(true)
    setTimeout(() => {
      setBrandSubmitting(false); setBrandSuccess(true)
      setTimeout(() => {
        setOpenBrand(false); setBrandSuccess(false); brandFormRef.current?.reset()
      }, 2500)
    }, 800)
  }

  const fieldStyle: React.CSSProperties = { width: '100%', boxSizing: 'border-box', background: '#111', border: '.5px solid #222', borderRadius: 6, color: '#f0f0f0', fontSize: 13, padding: '10px 12px', outline: 'none', fontFamily: 'inherit' }
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 11, color: '#555', marginBottom: 5 }
  const sectionDivider = (label: string) => (
    <div style={{ borderBottom: '.5px solid #1e1e1e', paddingBottom: 6, margin: '1.5rem 0 1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ width: 5, height: 5, background: '#c8ff00', borderRadius: '50%', display: 'inline-block' }} />
      <span style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#444' }}>{label}</span>
    </div>
  )

  return (
    <>
      {openInf && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setOpenInf(false) }} style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,.85)', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#0f0f0f', border: '0.5px solid #222', borderRadius: 12, width: '100%', maxWidth: 520, maxHeight: '90vh', overflowY: 'auto', padding: '2rem 1.75rem 2.5rem', position: 'relative' }}>
            <button onClick={() => setOpenInf(false)} style={{ position: 'absolute', top: 16, right: 16, background: '#1a1a1a', border: '0.5px solid #2a2a2a', borderRadius: '50%', width: 28, height: 28, color: '#666', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <p style={{ fontSize: 10, letterSpacing: '.15em', color: '#c8ff00', textTransform: 'uppercase', marginBottom: 6, fontFamily: 'monospace' }}>For Creators · Apply</p>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>인플루언서 신청</h3>
            <p style={{ fontSize: 12, color: '#444', marginBottom: '1.75rem' }}>선정된 크리에이터에 한해 개별 연락드립니다.</p>
            <form ref={infFormRef} onSubmit={handleInfSubmit}>
              {sectionDivider('기본 정보 · Basic Info')}
              <div style={{ display: 'grid', gap: 10, marginBottom: 10 }}>
                <div><label style={labelStyle}>이름 · Full Name</label><input name="name" type="text" required placeholder="Hong Gildong" style={fieldStyle} /></div>
                <div><label style={labelStyle}>이메일 · Email</label><input name="email" type="email" required placeholder="hello@example.com" style={fieldStyle} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                <div><label style={labelStyle}>성별 · Gender</label><select name="gender" style={{ ...fieldStyle, color: '#888', WebkitAppearance: 'none', cursor: 'pointer' }} defaultValue=""><option value="" disabled>선택</option><option>Male · 남성</option><option>Female · 여성</option><option>Prefer not to say</option></select></div>
                <div><label style={labelStyle}>국가 · Country</label><select name="country" style={{ ...fieldStyle, color: '#888', WebkitAppearance: 'none', cursor: 'pointer' }} defaultValue=""><option value="" disabled>선택</option><option>South Korea</option><option>United States</option><option>Canada</option><option>Japan</option><option>Other</option></select></div>
              </div>
              {sectionDivider('소셜 미디어 · Social Media')}
              <div style={{ marginBottom: 10 }}><label style={labelStyle}>TikTok 아이디 / 링크</label><input name="tiktok" type="text" required placeholder="@username" style={fieldStyle} /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                <div><label style={labelStyle}>Instagram <span style={{ color: '#333' }}>Optional</span></label><input name="instagram" type="text" placeholder="@username" style={fieldStyle} /></div>
                <div><label style={labelStyle}>팔로워 수 · Followers</label><input name="followers" type="text" placeholder="예) 52,000" style={fieldStyle} /></div>
              </div>
              {sectionDivider('콘텐츠 정보 · Content Info')}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                <div><label style={labelStyle}>주요 카테고리</label><select name="category" style={{ ...fieldStyle, color: '#888', WebkitAppearance: 'none', cursor: 'pointer' }} defaultValue=""><option value="" disabled>선택</option><option>Beauty · 뷰티</option><option>Skincare · 스킨케어</option></select></div>
                <div><label style={labelStyle}>평균 조회수 · Avg Views</label><input name="avg_views" type="text" placeholder="예) 30,000" style={fieldStyle} /></div>
              </div>
              <div style={{ marginBottom: 10 }}><label style={labelStyle}>대표 영상 링크 · Best Video</label><input name="best_video" type="url" placeholder="https://tiktok.com/..." style={fieldStyle} /></div>
              {sectionDivider('간단 질문 · Optional')}
              <div style={{ marginBottom: '1.75rem' }}><label style={labelStyle}>왜 이 캠페인에 참여하고 싶나요?</label><textarea name="reason" rows={3} placeholder="자유롭게 작성해주세요" style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.6 }} /></div>
              {!infSuccess && (
                <button type="submit" disabled={infSubmitting} style={{ width: '100%', padding: 14, background: '#c8ff00', color: '#0a0a0a', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', cursor: 'pointer', opacity: infSubmitting ? 0.6 : 1 }}>
                  {infSubmitting ? '제출 중...' : '지금 지원하기 · Apply Now'}
                </button>
              )}
              {infSuccess && (
                <div style={{ marginTop: '1rem', padding: 12, background: '#0d1f0d', border: '.5px solid #1a3a1a', borderRadius: 6, textAlign: 'center' }}><p style={{ fontSize: 13, color: '#c8ff00', margin: 0 }}>✓ 신청 완료! 선정 시 연락드리겠습니다.</p></div>
              )}
            </form>
          </div>
        </div>
      )}

      {openBrand && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setOpenBrand(false) }} style={{ display: 'flex', position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,.85)', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(4px)' }}>
          <div style={{ background: '#0f0f0f', border: '0.5px solid #222', borderRadius: 12, width: '100%', maxWidth: 560, maxHeight: '90vh', overflowY: 'auto', padding: '2rem 1.75rem 2.5rem', position: 'relative' }}>
            <button onClick={() => setOpenBrand(false)} style={{ position: 'absolute', top: 16, right: 16, background: '#1a1a1a', border: '0.5px solid #2a2a2a', borderRadius: '50%', width: 28, height: 28, color: '#666', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <p style={{ fontSize: 10, letterSpacing: '.2em', color: '#c8ff00', textTransform: 'uppercase', marginBottom: 10, fontFamily: "'Courier New',monospace", textAlign: 'center' }}>CONTENT DIAGNOSIS</p>
            <h3 style={{ fontSize: 'clamp(22px,4vw,30px)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 8, letterSpacing: '-.02em', lineHeight: 1.2 }}>콘텐츠 구조 <span style={{ color: '#c8ff00' }}>진단 신청</span></h3>
            <p style={{ fontSize: 13, color: '#555', textAlign: 'center', marginBottom: '1.75rem', lineHeight: 1.7 }}>브랜드명, 제품, 타겟 시장만 알려주시면<br /><strong style={{ color: '#f0f0f0', fontWeight: 600 }}>72시간 안에</strong> 맞춤 진단으로 회신드리겠습니다.</p>
            <form ref={brandFormRef} onSubmit={handleBrandSubmit}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: 12, color: '#888', marginBottom: 7 }}>브랜드명 <span style={{ color: '#c8ff00' }}>*</span></label>
                <input name="brand" type="text" required placeholder="브랜드명을 입력해주세요" style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', borderBottom: '.5px solid #2a2a2a', color: '#f0f0f0', fontSize: 14, padding: '8px 0 10px', outline: 'none' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: '#888', marginBottom: 7 }}>제품 <span style={{ color: '#c8ff00' }}>*</span></label>
                  <select name="product_type" required defaultValue="" style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', borderBottom: '.5px solid #2a2a2a', color: '#666', fontSize: 14, padding: '8px 0 10px', outline: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
                    <option value="" disabled>제품 유형 선택</option>
                    <option>스킨케어</option><option>메이크업</option><option>헤어케어</option><option>바디케어</option><option>건강식품</option><option>패션/의류</option><option>라이프스타일</option><option>식품/음료</option><option>기타</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, color: '#888', marginBottom: 7 }}>타겟 시장 <span style={{ color: '#c8ff00' }}>*</span></label>
                  <select name="target_market" required defaultValue="" style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', borderBottom: '.5px solid #2a2a2a', color: '#666', fontSize: 14, padding: '8px 0 10px', outline: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
                    <option value="" disabled>국가/지역 선택</option>
                    <option>미국 (US)</option><option>한국 (KR)</option><option>일본 (JP)</option><option>동남아시아</option><option>유럽</option><option>글로벌</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: 12, color: '#888', marginBottom: 10 }}>카테고리 <span style={{ color: '#c8ff00' }}>*</span> <span style={{ color: '#444', fontSize: 11 }}>(복수 가능)</span></label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['뷰티', '스킨케어', '라이프스타일', '패션', '푸드', '피트니스', '기타'].map(v => (
                    <label key={v} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#666', cursor: 'pointer' }}><input type="checkbox" name="category" value={v} style={{ accentColor: '#c8ff00' }} /> {v}</label>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: 12, color: '#888', marginBottom: 10 }}>타겟 연령대 <span style={{ color: '#c8ff00' }}>*</span> <span style={{ color: '#444', fontSize: 11 }}>(복수 가능)</span></label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['10대', '20대', '30대', '40대', '50대+'].map(v => (
                    <label key={v} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#666', cursor: 'pointer' }}><input type="checkbox" name="age" value={v} style={{ accentColor: '#c8ff00' }} /> {v}</label>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: 12, color: '#888', marginBottom: 7 }}>회신 이메일 <span style={{ color: '#c8ff00' }}>*</span></label>
                <input name="email" type="email" required placeholder="your@email.com" style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', borderBottom: '.5px solid #2a2a2a', color: '#f0f0f0', fontSize: 14, padding: '8px 0 10px', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <span style={{ fontSize: 11, color: '#444', display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ color: '#c8ff00' }}>✓</span> 72시간 내 회신</span>
                  <span style={{ fontSize: 11, color: '#444', display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ color: '#c8ff00' }}>✓</span> 맞춤 샘플 리스트</span>
                </div>
                {!brandSuccess && (
                  <button type="submit" disabled={brandSubmitting} style={{ background: '#c8ff00', color: '#0a0a0a', border: 'none', borderRadius: 6, padding: '13px 22px', fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap', opacity: brandSubmitting ? 0.6 : 1 }}>
                    {brandSubmitting ? '제출 중...' : '진단 신청하기 →'}
                  </button>
                )}
              </div>
              {brandSuccess && (
                <div style={{ marginTop: '1rem', padding: 12, background: '#0d1f0d', border: '.5px solid #1a3a1a', borderRadius: 6, textAlign: 'center' }}><p style={{ fontSize: 13, color: '#c8ff00', margin: 0 }}>✓ 신청 완료! 72시간 내로 맞춤 진단을 보내드리겠습니다.</p></div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
