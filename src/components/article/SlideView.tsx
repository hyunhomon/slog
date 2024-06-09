import { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../consts/Colors";
import ImageLoadingView from "../common/ImageLoadingView";
import TextLoadingView from "../common/TextLoadingView";
import IconButton from "../common/IconButton";

const SlideViewContainer = styled.div<{$ratiocheck: boolean}>`
    width: 100%;
    
    flex: 1;
    flex-direction: ${props => props.$ratiocheck ? 'row' : 'column'};
`;
const ContentContainer = styled.div<{$cut: boolean}>`
    min-width: 50%;
    min-height: 50%;
    padding: 16px 24px;

    flex: 1;
    flex-direction: ${props => props.$cut ? 'row' : 'column'};
    align-items: ${props => props.$cut ? 'center' : 'start'};
    gap: 12px;

    overflow: scroll;
`;
const CutContainer = styled.div`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;

interface SlideViewProps {
    title: string | undefined,
    image: (string | undefined)[],
    content: (string | undefined)[],
    cut: boolean
};

const SlideView = ({ title, image, content, cut }: SlideViewProps) => {
    const [ratioCheck, setRatioCheck] = useState(false);
    const [index, setIndex] = useState(0);

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
        // todo: swipe to page change
        <SlideViewContainer $ratiocheck={ratioCheck}>
            <ImageLoadingView src={image[index]} width="100%" height="100%" radius={0} objectFit="contain" alt="slide-image" />
            <ContentContainer $cut={cut}>
                {
                    cut ? (
                        // todo: cut
                        <CutContainer>
                            <IconButton src="prev_circle" size={28} onclick={() => {}} />
                            <TextLoadingView text={content[index]} font="medium" size={32} color={Colors.Black} />
                            <IconButton src="next_circle" size={28} onclick={() => {}} />
                        </CutContainer>
                    ) : (
                        <>
                            {index === 0 ? <TextLoadingView text={title} font="medium" size={28} color={Colors.Black} /> : <></>}
                            <TextLoadingView text={content[index]} font="regular" size={20} color={Colors.Black} />
                        </>
                    )
                }
            </ContentContainer>
        </SlideViewContainer>
    );
};

export default SlideView;