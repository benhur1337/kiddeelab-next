
export default function ContentBox(props: { heading: any, info:any}){
    return(
        <div className="select-none">
            <div className="text-6xl tracking-tighter font-extrabold text-sky-500">{props.heading}</div>
            <div className="text-xl tracking-tighter text-sky-500">{props.info}</div>
            <br />
        </div>
    )
}