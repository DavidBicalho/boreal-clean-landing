import { createFileRoute } from '@tanstack/react-router'
import {
  AirVent,
  Bug,
  CalendarCheck,
  Check,
  ChevronDown,
  Droplets,
  Home,
  ShieldCheck,
  Sofa,
  Sparkles,
  Wind,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Landing,
})

// WhatsApp da Boreal Clean (DDD 17). Altere aqui para trocar o número em todo o site.
const WHATSAPP_NUMBER = '5517992711318'
const WHATSAPP_DISPLAY = '(17) 99271-1318'

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const DEFAULT_MESSAGE =
  'Olá, Boreal Clean! Vim pelo site e gostaria de um orçamento.'

function img(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`
}

function WhatsAppIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41 2.51 0 4.88.98 6.65 2.76a9.35 9.35 0 0 1 2.75 6.66c0 5.19-4.23 9.41-9.41 9.41zm8.01-17.42A11.26 11.26 0 0 0 12.05.75C5.81.75.73 5.83.73 12.07c0 2 .52 3.94 1.51 5.66L.64 23.25l5.65-1.48a11.3 11.3 0 0 0 5.75 1.47h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.02-1.18-5.87-3.31-8z" />
    </svg>
  )
}

function WhatsAppButton({
  message = DEFAULT_MESSAGE,
  label = 'Chamar no WhatsApp',
  size = 'md',
  className = '',
}: {
  message?: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3.5 text-base gap-2.5',
    lg: 'px-8 py-4.5 text-lg gap-3',
  }
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-whats font-bold text-night shadow-lg shadow-whats/25 transition hover:-translate-y-0.5 hover:bg-[#3ee07a] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-aurora ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className={size === 'lg' ? 'size-6' : 'size-5'} />
      {label}
    </a>
  )
}

const services = [
  {
    icon: Sofa,
    title: 'Limpeza de estofados',
    image: 'upholstery.png',
    alt: 'Poltrona bege sendo higienizada com extratora profissional, metade já limpa',
    description:
      'Higienização profunda com extratora profissional: removemos sujeira, manchas, ácaros e odores que a limpeza do dia a dia não alcança.',
    items: ['Sofás e chaises', 'Poltronas e puffs', 'Colchões', 'Cadeiras e cabeceiras'],
    message: 'Olá, Boreal Clean! Gostaria de um orçamento para limpeza de estofados.',
  },
  {
    icon: AirVent,
    title: 'Limpeza de evaporadoras',
    image: 'ac-evaporator.png',
    alt: 'Técnica aplicando espuma de limpeza na evaporadora de um ar-condicionado split',
    description:
      'Limpeza da unidade interna do ar-condicionado com produto específico e bolsa coletora, sem sujar sua parede ou seus móveis.',
    items: ['Serpentina e aletas', 'Filtros e bandeja', 'Turbina (ventilador)', 'Carenagem e dreno'],
    message:
      'Olá, Boreal Clean! Gostaria de um orçamento para limpeza de ar-condicionado (evaporadora).',
  },
]

const benefits = [
  { icon: Bug, title: 'Menos ácaros e fungos', text: 'Ideal para quem tem rinite, alergias, crianças e pets em casa.' },
  { icon: Wind, title: 'Ar mais saudável', text: 'Evaporadora limpa não espalha poeira e mau cheiro pelo ambiente.' },
  { icon: Zap, title: 'Ar-condicionado mais eficiente', text: 'Com as aletas livres, o aparelho gela melhor e trabalha menos.' },
  { icon: Droplets, title: 'Manchas e odores removidos', text: 'Extração profunda que tira o que fica escondido nas fibras.' },
  { icon: Home, title: 'Atendimento no seu endereço', text: 'Vamos até você com todo o equipamento necessário.' },
  { icon: ShieldCheck, title: 'Cuidado com sua casa', text: 'Proteção do ambiente durante o serviço e tudo limpo no final.' },
]

const steps = [
  { title: 'Chame no WhatsApp', text: 'Conte o que precisa limpar — fotos ajudam a dar um orçamento mais preciso.' },
  { title: 'Agende o melhor horário', text: 'Combinamos o dia e o horário que encaixam na sua rotina.' },
  { title: 'Aproveite tudo limpinho', text: 'Fazemos o serviço no local e você já sente a diferença.' },
]

const faqs = [
  {
    q: 'Quanto tempo o sofá leva para secar?',
    a: 'Depende do tecido, da ventilação e do clima, mas normalmente algumas horas. Deixar o ambiente arejado ajuda a acelerar a secagem.',
  },
  {
    q: 'De quanto em quanto tempo devo limpar o ar-condicionado?',
    a: 'Os filtros devem ser lavados com frequência, e a limpeza completa da evaporadora é recomendada periodicamente — com mais frequência em aparelhos de uso diário. Fale com a gente para avaliarmos o seu caso.',
  },
  {
    q: 'A limpeza suja a parede ou os móveis?',
    a: 'Não. Usamos bolsa coletora na evaporadora e protegemos a área de trabalho durante todo o serviço.',
  },
  {
    q: 'Como faço um orçamento?',
    a: 'É só chamar no WhatsApp contando o tipo de serviço, a quantidade de peças ou aparelhos e, se possível, enviar fotos. Respondemos com o valor e os horários disponíveis.',
  },
]

function Landing() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <HowItWorks />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-aurora to-glacier text-night">
        <Sparkles className="size-5" strokeWidth={2.4} />
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-night'}`}>
        Boreal <span className="text-aurora">Clean</span>
      </span>
    </a>
  )
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Logo light />
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#beneficios" className="hover:text-white">Benefícios</a>
          <a href="#como-funciona" className="hover:text-white">Como funciona</a>
          <a href="#duvidas" className="hover:text-white">Dúvidas</a>
        </nav>
        <WhatsAppButton size="sm" label="Orçamento" />
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="aurora-bg relative overflow-hidden text-white">
      <div className="aurora-blob pointer-events-none absolute -left-32 top-10 size-[28rem] rounded-full bg-aurora/20 blur-3xl" />
      <div className="aurora-blob pointer-events-none absolute -right-20 bottom-0 size-[24rem] rounded-full bg-glacier/20 blur-3xl [animation-delay:-6s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-40">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-glacier backdrop-blur">
            <Sparkles className="size-4" /> Higienização profissional no seu endereço
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Estofados limpos.
            <br />
            <span className="bg-gradient-to-r from-aurora to-glacier bg-clip-text text-transparent">
              Ar puro de verdade.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            A Boreal Clean faz a limpeza profunda de sofás, colchões, poltronas e evaporadoras de
            ar-condicionado. Menos ácaros, fungos e odores — mais conforto e saúde para sua casa ou
            empresa.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg" label="Pedir orçamento no WhatsApp" className="whats-pulse" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-medium text-white transition hover:bg-white/10"
            >
              Ver serviços <ChevronDown className="size-4" />
            </a>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {['Orçamento sem compromisso', 'Equipamento profissional', 'Atendimento residencial e comercial'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="size-4 text-aurora" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-aurora/40 to-glacier/10 blur-xl" />
          <img
            src={img('hero-sofa.png', 1200)}
            srcSet={`${img('hero-sofa.png', 700)} 700w, ${img('hero-sofa.png', 1200)} 1200w`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt="Profissional higienizando um sofá cinza com extratora em uma sala iluminada"
            className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl ring-1 ring-white/10"
            fetchPriority="high"
          />
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-night shadow-xl">
            <span className="grid size-11 place-items-center rounded-xl bg-ice text-deep">
              <CalendarCheck className="size-6" />
            </span>
            <div>
              <p className="text-sm text-night/60">Agende pelo WhatsApp</p>
              <p className="font-display text-lg font-bold">{WHATSAPP_DISPLAY}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-whats-dark">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-night sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-night/65">{text}</p>}
    </div>
  )
}

