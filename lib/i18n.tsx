'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'ko' | 'en' | 'ja'

type Dict = Record<string, string | string[] | Record<string, any>[]>

const ko: Dict = {
  // Navbar
  nav_kakao: '카카오톡 채팅하기',

  // Hero
  hero_subtitle: 'Most Brands Spray. We Target.',
  hero_cta_try: '체험해보기',
  hero_cta_brochure: '소개서 다운로드',

  // Why Resonance
  why_tag: 'Why Resonance ?',
  why_headline_1: '우리는',
  why_headline_2: '진짜',
  why_headline_3: '를 추구합니다.',
  why_sub_1: '무작위 AI 인플루언서 마케팅이 만연한 시장에서',
  why_sub_2: '팀레조넌스는 고객사 브랜드로 데이터 실험하지 않습니다.',
  why_compare_label: '프로세스 비교',
  why_legacy_tag: '기존 방식',
  why_legacy_title: '타 업체',
  why_rsnc_tag: 'RSNC 방식',
  why_rsnc_title: '팀 레조넌스',
  why_legacy_result_main: '응답률 ~8% · ROI 측정 불가',
  why_legacy_result_sub: '리포트 없음 · 결과 불투명',
  why_rsnc_result_main: '응답률 34% · 브랜드 핏 매칭',
  why_rsnc_result_sub: '캠페인 리포트 전수 공개',
  why_kpi_response: '응답률',
  why_kpi_db: '인플루언서 DB',
  why_kpi_report: '캠페인 리포트',
  why_kpi_legacy: '기존',
  why_kpi_none: '없음',
  why_outro_1: '마케팅 시장은 국경과 차원을 넘어 급변하고 있습니다.',
  why_outro_2: '하지만 대행사들의 결과는 미약하고, 일회성에 그치는 경우가 다반사입니다.',
  why_outro_3a: '팀레조넌스는 재계약에 집착하지 않습니다.',
  why_outro_3b: '대행사들이 놓치는 맹점을 정확히 타겟팅하여',
  why_outro_3c: '리스크를 최소화합니다.',
  why_cta_story: '팀 레조넌스 탄생 스토리',

  // Stats
  stats_tag: 'Real Results',
  stats_headline_1: '노출이 아니라',
  stats_headline_2: '팔리는 구조',
  stats_headline_3: '를 만듭니다.',
  stats_sub_1: '콘텐츠를 먼저 실험하고, 반응이 확인된 구조만 인플루언서에 적용합니다.',
  stats_sub_2: '결과는 감이 아니라 검증된 흐름으로 만들어집니다.',
  stats_kpi_label: 'Headline KPI',
  stats_brands_label: '협업 브랜드',

  // InfluencerPreview
  inf_tag: '콘텐츠 맛보기',
  inf_headline_1: '이런 인플루언서들과',
  inf_headline_2: '함께',
  inf_headline_3: '하고 있습니다.',
  inf_sub: '실제 DB에서 발췌한 샘플입니다. 브랜드에 맞는 리스트는 따로 드립니다.',
  inf_scroll_hint: '→ 스크롤하면 더 보입니다',
  inf_followers: '팔로워',
  inf_er: '참여율',
  inf_posts_label: '실제 시딩 게시물 샘플',
  inf_cta: '내 브랜드 페르소나와 맞는 인플루언서 체험하기',

  // Insights
  insights_tag: 'Insights',
  insights_headline_1: '모두가 잠든 시간에도',
  insights_headline_2_a: '팀 레조넌스의',
  insights_headline_2_b: 'AI',
  insights_headline_2_c: '는',
  insights_headline_3: '끊임없이 시장을 모니터링합니다.',
  insights_caption_1: '레조넌스가 직접 운영한 캠페인과',
  insights_caption_2: '시장 데이터를 기반으로 씁니다.',

  // Footer
  footer_tag: '무료 상담 신청',
  footer_headline_1: '브랜드에 맞는',
  footer_headline_2: '인플루언서,',
  footer_headline_3a: '지금 바로',
  footer_headline_3b: '확인하세요.',
  footer_sub_1: '브랜드명, 제품, 타겟 시장만 알려주시면',
  footer_sub_2_strong: '48시간 안에 맞춤 인플루언서 리스트',
  footer_sub_2_rest: '를 무료로 드립니다.',
  footer_kakao: '카카오톡 채널 문의',
  footer_form_title: '정보 입력',
  footer_field_brand: '브랜드명',
  footer_field_product: '제품',
  footer_field_market: '타겟 시장',
  footer_field_category: '카테고리',
  footer_field_email: '회신 이메일',
  footer_ph_brand: '레조넌스 코리아',
  footer_ph_product: '비건 세럼',
  footer_ph_market: 'US, AU',
  footer_ph_category: 'Beauty, F&B, Fitness',
  footer_ph_email: 'your@email.com',
  footer_assure_1: '24시간 회신',
  footer_assure_2: '맞춤 샘플 리스트',
  footer_assure_3: '계약 강요 없음',
  footer_submit: '무료 샘플 받기',
  footer_done_title: '전송 완료!',
  footer_done_sub: '24시간 내에 회신 드리겠습니다.',
  footer_copy: '© 2026 team resonance. All rights reserved.',
}

