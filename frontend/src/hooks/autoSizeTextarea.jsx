import  { useEffect, useRef } from 'react';

const autoSizeTextarea = () => {
        const textareaRef = useRef(null);
    
        const MAX_HEIGHT = window.innerHeight * 0.61;
    
        useEffect(() => {
            const textarea = textareaRef.current;
    
            resize(textarea);
    
            const handleInput = () => resize(textarea);
            textarea.addEventListener('input', handleInput);
    
            return () => {
                textarea.removeEventListener('input', handleInput);
            };
        }, []);
    
        const resize = (textarea) => {
            textarea.style.height = 'auto';
    
            const scrollHeight = textarea.scrollHeight;
    
            if (scrollHeight <= MAX_HEIGHT) {
                textarea.style.height = `${scrollHeight}px`;
                textarea.style.overflowY = 'hidden';
            } else {
                textarea.style.height = `${MAX_HEIGHT}px`;
                textarea.style.overflowY = 'auto';
            }
        };

    return textareaRef;

}

export default autoSizeTextarea