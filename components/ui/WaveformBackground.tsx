'use client'

interface WaveformBackgroundProps {
  mousePosition: { x: number; y: number }
}

export default function WaveformBackground({ mousePosition }: WaveformBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="/dark-fluid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Vignette + gradient overlays */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/85" />

      {/* Green tint overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'rgba(124,255,0,0.03)' }}
      />
    </div>
  )
}