const en: Dict = {
  nav_kakao: 'KakaoTalk Chat',

  hero_subtitle: 'Most Brands Spray. We Target.',
  hero_cta_try: 'Try It',
  hero_cta_brochure: 'Download Brochure',

  why_tag: 'Why Resonance ?',
  why_headline_1: 'We chase',
  why_headline_2: 'the real thing.',
  why_headline_3: '',
  why_sub_1: 'In a market flooded with random AI-driven influencer marketing,',
  why_sub_2: "Team Resonance never runs data experiments on our clients' brands.",
  why_compare_label: 'Process Comparison',
  why_legacy_tag: 'Legacy Approach',
  why_legacy_title: 'Other Agencies',
  why_rsnc_tag: 'RSNC Approach',
  why_rsnc_title: 'Team Resonance',
  why_legacy_result_main: '~8% response · ROI unmeasurable',
  why_legacy_result_sub: 'No report · Opaque results',
  why_rsnc_result_main: '34% response · Brand-fit matched',
  why_rsnc_result_sub: 'Full campaign reporting',
  why_kpi_response: 'Response Rate',
  why_kpi_db: 'Influencer DB',
  why_kpi_report: 'Campaign Report',
  why_kpi_legacy: 'Legacy',
  why_kpi_none: 'None',
  why_outro_1: 'The marketing landscape is shifting fast across borders and channels.',
  why_outro_2: "But most agencies' results are weak and short-lived.",
  why_outro_3a: 'Team Resonance does not chase renewals.',
  why_outro_3b: 'We target the blind spots others miss',
  why_outro_3c: 'and minimize the risk.',
  why_cta_story: 'Our Origin Story',

  stats_tag: 'Real Results',
  stats_headline_1: 'Not exposure —',
  stats_headline_2: 'a structure that sells.',
  stats_headline_3: '',
  stats_sub_1: 'We test content first. Only structures that work go to influencers.',
  stats_sub_2: 'Results come from validated flow, not gut feeling.',
  stats_kpi_label: 'Headline KPI',
  stats_brands_label: 'Brands We Work With',

  inf_tag: 'Content Preview',
  inf_headline_1: 'Working with',
  inf_headline_2: 'creators',
  inf_headline_3: 'like these.',
  inf_sub: 'Samples pulled from our live DB. Custom lists per brand on request.',
  inf_scroll_hint: '→ Scroll for more',
  inf_followers: 'Followers',
  inf_er: 'Engagement',
  inf_posts_label: 'Real Seeding Post Samples',
  inf_cta: 'Find Influencers That Match Your Brand Persona',

  insights_tag: 'Insights',
  insights_headline_1: 'Even while you sleep,',
  insights_headline_2_a: "Team Resonance's",
  insights_headline_2_b: 'AI',
  insights_headline_2_c: '',
  insights_headline_3: 'never stops scanning the market.',
  insights_caption_1: 'Written from campaigns we ran ourselves',
  insights_caption_2: 'and live market data.',

  footer_tag: 'Free Consultation',
  footer_headline_1: 'The right influencers',
  footer_headline_2: 'for your brand —',
  footer_headline_3a: 'find them',
  footer_headline_3b: 'right now.',
  footer_sub_1: 'Tell us your brand, product, and target market and',
  footer_sub_2_strong: "we'll send a tailored influencer list within 48 hours,",
  footer_sub_2_rest: ' for free.',
  footer_kakao: 'Chat on KakaoTalk',
  footer_form_title: 'Your Info',
  footer_field_brand: 'Brand Name',
  footer_field_product: 'Product',
  footer_field_market: 'Target Market',
  footer_field_category: 'Category',
  footer_field_email: 'Reply Email',
  footer_ph_brand: 'Resonance Korea',
  footer_ph_product: 'Vegan Serum',
  footer_ph_market: 'US, AU',
  footer_ph_category: 'Beauty, F&B, Fitness',
  footer_ph_email: 'your@email.com',
  footer_assure_1: 'Reply in 24h',
  footer_assure_2: 'Tailored Sample List',
  footer_assure_3: 'No Pressure',
  footer_submit: 'Get Free Sample',
  footer_done_title: 'Sent!',
  footer_done_sub: "We'll get back to you within 24 hours.",
  footer_copy: '© 2026 team resonance. All rights reserved.',
}

