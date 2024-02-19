"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from "framer-motion"

const menuItems = [
    {
        label:'Home',
        route:'/'
    },
    {
        label:'Our Courses',
        route:'/our-courses'
    },
    {
        label:'Workshops',
        route:'/workshops'
    },
    {
        label:'Our Team',
        route:'/our-team'
    },
    {
        label:'Contact',
        route:'/contact'
    }
]

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: { opacity: 1, height:'100vh', padding:'1rem', display:'flex'},
        closed: { opacity: 0, height:'0vh', padding:'0', display:'none'}
    }

    const style = {
        height:'100vh'
    }

    return(
        <div className='flex flex-col lg:hidden fixed w-screen bg-white drop-shadow-md z-10'>
            <div className='flex flex-row justify-between items-center p-4'>
                <div>
                    <Link href="/" onClick={() => setIsOpen(false)}><Image src="/logo.png" height={300} width={300} style={{height:'60px', width:'60px', objectFit:'contain'}} alt='logo'></Image></Link>
                </div>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)} className={isOpen? `text-4xl font-bold text-sky-600` : `text-5xl font-bold text-sky-600`}>{ isOpen ? '✖' : '≡' }</button>
                </div>
            </div>
            <div>
                <motion.div initial={false} animate={isOpen ? "open" : "closed"} variants={variants} style={style} className='flex flex-col gap-y-4'>
                    {
                        menuItems.map((item:any) => (
                            <Link key={item.label} className='text-2xl font-bold tracking-tighter text-sky-500' onClick={() => setIsOpen(false)} href={item.route}>{item.label}</Link>
                        ))
                    }
                    
                    <Link className='text-2xl font-bold tracking-tighter text-sky-500' onClick={() => setIsOpen(false)} href='https://page.line.me/kiddeelab'><button className='rounded bg-orange-500 text-white px-2 py-1'>Free Trial</button></Link>
                </motion.div>
            </div>
        </div>
    )
}