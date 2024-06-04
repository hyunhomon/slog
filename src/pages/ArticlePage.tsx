import styled from "styled-components";
import TopBar from "../components/article/TopBar";
import BottomBar from "../components/article/BottomBar";
import DownBar from "../components/article/DownBar";
import SlideView from "../components/article/SlideView";

const EntireContainer = styled.div`
    width: 100%;
    height: 100%;
`;
const ArticleContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`;

const ArticlePage = () => {
    return (
        <EntireContainer>
            <ArticleContainer>
                <TopBar
                    ownerId="user"
                    ownerImg={undefined}
                    ownerName="작성자"
                />
                <SlideView
                    title={undefined}
                    image={undefined}
                    content="Hello World!"
                />
                <BottomBar
                    slideAmount={20}
                    currentSlide={1}
                    like={false}
                    setPrevSlide={() => { console.log("prev slide"); }}
                    setNextSlide={() => { console.log("next slide"); }}
                    setLike={() => { console.log("set like"); }}
                />
                <DownBar
                    setNextArticle={() => { console.log("next article"); }}
                />
            </ArticleContainer>
        </EntireContainer>
    );
};

export default ArticlePage;