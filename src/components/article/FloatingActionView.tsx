import { useEffect } from "react";
import styled from "styled-components";
import Colors from "../../consts/Colors";
import IconButton from "../common/IconButton";
import TextLoadingView from "../common/TextLoadingView";

const FloatingActionViewContainer = styled.div<{$share: boolean}>`
    flex-direction: column;
    align-items: end;
    gap: 12px;

    position: absolute;
    bottom: ${props => props.$share ? "88px" : "24px"};
    right: 16px;

    transition: bottom 0.4s ease;

    z-index: 2;
`;
const ShareMsgContainer = styled.div`
    padding: 12px 18px;

    background-color: ${Colors.White};

    border: 2px solid ${Colors.Black};
    border-radius: 8px;
`;

interface FloatingActionViewProps {
    url: string,
    cut: boolean,
    share: boolean,
    setCut: () => void,
    setShare: () => void,
};

const FloatingActionView = ({ url, cut, share, setCut, setShare }: FloatingActionViewProps) => {
    useEffect(() => {
        if(share) {
            const timeOut = setTimeout(setShare, 1600);
            navigator.clipboard.writeText(url);
            return () => clearTimeout(timeOut);
        }
    }, [share])

    return (
        <FloatingActionViewContainer $share={share}>
            <IconButton src={cut ? "cut-active" : "cut-inactive"} size={44} onclick={setCut} />
            <ShareMsgContainer>
                <TextLoadingView text="게시물의 URL을 복사했어요!" font="medium" size={16} color={Colors.Black} />
            </ShareMsgContainer>
        </FloatingActionViewContainer>
    );
};

export default FloatingActionView;