import { useEffect, useRef, useState } from 'react'
import { PROJECTS, type Project } from '../../data/projects'

interface ExactLabProps {
  onOpenCaseStudy: (project: Project) => void
}

interface MemBlock {
  id: number
  size: number
  allocated: boolean
  tag: string
  color: string
}

export function ExactLab({ onOpenCaseStudy }: ExactLabProps) {
  const memViz = PROJECTS.find((p) => p.id === 'memvisualizer') || PROJECTS[3]
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeBlocks, setActiveBlocks] = useState<MemBlock[]>([
    { id: 1, size: 64, allocated: true, tag: '0x7ffd10', color: '#34c759' },
    { id: 2, size: 128, allocated: false, tag: 'FREE', color: 'rgba(255,255,255,0.1)' },
    { id: 3, size: 256, allocated: true, tag: '0x7ffd50', color: '#8cecff' },
    { id: 4, size: 64, allocated: false, tag: 'FREE', color: 'rgba(255,255,255,0.1)' },
    { id: 5, size: 512, allocated: true, tag: '0x7ffe10', color: '#34c759' },
    { id: 6, size: 128, allocated: false, tag: 'FREE', color: 'rgba(255,255,255,0.1)' },
    { id: 7, size: 192, allocated: true, tag: '0x7fff30', color: '#8cecff' },
  ])
  const [heapStats, setHeapStats] = useState({ allocated: 1024, free: 320, ops: 4820 })

  // 60 FPS live heap visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let frame = 0

    const render = () => {
      frame++
      const width = canvas.width
      const height = canvas.height
      ctx.clearRect(0, 0, width, height)

      // Draw memory bus background
      ctx.fillStyle = '#0a0a0d'
      ctx.fillRect(0, 0, width, height)

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.lineWidth = 1
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Draw moving scan head
      const scanX = (frame * 1.8) % width
      const grad = ctx.createLinearGradient(scanX - 40, 0, scanX, 0)
      grad.addColorStop(0, 'rgba(140, 236, 255, 0)')
      grad.addColorStop(1, 'rgba(140, 236, 255, 0.35)')
      ctx.fillStyle = grad
      ctx.fillRect(scanX - 40, 0, 40, height)

      // Draw blocks on canvas
      const totalCapacity = 1344
      let curX = 12
      const blockY = 24
      const blockH = height - 48

      activeBlocks.forEach((b) => {
        const blockW = Math.max((b.size / totalCapacity) * (width - 24), 28)

        // Block body
        ctx.fillStyle = b.allocated ? (b.color === '#8cecff' ? '#8cecff' : '#34c759') : '#18191d'
        ctx.strokeStyle = b.allocated ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.roundRect(curX, blockY, blockW - 4, blockH, 4)
        ctx.fill()
        ctx.stroke()

        // Block label
        ctx.fillStyle = b.allocated && b.color === '#8cecff' ? '#000000' : '#ffffff'
        ctx.font = '9px "JetBrains Mono", monospace'
        ctx.fillText(`${b.size}B`, curX + 6, blockY + 18)

        ctx.fillStyle = b.allocated && b.color === '#8cecff' ? '#222' : 'rgba(255,255,255,0.6)'
        ctx.font = '8px "JetBrains Mono", monospace'
        ctx.fillText(b.allocated ? b.tag : 'FREE', curX + 6, blockY + 34)

        curX += blockW
      })

      animId = requestAnimationFrame(render)
    }

    render()

    // Periodically simulate an allocation/free cycle
    const interval = setInterval(() => {
      setActiveBlocks((prev) => {
        const next = [...prev]
        const targetIdx = Math.floor(Math.random() * next.length)
        const target = next[targetIdx]
        if (target) {
          target.allocated = !target.allocated
          if (target.allocated) {
            target.tag = `0x${(0x7ffd00 + targetIdx * 0x40).toString(16)}`
          } else {
            target.tag = 'FREE'
          }
        }
        return next
      })
      setHeapStats((s) => ({
        allocated: 960 + Math.floor(Math.random() * 120),
        free: 280 + Math.floor(Math.random() * 80),
        ops: s.ops + 1,
      }))
    }, 2400)

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(interval)
    }
  }, [activeBlocks])

  return (
    <section id="engineering-lab">
      <div className="section-header">
        <p className="section-label">Engineering Lab</p>

        <h2>
          Experimental systems<br />
          <span>built for performance.</span>
        </h2>

        <p className="intro">
          Technical demos focused on low-level systems programming, real-time heap memory simulation,
          dynamic allocator performance, and hardware-efficient CPU architecture.
        </p>
      </div>

      <article className="lab-card">
        <div
          className="lab-image"
          style={{
            background: '#121317',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '340px',
          }}
        >
          <div style={{ color: '#fff', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ color: '#8cecff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34c759', display: 'inline-block' }}></span>
                HEAP MEMORY SIMULATOR (60 FPS)
              </span>
              <span style={{ color: '#34c759' }}>LIVE COALESCING</span>
            </div>

            {/* Live 60 FPS HTML5 Canvas */}
            <div style={{ width: '100%', height: '110px', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1rem' }}>
              <canvas
                ref={canvasRef}
                width={560}
                height={110}
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            </div>

            {/* Real-time telemetry specs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ background: '#0a0a0d', padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: '#6f7278', fontSize: '0.7rem', display: 'block' }}>ALLOCATED</span>
                <span style={{ color: '#8cecff', fontSize: '0.9rem', fontWeight: 600 }}>{heapStats.allocated} B</span>
              </div>
              <div style={{ background: '#0a0a0d', padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: '#6f7278', fontSize: '0.7rem', display: 'block' }}>FREE BLOCKS</span>
                <span style={{ color: '#34c759', fontSize: '0.9rem', fontWeight: 600 }}>{heapStats.free} B</span>
              </div>
              <div style={{ background: '#0a0a0d', padding: '0.6rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: '#6f7278', fontSize: '0.7rem', display: 'block' }}>TOTAL CYCLES</span>
                <span style={{ color: '#e1e6ec', fontSize: '0.9rem', fontWeight: 600 }}>{heapStats.ops}</span>
              </div>
            </div>

            <div style={{ background: '#0a0a0d', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.75rem', color: '#b7bfd9' }}>
              <span style={{ color: '#6f7278' }}>// Low-level C Best-Fit Search Algorithm</span><br />
              &gt; void* p = malloc(sizeof(BlockHeader) + payload); // 0.12ms traversal
            </div>
          </div>
        </div>

        <div className="lab-content">
          <p className="lab-number">ENGINEERING DEMO 01</p>
          <h3>Dynamic Memory Visualizer</h3>
          <p>
            An interactive systems-level heap memory visualizer implemented in C and modern web standards.
            Demonstrates pointer arithmetic, dynamic block coalescing, free list indexing, and fragmentation
            mitigation strategies in real time.
          </p>

          <ul className="lab-tags">
            <li>C / C++</li>
            <li>Memory Allocators</li>
            <li>malloc &amp; free</li>
            <li>Explicit Free Lists</li>
            <li>HTML5 Canvas</li>
            <li>Systems Programming</li>
          </ul>

          <div className="project-links" style={{ marginTop: '2rem' }}>
            <button
              onClick={() => onOpenCaseStudy(memViz)}
              className="project-link"
              type="button"
            >
              Open Case Study
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>arrow_forward</span>
            </button>
            {memViz.githubUrl && (
              <a
                href={memViz.githubUrl}
                className="project-link project-link-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>open_in_new</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </section>
  )
}
