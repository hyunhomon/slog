import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Colors from "../../consts/Colors";
import TextView from "../common/TextView";
import ImageButton from "../common/ImageButton";
import ImageView from "../common/ImageView";

const TopBarContainer = styled.div`
    width: 100%;
    padding: 6px 12px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${Colors.Gray1};
`;
const UserContainer = styled.div`
    padding: 4px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    cursor: pointer;
`;

interface TopBarProps {
    ownerId: string,
    ownerImg: string | undefined,
    ownerName: string
};

const TopBar = ({ ownerId, ownerImg, ownerName }: TopBarProps) => {
    const navigate = useNavigate();

    return (
        <TopBarContainer>
            <ImageButton src="back" size={24} onclick={() => { navigate("/") }} />
            <UserContainer onClick={() => { navigate(`/${ownerId}`) }}>
                <ImageView src={ownerImg} size={18} alt="placeholder-profile" />
                <TextView text={ownerName} font="medium" size={16} color={Colors.Black} />
            </UserContainer>
        </TopBarContainer>
    );
};

export default TopBar;