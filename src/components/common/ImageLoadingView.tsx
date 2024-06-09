import Colors from "../../consts/Colors";
import SkeletonLoadingView from "./SkeletonLoadingView";

interface ImageLoadingViewProps {
    src: string | undefined,
    width: string,
    height: string,
    radius: number,
    objectFit: 'cover' | 'contain',
    alt: string
};

const ImageLoadingView = ({ src, width, height, radius, objectFit, alt }: ImageLoadingViewProps) => {
    const style = {
        width: width,
        height: height,
        borderRadius: `${radius}px`,
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
                width={width}
                height={height}
                radius={`${radius}px`}
            />
        )
    );
};

export default ImageLoadingView;