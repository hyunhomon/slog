interface SkeletonLoadingViewProps {
    width: string,
    height: string,
    radius: string
};

const SkeletonLoadingView = ({ width, height, radius }: SkeletonLoadingViewProps) => {
    const style = {
        width: width,
        height: height,
        borderRadius: radius,
        background: "linear-gradient(60deg, #F0F0F0 36%, #F9F9F9 48%, #F0F0F0 64%)",
        backgroundSize: "400% auto",
        overflow: "hidden",
        animation: "skeleton-animation 1.6s infinite linear"
    };

    return (
        <div style={style} />
    );
};

export default SkeletonLoadingView;