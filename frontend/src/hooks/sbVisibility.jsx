import { useState, useEffect, useRef } from 'react';

const SidebarVisibility = () => {
    const [isClosed, setIsClosed] = useState(() => {
        const storedValue = localStorage.getItem('isClosed');
        return storedValue === 'true';
    });

    const sidebarRef = useRef(null);
    const toggleIconRef = useRef(null);

    const toggleClass = () => {
        const newState = !isClosed;
        setIsClosed(newState);
        localStorage.setItem('isClosed', newState);

        if (newState) {
            document.body.classList.add('ClosedSb');
        } else {
            document.body.classList.remove('ClosedSb');
        }
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('isClosed');
        if (storedValue === 'true') {
            document.body.classList.add('ClosedSb');
        } else {
            document.body.classList.remove('ClosedSb');
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (window.innerWidth <= 767 && isClosed && sidebarRef.current && !sidebarRef.current.contains(event.target) && !toggleIconRef.current.contains(event.target)) {
                setIsClosed(false); 
                localStorage.setItem('isClosed', 'false');
                document.body.classList.remove('ClosedSb');
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isClosed]);

    return { isClosed, toggleClass, sidebarRef, toggleIconRef };
};

export default SidebarVisibility;
