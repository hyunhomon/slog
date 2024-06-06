interface ImageViewProps {
    src: string | undefined,
    size: number | string,
    alt: string
};

const ImageView = ({ src, size, alt }: ImageViewProps) => {
    return (
        <img
            src={src === undefined ? `src/assets/images/${alt}.png` : src}
            width={size}
            height={size}
            alt={alt}
        />
    );
};

export default ImageView;