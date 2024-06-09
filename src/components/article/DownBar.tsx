import styled from "styled-components";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";

const DownBarContainer = styled.div`
    width: 100%;

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
            <IconButton src="down" size={24} onclick={setNextArticle} />
        </DownBarContainer>
    );
};

export default DownBar;