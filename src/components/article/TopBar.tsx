import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Colors from "../../consts/colors";
import TextView from "../common/TextView";
import ImageButton from "../common/ImageButton";
import ImageView from "../common/ImageView";

const TopBarContainer = styled.div`
    width: 100%;
    padding: 6px 16px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${Colors.Gray1};
`;
const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <TopBarContainer>
            <ImageButton src="back" size={24} onclick={() => { navigate('/') }} />
            <UserContainer>
                <ImageView src="placeholder" size={18} />
                <TextView text="작성자" font="regular" size={16} color={Colors.Black} />
            </UserContainer>
        </TopBarContainer>
    );
};

export default TopBar;