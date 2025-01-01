'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const elementId = target.hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Adjust this value based on your header height
          behavior: 'smooth'
        })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Yonathan Daniel</Link>
        <ul className="flex space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

