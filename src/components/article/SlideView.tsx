import styled from "styled-components";
import ImageView from "../common/ImageView";

const SlideViewContainer = styled.div`
    width: 100%;
    flex-grow: 1;

    display: flex;
    flex-direction: row;
`;
const ContentContainer = styled.div`
    width: 100%;
    height: 100%;

    border: 1px solid red;
`;

interface SlideViewProps {
    title: string | undefined,
    image: string | undefined,
    content: string
};

const SlideView = ({ image, content }: SlideViewProps) => {
    return (
        <SlideViewContainer>
            <ImageView
                src={image} size={"100%"} alt="placeholder-slide"
            />
            <ContentContainer></ContentContainer>
        </SlideViewContainer>
    );
};

export default SlideView;