import Carousel from "../components/carousel"
import Image from 'next/image'
import Link from 'next/link'


const forKids = [
    {
        heading:'Tinkamo',
        link:'/our-courses/tinkamo',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/tinkamo-0O94W3HPMNrbkdmKwb6DkeH42MCM6d.jpg'
    },
    {
        heading:'MBot',
        link:'/our-courses/mbot',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/mbot-Mmw8zy3BWfLMDw4DzQQyEJWfMvYASM.jpg'
    },
    {
        heading:'Codey Rocky',
        link:'/our-courses/codey-rocky',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/codey-eNuF8I821wc6O2oMa7Jq5u1wYdbhJM.jpg'
    },
    {
        heading:'Movie & Game',
        link:'/our-courses/movie-and-game',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/movie-8O6KR6kKIYg4ZHA53IDur2ewYdNtwq.jpg'
    },
]

const forChild = [
    {
        heading:'MBot',
        link:'/our-courses/mbot',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/mbot2-QZfjduMh9ObliOZ2YBWQTlPZtG6Awd.jpg'
    },
    {
        heading:'Movie & Game',
        link:'/our-courses/movie-and-game',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/movie-8O6KR6kKIYg4ZHA53IDur2ewYdNtwq.jpg'
    },
    {
        heading:'3D Design',
        link:'/our-courses/3D',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/3d-Kyptn8wAMJoWRar3Kgpvv0vYwLbpVC.jpg'
    }
]

const forTeen = [
    {
        heading:'Python',
        link:'/our-courses/python',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/python-C2PqDweqgyXy4BzCk1KsJ8S0SzL225.jpg'
    },
    {
        heading:'Arduino',
        link:'/our-courses/arduino',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/iot-Y2sL4EyaZfDESEQvmWi5pUvXQGwR3J.jpg'
    },
    {
        heading:'IOT',
        link:'/our-courses/iot',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/iot-xGqbMbjwwVYqs8OQMCorsHB4ZVINDi'
    },
    {
        heading:'Web Design',
        link:'/our-courses/web-design',
        image:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/web-design-r4FQUFuZnnyTJF0Smhexih7KJ7twPl'
    }
]

const CarouselChild = (props:{image:string, heading:string, link:string}) => {
    return(
        <div className="drop-shadow-md bg-white flex flex-col items-center justify-center mr-4 rounded-xl p-4" style={{
            minWidth:'300px',
            maxWidth:'300px',
            minHeight:'300px'
        }}>
            <Image
                src={props.image}
                className='rounded-xl mb-2'
                height={500}
                width={500}
                alt=""
                priority={true}
                style={{width:'100%', height:'auto', objectFit:'cover'}}
            />
            <div className="w-full text-[2rem] mb-2 tracking-tighter leading-tight font-bold text-orange-500">{props.heading}</div>
            <div className='w-full'><Link href={props.link}><button className='bg-orange-500 px-2 py-1 rounded-md text-white font-semibold'>Read more</button></Link></div>
        </div>
    )
}

function CarouselSection(props:{heading:string, ageGroup:any, children:any}){
    return(
        <div className="flex flex-col gap-y-4 max-w-[900px] mx-auto">
            <div className="text-5xl md:text-6xl tracking-tighter leading-none font-extrabold text-orange-500 mb-4 p-4">{props.heading} <span className="text-3xl text-orange-300 font-semibold">{props.ageGroup}</span></div>
            <Carousel>
                {props.children}
            </Carousel>
        </div>
    )
}


export default function OurCourses(){
    return(
        <div>

            <CarouselSection heading="Kids" ageGroup="(5-8 years old)">
                {
                    forKids.map((val:any) => (
                        <CarouselChild key={val.heading} link={val.link} heading={val.heading} image={val.image}></CarouselChild>
                    ))
                }
                
            </CarouselSection>

            <br />
            <br />

            <CarouselSection heading="Child" ageGroup="(9-12 years old)">
                {
                    forChild.map((val:any) => (
                        <CarouselChild key={val.heading} link={val.link} heading={val.heading} image={val.image}></CarouselChild>
                    ))
                }
                
            </CarouselSection>
            
            <br />
            <br />
            {
          
            <CarouselSection heading="Teen" ageGroup="(13+ years old)">
                {
                    forTeen.map((val:any) => (
                        <CarouselChild key={val.heading} link={val.link} heading={val.heading} image={val.image}></CarouselChild>
                    ))
                }
                
            </CarouselSection>
       
            }
        </div>
    )
}