const ja: Dict = {
  nav_kakao: 'カカオトークで相談',

  hero_subtitle: 'Most Brands Spray. We Target.',
  hero_cta_try: '体験する',
  hero_cta_brochure: '会社案内ダウンロード',

  why_tag: 'Why Resonance ?',
  why_headline_1: '私たちは',
  why_headline_2: '本物',
  why_headline_3: 'を追求します。',
  why_sub_1: '無作為なAIインフルエンサーマーケティングが蔓延する市場で、',
  why_sub_2: 'チーム・レゾナンスはお客様のブランドでデータ実験をしません。',
  why_compare_label: 'プロセス比較',
  why_legacy_tag: '従来の方法',
  why_legacy_title: '他社',
  why_rsnc_tag: 'RSNCの方法',
  why_rsnc_title: 'チーム・レゾナンス',
  why_legacy_result_main: '応答率〜8% · ROI測定不能',
  why_legacy_result_sub: 'レポートなし · 不透明な結果',
  why_rsnc_result_main: '応答率34% · ブランドフィット一致',
  why_rsnc_result_sub: 'キャンペーンレポート全公開',
  why_kpi_response: '応答率',
  why_kpi_db: 'インフルエンサーDB',
  why_kpi_report: 'キャンペーンレポート',
  why_kpi_legacy: '従来',
  why_kpi_none: 'なし',
  why_outro_1: 'マーケティング市場は国境とチャネルを越えて急変しています。',
  why_outro_2: 'しかし代理店の成果は弱く、一回限りで終わることが多いのが現実です。',
  why_outro_3a: 'チーム・レゾナンスは再契約に固執しません。',
  why_outro_3b: '他社が見逃す盲点を正確にターゲットし、',
  why_outro_3c: 'リスクを最小化します。',
  why_cta_story: 'チーム・レゾナンスの誕生ストーリー',

  stats_tag: 'Real Results',
  stats_headline_1: '露出ではなく、',
  stats_headline_2: '売れる構造',
  stats_headline_3: 'をつくります。',
  stats_sub_1: 'コンテンツを先に検証し、反応のある構造だけをインフルエンサーに適用します。',
  stats_sub_2: '結果は感ではなく、検証された流れから生まれます。',
  stats_kpi_label: 'Headline KPI',
  stats_brands_label: '協業ブランド',

  inf_tag: 'コンテンツ・プレビュー',
  inf_headline_1: 'こうしたインフルエンサーと',
  inf_headline_2: '一緒に',
  inf_headline_3: '取り組んでいます。',
  inf_sub: '実際のDBからのサンプルです。ブランド別リストは個別にお渡しします。',
  inf_scroll_hint: '→ スクロールでもっと見る',
  inf_followers: 'フォロワー',
  inf_er: 'エンゲージメント',
  inf_posts_label: '実際の投稿サンプル',
  inf_cta: 'ブランドに合うインフルエンサーを体験する',

  insights_tag: 'Insights',
  insights_headline_1: '皆が眠っている時間にも、',
  insights_headline_2_a: 'チーム・レゾナンスの',
  insights_headline_2_b: 'AI',
  insights_headline_2_c: 'は',
  insights_headline_3: '絶え間なく市場をモニタリングします。',
  insights_caption_1: 'レゾナンスが自ら運営したキャンペーンと',
  insights_caption_2: '市場データに基づいて執筆。',

  footer_tag: '無料相談',
  footer_headline_1: 'あなたのブランドに合う',
  footer_headline_2: 'インフルエンサーを、',
  footer_headline_3a: '今すぐ',
  footer_headline_3b: 'ご確認ください。',
  footer_sub_1: 'ブランド名、商品、ターゲット市場をお知らせいただければ',
  footer_sub_2_strong: '48時間以内にカスタムリスト',
  footer_sub_2_rest: 'を無料でお送りします。',
  footer_kakao: 'カカオトークで問い合わせ',
  footer_form_title: '情報入力',
  footer_field_brand: 'ブランド名',
  footer_field_product: '商品',
  footer_field_market: 'ターゲット市場',
  footer_field_category: 'カテゴリ',
  footer_field_email: '返信用メール',
  footer_ph_brand: 'レゾナンス・コリア',
  footer_ph_product: 'ヴィーガンセラム',
  footer_ph_market: 'US, AU',
  footer_ph_category: 'Beauty, F&B, Fitness',
  footer_ph_email: 'your@email.com',
  footer_assure_1: '24時間以内返信',
  footer_assure_2: 'カスタムサンプル',
  footer_assure_3: '契約強要なし',
  footer_submit: '無料サンプルを受け取る',
  footer_done_title: '送信完了！',
  footer_done_sub: '24時間以内にご返信いたします。',
  footer_copy: '© 2026 team resonance. All rights reserved.',
}

const dicts: Record<Lang, Dict> = { ko, en, ja }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }
const LangCtx = createContext<Ctx>({ lang: 'ko', setLang: () => {}, t: (k) => k })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ko')

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('rsnc-lang')) as Lang | null
    if (saved && (saved === 'ko' || saved === 'en' || saved === 'ja')) setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') localStorage.setItem('rsnc-lang', l)
  }

  const t = (k: string): string => {
    const v = dicts[lang][k]
    if (typeof v === 'string') return v
    const fallback = dicts.ko[k]
    return typeof fallback === 'string' ? fallback : k
  }

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
}

export function useLang() {
  return useContext(LangCtx)
}
