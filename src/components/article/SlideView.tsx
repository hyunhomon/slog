import { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../consts/Colors";
import ImageView from "../common/ImageView";
import TextView from "../common/TextView";

const SlideViewContainer = styled.div<{$ratiocheck: boolean}>`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: ${props => props.$ratiocheck ? 'row' : 'column'};

    overflow: hidden;
`;
const ContentContainer = styled.div`
    min-width: 50%;
    min-height: 50%;
    padding: 16px 24px;

    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 12px;

    overflow: scroll;
`;

interface SlideViewProps {
    title: string | undefined,
    image: string | undefined,
    content: string
};

const SlideView = ({ title, image, content }: SlideViewProps) => {
    const [ratioCheck, setRatioCheck] = useState(false);

    const resizeListener = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;

        setRatioCheck(ratio >= 1);
    };

    useEffect(() => {
        resizeListener();
        window.addEventListener("resize", resizeListener);
        return () => {
            window.removeEventListener("resize", resizeListener);
        }
    }, []);
    
    return (
        <SlideViewContainer $ratiocheck={ratioCheck}>
            <ImageView
                src={image} size={"auto"} alt="slide"
            />
            <ContentContainer>
                {title === undefined ? <></> :
                    <TextView text={title} font="medium" size={28} color={Colors.Black} />
                }
                <TextView text={content} font="regular" size={20} color={Colors.Black} />
            </ContentContainer>
        </SlideViewContainer>
    );
};

export default SlideView;