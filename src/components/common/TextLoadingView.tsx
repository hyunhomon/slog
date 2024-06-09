import Colors from "../../consts/Colors";
import SkeletonLoadingView from "./SkeletonLoadingView";

interface TextLoadingViewProps {
    text: string | undefined,
    font: string,
    size: number,
    color: Colors,
    length?: number
};

const TextLoadingView = ({ text, font, size, color, length = 8 }: TextLoadingViewProps) => {
    const style = {
        fontFamily: font,
        fontSize: size,
        color: color,
        letterSpacing: 0.8,
        lineHeight: 1.2
    };

    return (
        text ? (
            <div style={style}>{text}</div>
        ) : (
            <SkeletonLoadingView
                width={`${size * length}px`}
                height={`${size + 4}px`}
                radius="4px"
            />
        )
    );
};

export default TextLoadingView;