import { FC, MouseEventHandler, useRef, useState } from 'react';
import styles from './tooltip.module.scss';
import clsx from 'clsx';

type TooltipProps = {
    children: JSX.Element | string;
    text: string;
};

export const Tooltip: FC<TooltipProps> = ({ children, text }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        if (containerRef.current && contentRef.current) {
            const posX = `${e.clientX - containerRef.current.offsetLeft + 20}px`;
            const posY = `${e.clientY - containerRef.current.offsetTop + 20}px`;
            contentRef.current.style.top = posY;
            contentRef.current.style.left = posX;
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={styles.tooltip}
        >
            {children}
            <div
                className={clsx(styles.tooltip__content, {
                    [styles.tooltip__visible]: isHovered,
                })}
                ref={contentRef}
            >
                {text}
            </div>
        </div>
    );
};
