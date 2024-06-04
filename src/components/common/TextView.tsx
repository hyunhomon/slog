import Colors from "../../consts/colors";

interface TextViewProps {
    text: string,
    font: string,
    size: number,
    color: Colors
};

const TextView = ({ text, font, size, color }: TextViewProps) => {
    const TextStyle = {
        fontFamily: font,
        fontSize: size,
        color: color,
        letterSpacing: 0.8,
        lineHeight: 1.2
    };

    return (
        <div style={TextStyle}>{text}</div>
    );
};

export default TextView;