function Services() {
  return (
    <section id="servicos" className="px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        eyebrow="Nossos serviços"
        title="Duas especialidades, um só cuidado"
        text="Tudo o que você usa todos os dias — e que acumula sujeira sem você perceber."
      />
      <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-night/5 transition hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={img(s.image, 900)}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 grid size-12 place-items-center rounded-2xl bg-white/90 text-deep shadow backdrop-blur">
                <s.icon className="size-6" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <h3 className="font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-night/70">{s.description}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium">
                    <span className="grid size-5 place-items-center rounded-full bg-aurora/20 text-whats-dark">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2 lg:mt-auto">
                <WhatsAppButton message={s.message} label="Quero orçamento deste serviço" className="w-full sm:w-auto" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section id="beneficios" className="bg-ice px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow="Por que limpar" title="Mais saúde, conforto e durabilidade" />
      <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="rounded-3xl bg-white p-7 ring-1 ring-night/5">
            <span className="grid size-12 place-items-center rounded-2xl bg-night text-aurora">
              <b.icon className="size-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{b.title}</h3>
            <p className="mt-2 leading-relaxed text-night/65">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow="Como funciona" title="Simples como mandar uma mensagem" />
      <ol className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="relative rounded-3xl border border-night/10 bg-white p-8">
            <span className="font-display text-6xl font-extrabold text-glacier/60">0{i + 1}</span>
            <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-night/65">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 text-center">
        <WhatsAppButton size="lg" label="Começar agora" />
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="duvidas" className="bg-ice px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas que sempre recebemos" />
      <div className="mx-auto mt-14 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl bg-white p-6 ring-1 ring-night/5 open:shadow-md">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
              {f.q}
              <ChevronDown className="size-5 shrink-0 text-deep transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 leading-relaxed text-night/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="aurora-bg relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-16 text-center text-white sm:px-16 sm:py-20">
        <div className="aurora-blob pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-aurora/25 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Seu sofá e seu ar-condicionado merecem uma Boreal Clean.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            Mande uma mensagem agora e receba seu orçamento sem compromisso.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <WhatsAppButton size="lg" label="Falar com a Boreal Clean" />
            <span className="text-sm text-white/60">WhatsApp {WHATSAPP_DISPLAY}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-night/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-night/60 md:flex-row">
        <Logo />
        <p>Limpeza de estofados e evaporadoras de ar-condicionado</p>
        <a
          href={whatsappLink(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium text-whats-dark hover:underline"
        >
          <WhatsAppIcon className="size-4" /> {WHATSAPP_DISPLAY}
        </a>
      </div>
      <p className="mt-8 text-center text-xs text-night/40">
        © {new Date().getFullYear()} Boreal Clean. Todos os direitos reservados.
      </p>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Boreal Clean no WhatsApp"
      className="whats-pulse fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-whats text-white shadow-2xl transition hover:scale-105"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  )
}
