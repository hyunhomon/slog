import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../consts/Colors";
import TextView from "../common/TextView";
import ImageButton from "../common/ImageButton";

const BottomBarContainer = styled.div`
    width: 100%;
    padding: 4px 12px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${Colors.White};
    border-top: 1px solid ${Colors.Gray1};

    z-index: 3;
`;
const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;
const InteractionContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

interface BottomBarProps {
    slideAmount: number,
    currentSlide: number,
    like: boolean,
    setPrevSlide: () => void,
    setNextSlide: () => void,
    setLike: () => void,
    setShare: () => void
};

const BottomBar = ({
    slideAmount, currentSlide, like, setPrevSlide, setNextSlide, setLike, setShare
}: BottomBarProps) => {
    const navigate = useNavigate();

    return (
        <BottomBarContainer>
            <PageContainer>
                <ImageButton src="prev" size={20} onclick={ setPrevSlide } />
                <TextView text={`${currentSlide} / ${slideAmount}`} font="regular" size={16} color={Colors.Black} />
                <ImageButton src="next" size={20} onclick={ setNextSlide } />
            </PageContainer>
            <InteractionContainer>
                <ImageButton src={like ? "like-active" : "like-inactive"} size={28} onclick={ setLike } />
                <ImageButton src="comment" size={28} onclick={ () => { navigate("/comment") } } />
                <ImageButton src="share" size={28} onclick={ setShare } />
            </InteractionContainer>
        </BottomBarContainer>
    );
};

export default BottomBar;