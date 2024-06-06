import styled from "styled-components";
import ImageButton from "../common/ImageButton";
import Colors from "../../consts/Colors";

const DownBarContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: ${Colors.White};

    z-index: 3;
`;

interface DownBarProps {
    setNextArticle: () => void
};

const DownBar = ({ setNextArticle }: DownBarProps) => {
    return (
        <DownBarContainer>
            <ImageButton src="down" size={24} onclick={ setNextArticle } />
        </DownBarContainer>
    );
};

export default DownBar;