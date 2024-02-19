import Carousel from "../components/carousel"
import Image from 'next/image'

const admin = [
    {
        name:'Mod',
        position:'Admin',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/Mod-f2a3fB41wUydsFeVjXV5wIlunXNcpU.jpg'
    },
    {
        name:'Nott',
        position:'Consultant',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/Nott-9pQZPQITiV8aG3EhzdeMrq47G5GjNA.jpg'
    }
]

const support = [
    {
        name:'Xavier',
        position:'Engineering Specialist',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/xavier-R3hM0s0sSz6kU0jLeZQ2oivE4jb3sp.jpg'
    },
    {
        name:'Min',
        position:'Engineering Specialist',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/min-VTLnGeFTXRfBc7hf8NLCKwKuZggEzH.jpg'
    },
    {
        name:'Fiel',
        position:'Programmer',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/Fiel-r7Bz9B3R3aL8NaODwEHJc6rHce1pV9.jpg'
    },
    {
        name:'Ben',
        position:'Programmer',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/ben-MPWqfSGNEfKT02uI6n80wM0Jr9XyNt.jpg'
    }
]

const stem = [
    {
        name:'Anthony',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/Anthony-Rwsr2LAXxG74GdNiyU6iV1302aiz9S.jpg'
    },
    {
        name:'Benz',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/Benz-GUWpPFlROTTZaAnwex8hKlnidsZjTY.jpg'
    },
    {
        name:'Penguin',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/guin-2qvNSHF0Y0mPoOsw2MGZhRBkQmBaFn.jpg'
    },
    {
        name:'Shareef',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/reef-hC0JHsfdal96wmrlgWlDyWbpF5mFnP.jpg'
    },
    {
        name:'Gun',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/Gun-pwL4Ao4JLahc9C4itpPQfutZ1w1aZ5.jpg'
    },
    {
        name:'Pan',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/pan-9uAr5izkbZmmbINJxhBpWA1VpUfNf9.jpg'
    },
    {
        name:'Sea',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/Sea-V2IUL1qZlTBrsRhX1ILUPRVVsr9R3p.jpg'
    },
    {
        name:'Third',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/third-RiinzrE3TCgGOiNgBV7n1ehi0WyAvG.jpg'
    },
    {
        name:'Wern',
        position:'STEM Teacher',
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/team/wern-GDq2xqs6UI44A2jicjKdKfBdVN3or4.jpg'
    }
]


const Member = (props: { name: string, position: string, src:string }) => {

    return(
        <div className="drop-shadow-md bg-white p-4 flex flex-col items-start justify-center mr-4 rounded-xl" style={{
            minWidth:'250px',
            maxWidth:'250px',
            minHeight:'400px'
        }}>
            <Image
                src={props.src}
                className='rounded-xl'
                height={500}
                width={500}
                alt=""
                priority={true}
                style={{height:'100%', objectFit:'cover'}}
            />
            <br />
            <div className="text-4xl font-bold text-sky-500">{props.name}</div>
            <div className="text-xl text-sky-500">{props.position}</div>
        </div>
    )
}

export default function Page(){
    return(
        <>
            <div className="flex flex-col gap-y-4 max-w-[900px] md:mx-auto">
                <div className="p-4">
                    <div className="text-5xl text-orange-500 font-bold tracking-tighter">Admin</div>
                </div>
                <Carousel>
                    {
                        admin.map((member:any, key:any) => (
                                <Member key={key} name={member.name} position={member.position} src={member.src}></Member>
                            )
                        )
                    }
                </Carousel>
                <div className="p-4">
                    <div className="text-5xl text-orange-500 font-bold tracking-tighter">Support</div>
                </div>
                <Carousel>
                    {
                        support.map((member:any, key:any) => (
                                <Member key={key} name={member.name} position={member.position} src={member.src}></Member>
                            )
                        )
                    }
                </Carousel>
                <div className="p-4">
                    <div className="text-5xl text-orange-500 font-bold tracking-tighter">STEM Teachers</div>
                </div>
                <Carousel>
                    {
                        stem.map((member:any, key:any) => (
                                <Member key={key} name={member.name} position={member.position} src={member.src}/>
                            )
                        )
                    }
                </Carousel>
            </div>
        </>
    )
}