


import Carousel from "./components/carousel";
import CarouselChild from "./components/carouselChild";
import Link from "next/link";
import Image from "next/image";

import Head from "next/head";


import Player from "./components/youtube";
import SliderCarousel from "./components/sliderCarousel";
import { fetchCertified } from "./lib/data";
import MultiSlider from "./components/multiSlider";


function Hero() {
  

  return (
    <div className="flex md:flex-row flex-col md:justify-between md:gap-x-4 md:items-center gap-y-4 p-4">
      <div className="flex flex-col gap-y-2 md:pr-[5rem]">
        <div className="text-5xl tracking-tighter font-extrabold text-orange-500 md:text-7xl">
          Kiddee Lab
        </div>
        <div className="text-xl font-semibold text-sky-500 md:text-2xl">
          Robotics and Coding Training School for 5-18 years old.
        </div>
        <Link className="text-xl mt-4 text-sky-500" href="/our-courses">
          <button className="rounded bg-orange-500 text-white px-2 py-1 font-semibold">
            Our Courses
          </button>
        </Link>
      </div>

      <Player/>
      
    </div>
  );
}



function WhatsNew() {

  const data = [
    {
      src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/home/announcements/3D%20Camp%20for%207-8%20yrs-MOurjUtAitFTgfRRce6p0Q9PzIsD3L.png',
      label:'STEAM Camp for Kids Feb 2024'
    },
    {
      src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/home/announcements/5-7%20yrs%20camp-4bCcLv15znQ4goQUZunK2xDiviB5jV.png',
      label:'STEAM Camp for Kids Feb 2024'
    },
    {
      src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/home/announcements/Digital%20Literacy%20Workshop-2-n940KkRNlmm7AWiVZamzTztpz20gFE.png',
      label:'STEAM Camp for Kids Feb 2024'
    },
    {
      src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/home/announcements/S__60432538-Mkt4Q0xboCMblWHk7XzGTFWvMhmXWe.jpg',
      label:'STEAM Camp for Kids Feb 2024'
    },
    {
      src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/home/announcements/S__60432540-o3uTQpOiPvoUr5glcsJtLAwXPcPU6g.jpg',
      label:'STEAM Camp for Kids Feb 2024'
    }
  ]

  return (
    <div>
      <div className="text-4xl md:text-5xl tracking-tighter font-extrabold text-orange-500 p-4">
        What's New
      </div>
      <div >
        <MultiSlider data={data}/>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col p-4 md:gap-y-4 md:my-10">
      <div className="text-2xl md:text-5xl tracking-tighter font-extrabold text-orange-500">
        About us
      </div>
      <div className="text-5xl md:text-8xl tracking-tighter leading-none font-semibold text-sky-500 mb-4">
        More than coding.
      </div>
      <br />
      <div className="flex flex-col gap-y-4 md:gap-x-9 md:items-start">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Image
            src="/img/codey.jpg"
            height={1000}
            width={1000}
            className="h-[350px] w-screen md:w-1/2 object-cover rounded-md drop-shadow-lg"
            alt=""
          />
          <div className="flex flex-col md:px-11">
            <div className="text-2xl md:text-4xl md:mb-4 tracking-tighter leading-loose font-extrabold text-orange-500">
              What is Kiddee Lab?
            </div>
            <div className="text-lg md:text-lg tracking-tighter leading-tight text-sky-500">
              Kiddee Lab is the place for children and young adults to learn
              robotics and programming. We offer courses that teach Arduino,
              IoT, Mobile Application Development, and many more.{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Image
            src="/img/tinkamo.jpg"
            height={1000}
            width={1000}
            className="h-[350px] w-screen md:w-1/2 object-cover rounded-md md:order-last drop-shadow-lg"
            alt=""
          />
          <div className="flex flex-col md:px-11">
            <div className="text-2xl md:text-4xl md:mb-4 tracking-tighter leading-loose font-extrabold text-orange-500">
              What we offer
            </div>
            <div className="text-lg md:text-lg tracking-tighter leading-tight text-sky-500">
              We offer approved curriculums with well-structured assessments at
              the end of the course. Our instructors are highly qualified
              engineering graduates that are passionate in teaching the young
              generation using STEM education.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const OurCourses = (props: { heading: string; link: string; image: any }) => {
  return (
    <div
      className="drop-shadow-md bg-white flex flex-col items-center justify-center mr-4 rounded-xl p-4"
      style={{
        minWidth: "300px",
        maxWidth: "300px",
        minHeight: "300px",
      }}
    >
      <Image
        src={props.image}
        className="rounded-xl mb-2"
        height={500}
        width={500}
        alt=""
        priority={true}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div className="w-full text-[2rem] mb-2 tracking-tighter leading-tight font-bold text-orange-500">
        {props.heading}
      </div>
      <div className="w-full">
        <Link href={props.link}>
          <button className="bg-orange-500 px-2 py-1 rounded-md text-white font-semibold">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

function Courses() {
  const courses = [
    {
      heading: "Tinkamo",
      link: "/our-courses/tinkamo",
      image: "/img/tinkamo.jpg",
    },
    {
      heading: "MBot",
      link: "/our-courses/mbot",
      image: "/img/mbot.jpg",
    },
    {
      heading: "Codey Rocky",
      link: "/our-courses/codey-rocky",
      image: "/img/codey.jpg",
    },
    {
      heading: "Movie & Game",
      link: "/our-courses/movie-and-game",
      image: "/img/movie.jpg",
    },
    {
      heading: "Python",
      link: "/our-courses/python",
      image: "/img/python.jpg",
    },
    {
      heading: "IOT",
      link: "/our-courses/iot",
      image: "/img/iot.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-5xl md:text-7xl tracking-tighter leading-none font-extrabold text-orange-500 p-4">
        Our Courses
      </div>
      <Carousel>
        {courses.map((item: any) => (
          <OurCourses
            key={item.heading}
            heading={item.heading}
            link={item.link}
            image={item.image}
          />
        ))}
      </Carousel>
      <div>
        <div className="flex flex-col justify-center items-center gap-y-2 py-10 px-2 md:my-20">
          <div className="text-4xl tracking-tighter text-center leading-none font-extrabold text-orange-500 mb-4 md:text-8xl">
            We encourage imagination.
          </div>
          <div className="text-md tracking-tighter text-center leading-tight text-sky-500 md:text-2xl">
            We believe that STEM education can inspire growth and innovation, we
            offer courses which allow students to create base on their
            imagination.
          </div>
          <Link className="text-xl mt-4 text-sky-500" href="/our-courses">
            <button className="rounded bg-orange-500 text-white px-2 py-1 font-semibold">
              Our Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

async function Certified() {

  const data = await fetchCertified()

  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-4xl tracking-tighter text-center leading-none font-extrabold text-orange-500 mb-4 p-4 md:text-6xl">
        Our students are certified.
      </div>
      <SliderCarousel data={data}/>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4 md:max-w-[900px] md:mx-auto">
      <Hero />
      <WhatsNew />
      <About />
      <Courses />
      <Certified />
    </main>
  );
}
