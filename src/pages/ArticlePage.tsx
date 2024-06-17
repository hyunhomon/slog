import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../components/article/TopBar";
import BottomBar from "../components/article/BottomBar";
import DownBar from "../components/article/DownBar";
import SlideView from "../components/article/SlideView";
import FloatingActionView from "../components/article/FloatingActionView";
import SwipeableView from "../components/common/SwipeableView";
import InfiniteSwipeableView from "../components/common/InfiniteSwipeableView";

const ArticlePageContainer = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    flex-direction: column;
    overflow: hidden;
`;

interface Owner {
    ownerId: string | undefined,
    ownerImg: string | undefined,
    ownerName: string | undefined
};
interface Slide {
    image: string | undefined,
    content: string | undefined
};

const ArticlePage = () => {
    const [articleList, setArticleList] = useState<string[]>([]);
    const [articleIndex, setArticleIndex] = useState(0);
    const [articleState, setArticleState] = useState<'prev' | 'none' | 'next'>("none");
    const [owner, setOwner] = useState<Owner>();
    const [title, setTitle] = useState<string>();
    const [slideList, setSlideList] = useState<Slide[]>([{ image: undefined, content: undefined }]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [like, setLike] = useState(false);
    const [share, setShare] = useState(false);
    const [cut, setCut] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // navigate("/article", { state: { data: array } });
        // array should be string[]
        if(location.state?.data) setArticleList(location.state?.data);
        else console.log("data not found"); // todo: article id req

        // todo: article req
        setOwner({ ownerId: "id", ownerImg: undefined, ownerName: "name" });
        setTitle("Title");
        setSlideList([
            { image: undefined, content: "Slide#1" },
            { image: undefined, content: "Slide#2" },
            { image: undefined, content: "Slide#3" }
        ]);
    }, []);
    useEffect(() => {
        let lastKeyPressTime = 0;

        const handleKeyDown = (event: KeyboardEvent) => {
            const now = Date.now();
            if (now - lastKeyPressTime <= 400) return;
            lastKeyPressTime = now;
    
            switch(event.key) {
                case "ArrowLeft":
                    setSlideIndex(prev => (prev - 1 + slideList.length) % slideList.length);
                    break;
                case "ArrowRight":
                    setSlideIndex(prev => (prev + 1) % slideList.length);
                    break;
                case "ArrowUp":
                    setArticleState("prev");
                    break;
                case "ArrowDown":
                    setArticleState("next");
                    break;
                case " ":
                    setCut(prev => !prev);
                    break;
                default:
                    break;
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [slideList]);
    useEffect(() => {
        if(articleState !== "none") {
            setArticleIndex(prev => articleState === "prev" ? prev - 1 : prev + 1);
            setArticleState("none");
        }
    }, [articleState]);

    return (
        <InfiniteSwipeableView
            state={articleState}
            setState={state => setArticleState(state)}
        >
            <ArticlePageContainer>
                <TopBar
                    ownerId={owner?.ownerId}
                    ownerImg={owner?.ownerImg}
                    ownerName={owner?.ownerName}
                />
                <SwipeableView
                    index={slideIndex}
                    setIndex={idx => setSlideIndex(idx)}
                    stopPropagation={false}
                >
                    { slideList.map((slideContent, idx) => (
                        <SlideView
                            key={idx}
                            title={slideList.length !== 1 && slideIndex === 0 ? title : undefined}
                            image={slideContent.image}
                            content={slideContent.content}
                            cut={cut}
                        />
                    ))}
                </SwipeableView>
                <FloatingActionView
                    url={`${window.location.origin}${location.pathname}${location.search}`}
                    cut={cut}
                    share={share}
                    setCut={() => setCut(prev => !prev)}
                    setShare={() => setShare(prev => !prev)}
                />
                <BottomBar
                    page={slideList[0].content !== undefined ? `${slideIndex + 1} / ${slideList.length}` : undefined}
                    like={like}
                    setPrevSlide={() => setSlideIndex(prev => (prev - 1 + slideList.length) % slideList.length)}
                    setNextSlide={() => setSlideIndex(prev => (prev + 1) % slideList.length)}
                    setLike={() => setLike(prev => !prev)}
                    setComment={() => console.log("set comment page")}
                    setShare={() => setShare(prev => !prev)}
                />
                <DownBar
                    setNextArticle={() => setArticleState("next")}
                />
            </ArticlePageContainer>
        </InfiniteSwipeableView>
    );
};

export default ArticlePage;