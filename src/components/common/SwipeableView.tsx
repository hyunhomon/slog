import React, { useState, useRef } from "react";
import styled from "styled-components";

const SwipeableViewContainer = styled.div<{$dir: boolean}>`
    width: 100%;
    height: 100%;

    flex-direction: ${props => props.$dir ? "row" : "column"};
    overflow: hidden;
`;
const SwipeableViewWrapper = styled.div<{$dir: boolean, $translate: number}>`
    width: 100%;
    height: 100%;

    flex-direction: ${props => props.$dir ? "row" : "column"};
    
    transition: transform 0.4s ease;
    transform: ${props => `translate${props.$dir ? "X" : "Y"}(-${props.$translate}%)`};
`;

interface SwipeableViewProps {
    children: React.ReactNode,
    index: number,
    setIndex: (index: number) => void,
    direction?: 'horizontal' | 'vertical'
};

const SwipeableView = ({ children, index, setIndex, direction = "horizontal" }: SwipeableViewProps) => {
    const [start, setStart] = useState(0);
    const [current, setCurrent] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const dir = direction === "horizontal";
    const translateContainer = (current >= 60 ? (index + (current / (containerRef.current?.[dir ? "clientWidth" : "clientHeight"] || 1))) : index) * 100;

    const handleTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation();
        setStart(dir ? e.touches[0].clientX : e.touches[0].clientY);
        setIsDragging(true);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        e.stopPropagation();
        if (!isDragging) return;
        setCurrent(start - (dir ? e.touches[0].clientX : e.touches[0].clientY));
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsDragging(false);
        const swipeThreshold = 100;
        if (current < -swipeThreshold && index > 0) setIndex(index - 1);
        else if (current > swipeThreshold && index < React.Children.count(children) - 1) setIndex(index + 1);
        setCurrent(0);
    };

    return (
        <SwipeableViewContainer
            $dir={dir}
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <SwipeableViewWrapper $dir={dir} $translate={translateContainer}>
                {React.Children.map(children, (child, idx) => (
                    <div key={idx} style={{ flex: "1 0 100%" }}>
                        {child}
                    </div>
                ))}
            </SwipeableViewWrapper>
        </SwipeableViewContainer>
    );
};

export default SwipeableView;