import styled from "styled-components";
import Colors from "../../consts/Colors";
import TextView from "../common/TextView";
import ImageButton from "../common/ImageButton";
import { useEffect } from "react";

const FloatingActionViewContainer = styled.div<{$share: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 12px;

    position: absolute;
    bottom: ${props => props.$share ? '88px' : '24px'};
    right: 16px;

    transition: bottom 0.4s ease;

    z-index: 2;
`;
const ShareMsgContainer = styled.div`
    padding: 12px 18px;

    background-color: ${Colors.White};

    border: 1px solid ${Colors.Black};
    border-radius: 8px;
`;

interface FloatingActionViewProps {
    cut: boolean,
    setCut: () => void,
    share: boolean,
    setShare: () => void,
    url: string
};

const FloatingActionView = ({ cut, setCut, share, setShare, url }: FloatingActionViewProps) => {
    useEffect(() => {
        if(share) {
            const timeOut = setTimeout(setShare, 1600);
            navigator.clipboard.writeText(url);
            return () => clearTimeout(timeOut);
        }
    }, [share])

    return (
        <FloatingActionViewContainer $share={share}>
            <ImageButton src={cut ? "cut-active" : "cut-inactive"} size={44} onclick={ setCut } />
            <ShareMsgContainer>
                <TextView text="게시물의 URL을 복사했어요!" font="medium" size={16} color={Colors.Black} />
            </ShareMsgContainer>
        </FloatingActionViewContainer>
    );
};

export default FloatingActionView;