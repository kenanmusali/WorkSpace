

import { useState, useEffect, useRef } from 'react';
import iconShortcut from '../../../assets/icons/Shortcut.svg';
import '../../../style/modal/modal.css';
import { useLanguage } from '../../../hooks/languageContext';  
import languageData from '../../../utils/languageData';
import ShortcutModal from '../../../modal/shortcut';


const Shortcut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { language } = useLanguage(); 
  const currentLanguage = languageData[language] || languageData['en'];
  const modalRef = useRef(null);
  const settingsButtonRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsModalOpen(false);
      setIsActive(false); 
    };

    const handleClickOutside = (event) => {
      if (
        modalRef.current && !modalRef.current.contains(event.target) &&
        settingsButtonRef.current && !settingsButtonRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
        setIsActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickInsideModal = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div
        className={`ItemSectionGroup ResponsiveOn ${isActive ? 'ActiveTab' : ''}`}
        onClick={toggleModal}
        ref={settingsButtonRef} 
      >
        <div className="ItemSection">
          <p className="p">{currentLanguage.shortcut}</p>
          <img className='Icon' src={iconShortcut} alt="Settings" draggable="false" />
        </div>

        {isModalOpen && (
          <div
            ref={modalRef}
            onClick={handleClickInsideModal} 
          >
            <ShortcutModal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Shortcut;
