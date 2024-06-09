import styled from "styled-components";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";
import TextLoadingView from "../common/TextLoadingView";

const BottomBarContainer = styled.div`
    width: 100%;
    padding: 4px 12px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${Colors.White};
    border-top: 1px solid ${Colors.Gray1};

    z-index: 3;
`;
const PageContainer = styled.div`
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;
const InteractionContainer = styled.div`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

interface BottomBarProps {
    page: string | undefined,
    like: boolean,
    setPrevSlide: () => void,
    setNextSlide: () => void,
    setLike: () => void,
    setComment: () => void,
    setShare: () => void
};

const BottomBar = ({
    page, like, setPrevSlide, setNextSlide, setLike, setComment, setShare
}: BottomBarProps) => {
    return (
        <BottomBarContainer>
            <PageContainer>
                <IconButton src="prev" size={20} onclick={setPrevSlide} />
                <TextLoadingView text={page} font="regular" size={16} color={Colors.Black} length={4} />
                <IconButton src="next" size={20} onclick={setNextSlide} />
            </PageContainer>
            <InteractionContainer>
                <IconButton src={like ? "like-active" : "like-inactive"} size={28} onclick={setLike} />
                <IconButton src="comment" size={28} onclick={setComment} />
                <IconButton src="share" size={28} onclick={setShare} />
            </InteractionContainer>
        </BottomBarContainer>
    );
};

export default BottomBar;