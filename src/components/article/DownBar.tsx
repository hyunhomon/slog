import styled from "styled-components";
import ImageButton from "../common/ImageButton";

const DownBarContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
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