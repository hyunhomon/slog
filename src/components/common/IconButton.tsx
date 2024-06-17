interface IconButtonProps {
    src: string,
    size: number,
    onclick: () => void
};

const IconButton = ({ src, size, onclick }: IconButtonProps) => {
    return (
        <button onClick={onclick} tabIndex={-1}>
            <img
                src={`src/assets/icons/${src}.svg`}
                width={size}
                height={size}
                alt={src}
            />
        </button>
    );
};

export default IconButton;