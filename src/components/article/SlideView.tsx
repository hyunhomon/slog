import { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../consts/Colors";
import ImageLoadingView from "../common/ImageLoadingView";
import TextLoadingView from "../common/TextLoadingView";
import IconButton from "../common/IconButton";
import SwipeableView from "../common/SwipeableView";

const SlideViewContainer = styled.div<{$ratiocheck: boolean}>`
    flex: 1;
    flex-direction: ${props => props.$ratiocheck ? 'row' : 'column'};
`;
const ContentContainer = styled.div`
    min-width: 50%;
    min-height: 50%;
    padding: 16px 24px;

    flex: 1;
    flex-direction: column;
    gap: 12px;

    overflow: scroll;
`;
const CutContainer = styled.div`
    width: 100%;

    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;
const CutContentContainer = styled.div`
    width: 100%;

    justify-content: center;
    align-items: center;
`;

interface SlideViewProps {
    title: string | undefined,
    image: string | undefined,
    content: string | undefined,
    cut: boolean
};

const SlideView = ({ title, image, content, cut }: SlideViewProps) => {
    const [ratioCheck, setRatioCheck] = useState(false);
    const [cutIndex, setCutIndex] = useState(0);
    const [cutList, setCutList] = useState<string[]>([]);

    useEffect(() => {
        setCutList([
            "Cut#1", "Cut#2", "Cut#3"
        ]);
    }, []);

    const resizeListener = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;

        setRatioCheck(ratio >= 1);
    };

    useEffect(() => {
        resizeListener();
        window.addEventListener("resize", resizeListener);
        return () => window.removeEventListener("resize", resizeListener);
    }, []);
    
    return (
        <SlideViewContainer $ratiocheck={ratioCheck}>
            <ImageLoadingView src={image} width="100%" height="100%" radius={0} objectFit="contain" alt="slide-image" />
            <ContentContainer>
                { cut ? (
                    <CutContainer>
                        <IconButton src="prev_circle" size={28} onclick={() => setCutIndex(prev => (prev - 1 + cutList.length) % cutList.length)} />
                        <SwipeableView
                            index={cutIndex}
                            setIndex={idx => setCutIndex(idx)}
                        >
                            { cutList.map((cutContent, idx) => (
                                <CutContentContainer key={idx}>
                                    <TextLoadingView text={cutContent} font="medium" size={32} color={Colors.Black} />
                                </CutContentContainer>
                            ))}
                        </SwipeableView>
                        <IconButton src="next_circle" size={28} onclick={() => setCutIndex(prev => (prev + 1) % cutList.length)} />
                    </CutContainer>
                ) : (
                    <>
                        { title ? <TextLoadingView text={title} font="medium" size={28} color={Colors.Black} /> : <></> }
                        <TextLoadingView text={content} font="regular" size={20} color={Colors.Black} />
                    </>
                )}
            </ContentContainer>
        </SlideViewContainer>
    );
};

export default SlideView;