import { useState, useEffect, useRef } from 'react';
import iconSettings from '../../../../assets/icons/settings.svg';
import '../../../../style/modal/modal.css';
import SettingsModal from '../../../../modal/settings';

const SettingsNotes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
      // Ensure the modal only closes if the click is outside the modal
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
        className={`ItemSectionGroup ${isActive ? 'ActiveTab' : ''}`}
        onClick={toggleModal}
        ref={settingsButtonRef} // Ref for the button
      >
        <div className="ItemSection">
          <p className="p">Settings</p>
          <img src={iconSettings} alt="Settings" draggable="false" />
        </div>

        {isModalOpen && (
          <div
            ref={modalRef}
            onClick={handleClickInsideModal} // Prevent closing modal when clicking inside
          >
            <SettingsModal />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsNotes;
