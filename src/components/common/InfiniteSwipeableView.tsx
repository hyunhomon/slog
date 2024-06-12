import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const InfiniteSwipeableViewContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const InfiniteSwipeableViewWrapper = styled.div<{$dir: boolean, $translate: number, $transitioning: boolean}>`
    width: 100%;
    height: 100%;

    flex-direction: ${props => props.$dir ? "row" : "column"};
    
    transition: ${props => props.$transitioning ? "transform 0.4s ease" : "none"};
    transform: ${props => `translate${props.$dir ? "X" : "Y"}(-${props.$translate}%)`};
`;

interface InfiniteSwipeableViewProps {
    children: React.ReactNode,
    state: 'prev' | 'none' | 'next',
    setState: (state: 'prev' | 'none' | 'next') => void,
    direction?: 'horizontal' | 'vertical',
    stopPropagation?: boolean
};

const InfiniteSwipeableView = ({ children, state, setState, direction = "vertical", stopPropagation = true }: InfiniteSwipeableViewProps) => {
    const [translate, setTranslate] = useState(1);
    const [transitioning, setTransitioning] = useState(false);
    const [start, setStart] = useState(0);
    const [current, setCurrent] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const dir = direction === "horizontal";
    const translateContainer = (Math.abs(current) > 60 ? (translate + (current / (containerRef.current?.[dir ? "clientWidth" : "clientHeight"] || 1))) : translate) * 100;

    useEffect(() => {
        if(state !== "none") handleSwipe(state);
    }, [state])

    const handleTouchStart = (e: React.TouchEvent) => {
        if(stopPropagation) e.stopPropagation();
        setStart(dir ? e.touches[0].clientX : e.touches[0].clientY);
        setIsDragging(true);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if(stopPropagation) e.stopPropagation();
        if (!isDragging) return;
        setCurrent(start - (dir ? e.touches[0].clientX : e.touches[0].clientY));
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if(stopPropagation) e.stopPropagation();
        setIsDragging(false);
        const swipeThreshold = 100;
        if (current < -swipeThreshold) handleSwipe("prev");
        else if (current > swipeThreshold) handleSwipe("next");
        setCurrent(0);
    };

    const handleSwipe = (direction: 'prev' | 'next') => {
        setTransitioning(true);
        setTranslate(direction === "prev" ? 0 : 2);
        setTimeout(() => {
            setTransitioning(false)
            setTranslate(1);
        }, 400);
        setState(direction);
    };

    return (
        <InfiniteSwipeableViewContainer
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <InfiniteSwipeableViewWrapper $dir={dir} $translate={translateContainer} $transitioning={transitioning}>
                <div style={{ flex: "1 0 100%" }}>
                    {children}
                </div>
                <div style={{ flex: "1 0 100%" }}>
                    {children}
                </div>
                <div style={{ flex: "1 0 100%" }}>
                    {children}
                </div>
            </InfiniteSwipeableViewWrapper>
        </InfiniteSwipeableViewContainer>
    );
};

export default InfiniteSwipeableView;