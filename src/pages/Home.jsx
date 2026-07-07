import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { StepIcon } from '../components/StepIcons.jsx'
import heroBg from '../assets/hero-warm.jpg'
import imgAbout from '../assets/card-about.jpg'
import imgValue from '../assets/card-value.jpg'
import imgPartner from '../assets/card-partner.jpg'

export default function Home() {
  const { t } = useLang()
  const { hero, valueChain, ui } = t

  const portals = [
    { to: '/about', title: ui.portalAbout, img: imgAbout, cta: ui.portalAboutCta },
    { to: '/value', title: ui.portalValue, img: imgValue, cta: ui.portalValueCta },
    { to: '/partnership', title: ui.portalPartner, img: imgPartner, cta: ui.portalPartnerCta },
  ]

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden text-white">
        {/* Tokyo skyline background */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Warm overlay — heavier on the right (where the text sits) so the
            warm interior on the left stays visible without cooling the photo. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/25 to-ink/60" />

        <div className="relative mx-auto flex max-w-6xl px-6 py-28 md:py-40">
          <div className="hero-block max-w-2xl md:ml-auto md:text-right">
            <h1 className="animate-rise delay-1 mt-10 whitespace-pre-line text-5xl font-bold leading-[1.05] tracking-tight [text-shadow:0_2px_12px_rgba(11,20,30,0.45)] md:text-7xl">
              {hero.title}
            </h1>
            {hero.titleEn && (
              <p className="animate-rise delay-2 mt-4 text-lg font-medium tracking-wide text-red drop-shadow md:text-xl">
                {hero.titleEn}
              </p>
            )}
            <p className="animate-rise delay-3 mt-8 whitespace-pre-line text-lg leading-relaxed text-white [text-shadow:0_1px_8px_rgba(11,20,30,0.55)]">
              {hero.subtitle}
            </p>
            <div className="animate-rise delay-3 mt-10 flex flex-wrap gap-4 md:justify-end">
              <Link
                to={hero.primaryCta.to}
                className="rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-white hover:text-navy"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.to}
                className="rounded-full border border-white/60 bg-navy/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-red hover:text-red"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- One-line positioning ---------------- */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <p className="positioning whitespace-pre-line text-2xl font-medium leading-relaxed text-ink md:text-3xl">
          {ui.homePositioning}
        </p>
      </section>

      {/* ---------------- Value chain — illustrated process ---------------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {valueChain.map((v, i) => (
            <div
              key={v.en}
              className="flex flex-col items-center px-5 text-center lg:border-r lg:border-line lg:last:border-r-0"
            >
              <span className="mb-4 self-start text-sm font-semibold tracking-wider text-ink-soft">
                0{i + 1}
              </span>
              <StepIcon name={v.en} className="h-14 w-14 text-ink" />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-dark">
                {v.en}
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">{v.cn || v.title}</h3>
              {v.cn && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.title}</p>}
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/value" className="inline-block text-base font-semibold text-red-dark hover:underline">
            {ui.valueTeaserLink}
          </Link>
        </div>
      </section>

      {/* ---------------- Three portal cards ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {portals.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-navy/0 transition duration-500 group-hover:bg-navy/10" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug text-ink">{c.title}</h3>
                <span className="mt-4 inline-block text-sm font-semibold text-red-dark group-hover:underline">
                  {c.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </>
  )
}
