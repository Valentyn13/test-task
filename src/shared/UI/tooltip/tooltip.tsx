
import { FC, MouseEventHandler, useRef, useState } from 'react'
import styles from './tooltip.module.scss'
import clsx from 'clsx'

type TooltipProps = {
 children: JSX.Element | string
 text: string
}

export const Tooltip:FC<TooltipProps> = ({children, text}) => {
    const containerRef = useRef<HTMLDivElement| null>(null)
    const [isHovered, setIsHovered] = useState(false)


    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleMouseMove:MouseEventHandler<HTMLDivElement> = (e) => {
        const posX = `${e.clientX}px`;
        const posY = `${e.clientY}px`;
        console.log(posX, posY)
        if(containerRef.current){
            containerRef.current.style.top = posY;
            containerRef.current.style.left = posX;
        }
    }

    return(
        <div onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={styles.tooltip}>
            {children}
            <div className={clsx(styles.tooltip__content, {
                [styles.tooltip__visible]: isHovered
            })}
            ref={containerRef}
            >{text}</div>
        </div>
    )
}