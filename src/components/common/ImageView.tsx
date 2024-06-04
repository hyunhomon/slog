interface ImageViewProps {
    src: string | undefined,
    size: number | string,
    alt: string
};

const ImageView = ({ src, size, alt }: ImageViewProps) => {
    return (
        <img
            src={src === undefined ? `src/assets/icons/${alt}.svg` : src}
            width={size}
            height={size}
        />
    );
};

export default ImageView;