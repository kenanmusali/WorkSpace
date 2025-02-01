import { useState, useEffect } from 'react';
import iconResize from '../../../../assets/icons/Resize.svg';
import { useLanguage } from '../../../../hooks/languageContext';
import languageData from '../../../../utils/languageData';

const ListCalendar = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('ListActive');
            
            const sbTop = document.querySelector('.SbTop');
            if (sbTop) sbTop.classList.add('ListActive');
    
            const sbBottom = document.querySelector('.SbBottom');
            if (sbBottom) sbBottom.classList.add('ListActive');  // Fixed this line
            
            // Select all .hr elements and add ListActive class to each one
            const hrs = document.querySelectorAll('.hr');
            hrs.forEach((hr) => hr.classList.add('ListActive'));
        } else {
            document.body.classList.remove('ListActive');
            
            const sbTop = document.querySelector('.SbTop');
            if (sbTop) sbTop.classList.remove('ListActive');
    
            const sbBottom = document.querySelector('.SbBottom');
            if (sbBottom) sbBottom.classList.remove('ListActive');  // Fixed this line
            
            // Select all .hr elements and remove ListActive class from each one
            const hrs = document.querySelectorAll('.hr');
            hrs.forEach((hr) => hr.classList.remove('ListActive'));
        }
    
        // Cleanup when the component unmounts
        return () => {
            document.body.classList.remove('ListActive');
            
            const sbTop = document.querySelector('.SbTop');
            if (sbTop) sbTop.classList.remove('ListActive');
            
            const sbBottom = document.querySelector('.SbBottom');
            if (sbBottom) sbBottom.classList.remove('ListActive');  // Fixed this line
            
            const hrs = document.querySelectorAll('.hr');
            hrs.forEach((hr) => hr.classList.remove('ListActive'));
        };
    }, [isActive]);
    
    

    return (
        <div>
            <div className={`ItemSectionGroup ${isActive ? 'ListActive' : ''}`} onClick={handleClick}>
                <div className="ItemSection ">
                    <p className="p">{currentLanguage.category}</p>
                    <img className='Icon' src={iconResize} draggable="false" />
                </div>
            </div>
        </div>
    );
};

export default ListCalendar;
