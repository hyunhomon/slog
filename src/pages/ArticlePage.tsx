import styled from "styled-components";
import TopBar from "../components/article/TopBar";
import BottomBar from "../components/article/BottomBar";
import DownBar from "../components/article/DownBar";

const WholeContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`;
const ArticleContainer = styled.div`
    width: 100%;
    flex-grow: 1;
`;

const ArticlePage = () => {
    return (
        <WholeContainer>
            <TopBar />
            <ArticleContainer>
            </ArticleContainer>
            <BottomBar />
            <DownBar />
        </WholeContainer>
    );
};

export default ArticlePage;