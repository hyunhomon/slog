import { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/article/TopBar";
import BottomBar from "../components/article/BottomBar";
import DownBar from "../components/article/DownBar";
import SlideView from "../components/article/SlideView";
import FloatingActionView from "../components/article/FloatingActionView";

const ArticlePageContainer = styled.div`
    width: 100%;
    height: 100%;

    flex-direction: column;
`;

const ArticlePage = () => {
    const [like, setLike] = useState(false);
    const [share, setShare] = useState(false);
    const [cut, setCut] = useState(false);

    return (
        <ArticlePageContainer>
            <TopBar
                ownerId={undefined}
                ownerImg={undefined}
                ownerName={undefined}
            />
            <SlideView
                title={undefined}
                image={[undefined, undefined, undefined]}
                content={[undefined, undefined, undefined]}
                cut={cut}
            />
            <FloatingActionView
                url="current page url"
                cut={cut}
                share={share}
                setCut={() => setCut(prev => !prev)}
                setShare={() => setShare(prev => !prev)}
            />
            <BottomBar
                page={undefined}
                like={like}
                setPrevSlide={() => console.log("prev slide")}
                setNextSlide={() => console.log("next slide")}
                setLike={() => setLike(prev => !prev)}
                setComment={() => console.log("set comment page")}
                setShare={() => setShare(prev => !prev)}
            />
            <DownBar
                setNextArticle={() => console.log("next article")}
            />
        </ArticlePageContainer>
    );
};

export default ArticlePage;