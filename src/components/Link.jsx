import { EVENTS } from "../utils/consts"

export function navigate(href){
    window.history.pushState({},'',href)
  
    const navigattionEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigattionEvent)
}

export default function Link ({target, to, ...props}) {
    const handleClick = () =>{
        navigate(to)
    }

    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}