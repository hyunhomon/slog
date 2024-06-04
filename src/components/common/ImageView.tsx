interface ImageViewProps {
    src: string,
    size: number | string
};

const ImageView = ({ src, size }: ImageViewProps) => {
    return (
        <img
            src={`src/assets/icons/${src}.svg`}
            width={size}
            height={size}
            alt={src}
        />
    );
};

export default ImageView;