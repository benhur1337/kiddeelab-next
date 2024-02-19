"use client";

import Image from "next/image";
import { useState } from 'react'

import { motion } from 'framer-motion'

export default function MultiSlider(props:{data:any}){

    const images = props.data
    const lengthOfImageArray = images.length

    const [currentImage, setCurrentImage] = useState(images[0])

    const [key, setKey] = useState(0)

    function decreaseCount(){

        const getArrayIndex = images.indexOf(currentImage)

        if(getArrayIndex == 0){
            setCurrentImage(images[lengthOfImageArray - 1])
        }

        if(getArrayIndex > 0){
            setCurrentImage(images[getArrayIndex - 1])
        }

        setKey(key + 1)

    }

    function increaseCount(){
        const getArrayIndex = images.indexOf(currentImage)

        if(getArrayIndex == (lengthOfImageArray - 1)){
            setCurrentImage(images[0])
        }

        if(getArrayIndex < (lengthOfImageArray - 1)){
            setCurrentImage(images[getArrayIndex + 1])
        }

        setKey(key + 1)
    }
    

    return(
        <div className="flex flex-row justify-between items-center relative select-none">
            <button className="absolute left-1 lg:left-[-5rem] bg-orange-500 opacity-90 md:opacity-100 text-white p-4 rounded-3xl text-md md:text-3xl font-bold" onClick={decreaseCount}>{'<'}</button>
            <motion.div key={key} initial={{opacity:0, y:-50}} animate={{opacity:1, y:0}} transition={{ duration: 1.5 }} className="p-4">
                <Image className="rounded-lg" src={currentImage.src} height={1000} width={1000} alt="Kiddee Lab"></Image>
            </motion.div>
            <button className="absolute right-1 lg:right-[-5rem] bg-orange-500 opacity-90 md:opacity-100 text-white p-4 rounded-3xl text-md md:text-3xl font-bold" onClick={increaseCount}>{'>'}</button>
        </div>
        
    ) 
}
