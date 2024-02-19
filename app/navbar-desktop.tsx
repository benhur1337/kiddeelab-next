"use client"

import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'


const menuItems = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Our Courses',
        route: '/our-courses'
    },
    {
        label:'Workshops',
        route:'/workshops'
    },
    {
        label: 'Our Team',
        route: '/our-team'
    },
    {
        label: 'Contact',
        route: '/contact'
    }
]

export default function NavbarDesktop() {
    const pathname = usePathname()

    return (
        <div className='hidden lg:flex flex-row justify-between items-center p-6 border-b fixed w-screen z-10 bg-white'>
            <Link href='/'><Image
                src='/logo.png'
                height={250}
                width={250}
                className='h-[80px] w-[80px] object-contain'
                alt='Kiddee Lab Logo'
            /></Link>
            <div className='flex flex-row gap-4'>

                {
                    menuItems.map((item: any) => (
                        <Link className={clsx('text-xl font-bold tracking-tighter transition-all duration-1000 text-sky-500 px-4 py-2', {
                            'text-white bg-orange-500 rounded-[50px]': pathname === item.route
                        })} key={item.label} href={item.route}>{item.label}</Link>
                    ))
                }

                <Link href='https://page.line.me/kiddeelab'><button className='rounded transition-all border font-bold text-xl border-orange-500 bg-white text-orange-500 hover:bg-orange-500 duration-500 hover:text-white px-4 py-2'>Free Trial</button></Link>

            </div>
        </div>
    )
}