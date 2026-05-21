'use client'

type Campaign = {
  image: string
  category: string
  title: string
  desc: string
}

const onAir: Campaign[] = [
  {
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=480&h=320&fit=crop',
    category: 'SKINCARE',
    title: 'Vegan Glow Serum Launch',
    desc: 'Recruiting skincare creators for TikTok & IG review content.',
  },
  {
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=480&h=320&fit=crop',
    category: 'CLEANSING',
    title: 'Hydra Cleansing Balm',
    desc: 'Seeding campaign with micro-influencers across the US.',
  },
]

const upcoming: Campaign[] = [
  {
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=480&h=320&fit=crop',
    category: 'SKINCARE',
    title: 'Summer Tone-Up Sunscreen',
    desc: 'Launching soon — creator applications opening shortly.',
  },
]

const past: Campaign[] = [
  {
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=480&h=320&fit=crop',
    category: 'SKINCARE',
    title: 'Retinol Night Cream',
    desc: 'Completed — 40+ creators, US skincare audience.',
  },
  {
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=480&h=320&fit=crop',
    category: 'MAKEUP',
    title: 'Lip Tint Color Collection',
    desc: 'Completed — viral content across TikTok Shop.',
  },
]

function CampaignCard({ c, dim }: { c: Campaign; dim?: boolean }) {
  return (
    <div
      className={`bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-brand-yellow/40 transition-colors ${
        dim ? 'opacity-70' : ''
      }`}
    >
      <div className="relative h-44 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" data-nopin="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
        <span className="absolute top-3 left-3 text-[11px] font-bold tracking-widest text-black bg-brand-yellow px-2.5 py-1 rounded-full">
          {c.category}
        </span>
      </div>
      <div className="p-6">
        <h4 className="text-white font-bold text-lg mb-2 leading-snug">{c.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
      </div>
    </div>
  )
}

function StatusRow({
  label,
  badge,
  badgeClass,
  items,
  dim,
}: {
  label: string
  badge: string
  badgeClass: string
  items: Campaign[]
  dim?: boolean
}) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-5">
        <span className={`text-[11px] font-bold tracking-widest px-3 py-1 rounded-full ${badgeClass}`}>{badge}</span>
        <h3 className="text-white text-sm font-bold tracking-widest uppercase">{label}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((c) => (
          <CampaignCard key={c.title} c={c} dim={dim} />
        ))}
      </div>
    </div>
  )
}

export default function CampaignsSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="campaigns" className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">

        {/* 헤더 */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-gray-400 font-bold text-sm tracking-widest">FOR CREATORS · CAMPAIGNS</span>
        </div>

        <h2 className="text-4xl md:text-[56px] font-black text-white leading-[1.1] mb-4 tracking-tight">
          Beauty Campaigns,<br />
          <span className="text-brand-yellow">Live &amp; Upcoming</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-14 max-w-2xl">
          Browse the beauty campaigns we run with creators — join an active one or get ready for what&apos;s next.
        </p>

        {/* ON AIR */}
        <StatusRow
          label="On Air"
          badge="● ON AIR"
          badgeClass="text-black bg-brand-yellow"
          items={onAir}
        />

        {/* UPCOMING */}
        <StatusRow
          label="Upcoming"
          badge="UPCOMING"
          badgeClass="text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/30"
          items={upcoming}
        />

        {/* PAST */}
        <StatusRow
          label="Past Campaigns"
          badge="CLOSED"
          badgeClass="text-gray-400 bg-zinc-800 border border-zinc-700"
          items={past}
          dim
        />

        {/* CTA */}
        <div className="mt-14 bg-zinc-900 rounded-[2rem] p-8 md:p-10 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Want to join a campaign?</h4>
            <p className="text-gray-500 text-sm">캠페인 참여를 원하시면 아래로 문의해주세요.</p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('rsnc:open-influencer'))}
            className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full md:w-auto justify-center group shrink-0"
          >
            <span>Apply Now</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
