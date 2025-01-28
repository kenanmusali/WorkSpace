import  { useState } from 'react';
import '../../../style/modal/modal.css';
import '../../../style/modal/language.css';
import iconLanguage from '../../../assets/icons/language.svg';
import iconLanguages from '../../../assets/icons/languages.svg';

const Language = () => {
    const [isActive, setIsActive] = useState(false);  // State to track if the class should be active

    const toggleActiveClass = () => {
        setIsActive(prevState => !prevState);  // Toggle the class
    };

    return (
        <div>
            <div className={`ItemSectionGroup1 ${isActive ? 'LanActive' : ''}`} onClick={toggleActiveClass}>
                <div className="ItemSection1" >
                    <p className='p'>Language</p>
                    <img src={iconLanguage} draggable="false" />
                </div>

                <div className="ModalInside sectionStyle">
                    <div className="ItemSectionGroup2">
                        <div className="ItemSection2">
                            <p className='p'>English</p>
                            <img src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className="ItemSectionGroup2">
                        <div className="ItemSection2">
                            <p className='p'>Spanish</p>
                            <img src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className="ItemSectionGroup2">
                        <div className="ItemSection2">
                            <p className='p'>French</p>
                            <img src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Language;
