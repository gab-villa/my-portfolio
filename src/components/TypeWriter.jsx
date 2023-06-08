import { useState, useEffect, useRef} from "react";

export const TypeWriter = ({text}) =>
{
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');
    
    useEffect(() => {
        const idTimeout= setTimeout(() => {
            const nextChar = text.charAt(index.current);
            setCurrentText((value) => value + nextChar);
            index.current += 1;
        }, 100);
        return () => clearTimeout(idTimeout);
        
    }, [currentText, text]);
    return <div>{currentText}</div>;
} 