"use client"

import {APIProvider, Map, AdvancedMarker, InfoWindow} from '@vis.gl/react-google-maps'
import Link from 'next/link'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook, faSquareInstagram, faLine} from '@fortawesome/free-brands-svg-icons'

function MapContainer(props:{heading:string, subheading:string, location:string, lat: number, lng: number, children:any}){


    const position = {
        lat: props.lat,
        lng: props.lng
    }

    return(
        <div className='flex flex-col md:justify-between md:items-center md:flex-row gap-4 mb-4'>
            <div className='md:max-w-md'>
                <div className="text-4xl md:text-6xl tracking-tighter font-extrabold text-sky-500">{props.heading}</div>
                <div className="text-xl md:text-4xl tracking-tighter font-extrabold text-sky-500">{props.subheading}</div>
                <div className="text-md md:text-2xl tracking-tighter text-sky-500">{props.location}</div>
                <br />
                <div className='flex flex-col'>
                    {props.children}
                </div>
            </div>
            
            <br />

            

            <APIProvider apiKey="AIzaSyDACwrpeoGSzc_4BA2UVBdBEVY5zQNM8ro">
                <div className='h-96 md:w-96'>
                    <Map
                        style={{borderRadius:'10px'}}
                        zoom={15}
                        center={position}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                        mapId='33994c5bcc715dff'
                    >
                        <AdvancedMarker position={position}/>
                    </Map>
                </div>
                
            </APIProvider>
        </div>
    )
}


function Location(){
    return(
        <div className="flex flex-col gap-y-4 p-4">
            <div className="text-5xl tracking-tighter leading-none font-extrabold text-orange-500 mb-4 md:text-7xl">Contact us</div>
            <MapContainer heading='Kiddee Lab' subheading="Lasalle's Avenue" location="Lasalle's Avenue บางนา Bang Na, Bangkok 10260" lat={13.657026885959269} lng={100.62404832439242}>
                <div className='flex flex-row'>
                <Link className='flex flex-row items-center' href='https://www.instagram.com/kiddeelab'><FontAwesomeIcon className='text-3xl mr-2 text-sky-500' icon={faSquareInstagram}/></Link>
                <Link className='flex flex-row items-center' href='https://www.facebook.com/kiddeelab/'><FontAwesomeIcon className='text-3xl mr-2 text-sky-500' icon={faSquareFacebook}/></Link>
                <Link className='flex flex-row items-center' href='https://page.line.me/kiddeelab'><FontAwesomeIcon className='text-[1.65rem] mr-2 text-sky-500' icon={faLine}/></Link>
                </div>
                <br />
                <a className='md:text-2xl font-semibold text-xl text-sky-500' href={`tel:${+66838871199}`}><button className='rounded bg-orange-500 text-white px-2 py-1'>Contact Lasalle Branch</button></a>
            </MapContainer>
            <MapContainer heading='Kiddee Lab' subheading="Chaiyapruk Branch" location="99/9 Moo 5 (C321) The Crystal PTT Chaiyapruek, Nonthaburi" lat={13.922764995551884} lng={100.47466174602343}>
                <div className="flex flex-row">
                <Link className='flex flex-row items-center' href='https://www.facebook.com/KiddeeLab.Chaiyapruk'><FontAwesomeIcon className='text-3xl mr-2 text-sky-500' icon={faSquareFacebook}/></Link>
                <Link className='flex flex-row items-center' href='https://line.me/R/ti/p/@373uxkbp'><FontAwesomeIcon className='text-[1.65rem] mr-2 text-sky-500' icon={faLine}/></Link>
                </div>
                <br />
                <a className='md:text-2xl font-semibold text-xl text-sky-500' href={`tel:${+6665695465}`}><button className='rounded bg-orange-500 text-white px-2 py-1'>Contact Chaiyapruk Branch</button></a>
            </MapContainer>
        </div>
    )
}

export default function Contact(){

    return(
        <div className='flex flex-col gap-y-4 p-4 max-w-[900px] md:mx-auto'>
            <Location/>
        </div>
    )
}
