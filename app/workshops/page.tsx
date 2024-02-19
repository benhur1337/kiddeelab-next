"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4 max-w-[900px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6 p-4">
        <div>
            <div className="text-6xl tracking-tighter font-extrabold text-orange-500 mb-4">Are you a school or business looking for training?</div>
            <div className="text-4xl tracking-tighter text-sky-500">We offer<span className="font-extrabold"> skill development </span>programs.</div>
            <Link href='https://page.line.me/kiddeelab'><button className="rounded-md bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-1000 font-semibold text-2xl px-4 py-2 mt-4">Book an Appointment</button></Link>
        </div>
        <div>
            <Image
                src='/skill.jpg'
                height={600}
                width={600}
                className="rounded-md"
                alt=""
            />
        </div>
      </div>
    </div>
  );
}
