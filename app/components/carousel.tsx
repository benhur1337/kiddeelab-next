import { url } from 'inspector'
import { Children } from 'react'



export default function Carousel(props:{ children:any }){
    return(
        <div className='flex flex-row flex-nowrap overflow-x-scroll p-4 gap-y-4 min-w-0'>
            { props.children }
        </div>
    )
}