import { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/article/TopBar";
import BottomBar from "../components/article/BottomBar";
import DownBar from "../components/article/DownBar";
import SlideView from "../components/article/SlideView";
import FloatingActionView from "../components/article/FloatingActionView";

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
    const [like, setLike] = useState(false);
    const [share, setShare] = useState(false);
    const [cut, setCut] = useState(false);

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
                <FloatingActionView
                    cut={cut}
                    setCut={() => { setCut(prev => !prev); }}
                    share={share}
                    setShare={() => { setShare(prev => !prev); }}
                    url="asdf"
                />
                <BottomBar
                    slideAmount={20}
                    currentSlide={1}
                    like={like}
                    setPrevSlide={() => { console.log("prev slide"); }}
                    setNextSlide={() => { console.log("next slide"); }}
                    setLike={() => { setLike(prev => !prev); }}
                    setShare={() => { setShare(prev => !prev); }}
                />
                <DownBar
                    setNextArticle={() => { console.log("next article"); }}
                />
            </ArticleContainer>
        </EntireContainer>
    );
};

export default ArticlePage;