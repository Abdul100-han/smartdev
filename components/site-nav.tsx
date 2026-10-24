'use client'

import { ArrowUpRight, Code2, Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const linkClassName =
  'rounded-md text-[13px] font-medium text-[#8f9b98] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300'

const contactClassName =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-[13px] font-semibold text-[#07110d] transition-colors hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 motion-reduce:transition-none'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <div className="sticky top-0 z-20 border-b border-white/10 bg-[#080b0d]">
    <nav
      className="mx-auto flex w-full max-w-6xl flex-col px-6 lg:px-8"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between py-4">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          aria-label="Abdulsalam M. Abubakar home"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-emerald-300">
            <Code2 aria-hidden="true" className="size-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-tight text-white">
              Abdulsalam M. Abubakar
            </span>
            <span className="mt-0.5 hidden text-xs text-[#8d9a95] sm:block">
              Open to roles and contract work
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClassName}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className={contactClassName}>
            Get in touch
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="rounded-lg border border-white/10 p-2 text-[#a1aaa7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-white/10 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-1 py-2.5 text-sm font-medium text-[#c5d0cc] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className={`${contactClassName} mt-2`} onClick={closeMenu}>
              Get in touch
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </div>
      ) : null}
    </nav>
    </div>
  )
}
