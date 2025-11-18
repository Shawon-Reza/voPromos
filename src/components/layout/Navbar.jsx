import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'
import logoTitle from '../../assets/icons/logoTitle.png'


const LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#how' },
    { label: 'About', href: '#about' }
]

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(typeof window !== 'undefined' ? (window.location.hash || '#home') : '#home')

    useEffect(() => {
        const onHash = () => setActive(window.location.hash || '#home')
        window.addEventListener('hashchange', onHash)
        return () => window.removeEventListener('hashchange', onHash)
    }, [])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const handleClick = (href, e) => {
        if (e && e.preventDefault) e.preventDefault()
        // try to find the target element id (href like '#services')
        const id = href.replace('#', '')

        // If we're not on the landing page, navigate there and pass state telling it which section to scroll to
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } })
            setActive(href)
            setOpen(false)
            return
        }

        const el = document.getElementById(id)
        // compute offset from header height to avoid hiding behind fixed navbar
        const header = document.querySelector('header')
        const offset = header ? header.offsetHeight : 80
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
        } else {
            // fallback to default hash navigation
            window.location.hash = href
        }
        setActive(href)
        setOpen(false)
    }

    return (
        <header className="w-full sticky top-0 z-[9999]">
            <div className=" mx-auto flex items-center justify-between px-6 md:px-8 py-4">
                <a href="#home" onClick={(e) => handleClick('#home', e)} className="flex items-center gap-3 no-underline">
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>

                    <figure>
                        <img src={logoTitle} alt="VoPromos" />
                    </figure>
                </a>

                {/* desktop links */}
                <nav className="hidden md:flex items-center gap-10">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => handleClick(l.href, e)}
                            className={`text-slate-200/90 text-lg relative py-1 transition-colors duration-150 ${active === l.href ? 'text-white border-b-2 border-sky-400 pb-1' : 'hover:text-white'
                                }`}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* mobile hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setOpen((s) => !s)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        className="p-2 rounded-md focus:outline-none"
                    >
                        <span className="block w-6 h-0.5 bg-slate-200 mb-1 transform transition duration-200" style={{ transform: open ? 'translateY(7px) rotate(45deg)' : undefined }} />
                        <span className="block w-6 h-0.5 bg-slate-200 mb-1 transition-opacity duration-200" style={{ opacity: open ? 0 : 1 }} />
                        <span className="block w-6 h-0.5 bg-slate-200 transition duration-200" style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : undefined }} />
                    </button>
                </div>
            </div>

            {/* mobile menu panel */}
            <div className={`md:hidden w-full transition-max-h duration-300 ease-in-out overflow-hidden ${open ? 'max-h-60' : 'max-h-0'}`}>
                <div className="px-6 pb-4">
                    <nav className="flex flex-col gap-2">
                        {LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={(e) => handleClick(l.href, e)}
                                className={`block text-slate-200/90 py-3 text-base ${active === l.href ? 'text-white' : 'hover:text-white'}`}
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}