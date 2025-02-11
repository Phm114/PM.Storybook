type props = {
    text: string;
};

const Button = ({ text }: props) => {
    return <button type="button">{text}</button>;
};

export default Button;
