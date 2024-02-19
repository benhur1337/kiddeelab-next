"use client"

import Link from "next/link"
import { useState } from "react"

import Image from 'next/image'

export default function CarouselChild(props:{heading:string, bg:string, color:string, position:string, link:string, button:any}){

    const background = `url(${props.bg})`

    const [link, setLink] = useState(props.link)

    const [displayButton, setDisplayButton] = useState('block')
  
    return(
        <div className="flex flex-col justify-center items-center drop-shadow-md mx-2 rounded min-h-[250px] min-w-[250px]">
            <Image
                src={props.bg}
                height={500}
                width={500}
                alt={props.heading}
                className="absolute h-[250px] w-[250px] object-cover rounded-xl"
            />
            <div className="absolute bg-black h-[250px] w-[250px] rounded-xl" style={{opacity:'10%'}} />
            <div className="flex flex-col justify-center items-center" style={{zIndex:'2'}}>
                <div className="text-4xl tracking-tighter leading-3 mb-2 font-extrabold text-white drop-shadow">{props.heading}</div>
                <Link style={{display: displayButton}} className='text-md mt-4 text-sky-500' href={link}><button className='rounded bg-orange-500 text-white px-2 py-1 font-semibold'>Read more</button></Link>
            </div>
        </div>
    )
}