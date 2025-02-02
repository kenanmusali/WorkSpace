import { useLanguage } from '../../../hooks/languageContext';  // Import useLanguage hook
import { useState } from 'react';
import '../../../style/modal/modal.css';
import '../../../style/modal/language.css';
import iconLanguage from '../../../assets/icons/Language.svg';
import iconLanguages from '../../../assets/icons/Languages.svg';
import languageData from '../../../utils/languageData'; // Import language data

const Language = () => {
    const { language, setLanguage } = useLanguage();  // Access language and setLanguage from context
    const [isActive, setIsActive] = useState(false);  // State to track if the class should be active
    const [activeLang, setActiveLang] = useState(language); // Track the active language

    const toggleActiveClass = () => {
        setIsActive(prevState => !prevState);  // Toggle the class
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);  // Change the language through the context
        setActiveLang(lang);  // Set the active language
    };

    return (
        <div>
            <div className={`ItemSectionGroup1 ${isActive ? 'LanActive' : ''}`} onClick={toggleActiveClass}>
                <div className="ItemSection1">
                    <p className="p">{languageData[language].language}</p>
                    <img className='Icon' src={iconLanguage} draggable="false" />
                </div>
                <div className="ModalInside sectionStyle">
                    <div className={`ItemSectionGroup2 ${activeLang === 'en' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('en')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].english}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'es' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('es')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].spanish}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'fr' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('fr')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].french}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'de' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('de')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].german}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'it' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('it')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].italian}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'pt' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('pt')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].portuguese}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'ru' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('ru')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].russian}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'tr' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('tr')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].turkish}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'az' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('az')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].azerbaijani}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'pl' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('pl')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].polish}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'nl' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('nl')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].dutch}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'sv' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('sv')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].swedish}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'no' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('no')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].norwegian}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>
                    <div className={`ItemSectionGroup2 ${activeLang === 'fi' ? 'ActiveTab' : ''}`} onClick={() => handleLanguageChange('fi')}>
                        <div className="ItemSection2">
                            <p className="p">{languageData[language].finnish}</p>
                            <img className='Icon' src={iconLanguages} draggable="false" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Language;
