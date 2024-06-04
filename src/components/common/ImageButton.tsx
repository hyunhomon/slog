interface ImageButtonProps {
    src: string,
    size: number | string,
    onclick: () => void
};

const ImageButton = ({ src, size, onclick }: ImageButtonProps) => {
    return (
        <button onClick={ onclick }>
            <img
                src={`src/assets/icons/${src}.svg`}
                width={size}
                height={size}
                alt={src}
            />
        </button>
    );
};

export default ImageButton;