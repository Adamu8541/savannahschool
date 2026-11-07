import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { ReactNode } from 'react'
export function Photo({ name, alt, className = '', eager = false }: { name: string; alt: string; className?: string; eager?: boolean }) {
  const [fallback, setFallback] = useState(false)
  const original = `/images/${name}.jpg`
  const source = (width: number) => `/.netlify/images?url=${encodeURIComponent(original)}&w=${width}&fm=webp&q=82`
  return <img src={fallback ? original : source(1600)} srcSet={fallback ? undefined : `${source(480)} 480w, ${source(900)} 900w, ${source(1600)} 1600w`} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 60vw, 1200px" alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} className={className} onError={() => setFallback(true)} />
}
export function TextLink({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) { return <Link to={to} className={`text-link ${className}`}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link> }
export function SectionHeading({ eyebrow, title, to, link = 'Discover more' }: { eyebrow: string; title: string; to?: string; link?: string }) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{to && <TextLink to={to}>{link}</TextLink>}</div> }
export function PageHero({ title, eyebrow, text }: { title: string; eyebrow: string; text: string }) { return <section className="page-hero"><div className="container"><p className="breadcrumbs"><Link to="/">Home</Link><span>/</span>{title}</p><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{text}</p></div></section> }
