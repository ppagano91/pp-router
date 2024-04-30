import { EVENTS, BUTTONS } from "../utils/consts"

export function navigate(href){
    window.history.pushState({},'',href)
  
    const navigattionEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigattionEvent)
}

export default function Link ({target, to, resetScroll, ...props}) {
    const handleClick = (event) =>{
        
        const isMainEvent = event.button === BUTTONS.primary        
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'
        
        if (isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to)
            resetScroll && window.scrollTo(0, 0)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}