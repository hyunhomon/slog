import Colors from "../../consts/Colors";
import SkeletonLoadingView from "./SkeletonLoadingView";

interface CircleImageLoadingViewProps {
    src: string | undefined,
    size: number,
    objectFit: 'cover' | 'contain',
    alt: string
};

const CircleImageLoadingView = ({ src, size, objectFit, alt }: CircleImageLoadingViewProps) => {
    const style = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: Colors.Gray1,
        objectFit: objectFit
    };

    return (
        src ? (
            <img
                src={src}
                style={style}
                alt={alt}
            />
        ) : (
            <SkeletonLoadingView
                width={`${size}px`}
                height={`${size}px`}
                radius="50%"
            />
        )
    );
};

export default CircleImageLoadingView;