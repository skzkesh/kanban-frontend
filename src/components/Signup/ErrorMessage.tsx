interface ErrorMessageProps {
    message: string;
}

export function ErrorMessage({message}: ErrorMessageProps){
    return (
        <div className="text-red-500 text-sm flex justify-center mt-2">{message}</div>
    )
}