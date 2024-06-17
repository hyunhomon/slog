import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";
import TextLoadingView from "../common/TextLoadingView";
import CircleImageLoadingView from "../common/CircleImageLoadingView";

const TopBarContainer = styled.div`
    width: 100%;
    padding: 6px 12px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${Colors.Gray1};
`;
const UserContainer = styled.button`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

interface TopBarProps {
    ownerId: string | undefined,
    ownerImg: string | undefined,
    ownerName: string | undefined
};

const TopBar = ({ ownerId, ownerImg, ownerName }: TopBarProps) => {
    const navigate = useNavigate();

    return (
        <TopBarContainer>
            <IconButton src="back" size={24} onclick={() => navigate("/")} />
            <UserContainer onClick={() => navigate(`/${ownerId}`)} tabIndex={-1}>
                <CircleImageLoadingView src={ownerImg} size={20} objectFit="cover" alt="profile" />
                <TextLoadingView text={ownerName} font="medium" size={16} color={Colors.Black} />
            </UserContainer>
        </TopBarContainer>
    );
};

export default TopBar;