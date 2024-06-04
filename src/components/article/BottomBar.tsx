import styled from "styled-components";
import Colors from "../../consts/colors";
import TextView from "../common/TextView";
import ImageButton from "../common/ImageButton";

const BottomBarContainer = styled.div`
    width: 100%;
    padding: 4px 12px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid ${Colors.Gray1};
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

const BottomBar = () => {
    return (
        <BottomBarContainer>
            <PageContainer>
                <ImageButton src="prev" size={20} onclick={() => {}} />
                <TextView text="1 / 20" font="regular" size={16} color={Colors.Black} />
                <ImageButton src="next" size={20} onclick={() => {}} />
            </PageContainer>
            <InteractionContainer>
                <ImageButton src="like-inactive" size={28} onclick={() => {}} />
                <ImageButton src="comment" size={28} onclick={() => {}} />
                <ImageButton src="share" size={28} onclick={() => {}} />
            </InteractionContainer>
        </BottomBarContainer>
    );
};

export default BottomBar;