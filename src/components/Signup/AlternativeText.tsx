interface AlternativeTextProps {
    text: string;
    signupText: string;
    onClick: () => void;
}

export const AlternativeText: React.FC<AlternativeTextProps> = ({ text,  signupText, onClick }) => {
    return (
        <div className="flex justify-center pt-5 font-sm">
            <p>
                {text}
                <span
                    onClick={onClick}
                    className="text-blue-500 cursor-pointer hover:font-medium"
                >
                    {signupText}
                </span>
            </p>
        </div>
    );
};