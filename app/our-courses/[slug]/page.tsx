import CustomScroll from "@/app/components/customScroll"
import ContentBox from "@/app/components/contentbox"

import { getCourse } from "@/app/lib/data"

import Link from 'next/link'




export default async function Page({ params } : { params: { slug: string }}){

    const courseData = await getCourse(params.slug) || {slug:'', heading: '', content:[{paragraph:''}]}

    return(
        <>
            <div className="flex flex-col gap-6 p-4 max-w-[900px] mx-auto">
                <div className="text-xl text-orange-500 tracking-tighter font-semibold">/ <Link href='/our-courses'> our-courses </Link> / <Link className="underline underline-offset-4 decoration-solid" href={`/our-courses/${params.slug}`}>{courseData.slug}</Link></div>
                <div className="text-5xl tracking-tighter font-extrabold text-orange-500">{courseData.heading}</div>
                {
                    courseData.content.map(item => <div className="text-xl text-sky-500 indent-6" key={item.paragraph}>{item.paragraph}</div>)
                }
            </div>
        </>
    )
}


/*

const content = [
    {
        heading: "Unlock Creativity: Discover the power of 3D modeling to turn your imagination into reality.",
    },
    {
        info: "In the realm of 3D design, creativity knows no bounds. From sculpting intricate characters to crafting immersive environments, the world of three-dimensional art offers endless possibilities for expression and innovation. In our 3D Design Class, you'll embark on a transformative journey where you'll learn to harness the power of digital tools to bring your imagination to life. Through hands-on projects and expert guidance, you'll master the fundamentals of 3D modeling, texture mapping, lighting, and rendering. With each stroke of your virtual brush, you'll refine your skills and unlock new levels of creativity. Join us and discover the magic of 3D design today!"
    }
]


const images = [1, 2, 3, 4, 5, 6, 7].map((item) => ({ src: `/3d/3d (${item}).jpg` }))

export default function Page() {


    return (
        <div className="flex flex-col md:max-w-6xl md:mx-auto">
            <div className="p-4">
                {
                    content.map((item: any, key: any) => <ContentBox key={key} heading={item.heading} info={item.info} />)
                }
            </div>
            <CustomScroll image={images} />
        </div>
    )
}
*/