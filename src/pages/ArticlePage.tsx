import styled from "styled-components";
import TopBar from "../components/article/TopBar";

const WholeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const ArticlePage = () => {
    return (
        <WholeContainer>
            <TopBar />
        </WholeContainer>
    );
};

export default ArticlePage;