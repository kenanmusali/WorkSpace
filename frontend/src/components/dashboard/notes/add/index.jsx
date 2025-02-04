import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../../hooks/languageContext';
import languageData from '../../../../utils/languageData';
import iconAdd from '../../../../assets/icons/Add.svg';
import '../../../../style/add.css';
import AutosizeTextarea from './textarea';
import Format from './Items/inner/format';
import '../../../../style/note-item.css'
import Pin from './Items/outter/pin';

const AddNotes = () => {
  const { language } = useLanguage();
  const currentLanguage = languageData[language] || languageData['en'];
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
  const addNotesOnRef = useRef(null);
  const handleClickOutside = (event) => {
    if (addNotesOnRef.current && !addNotesOnRef.current.contains(event.target)) {
      setIsNoteVisible(false);
      setIsAnimationTriggered(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddNoteClick = () => {
    setIsNoteVisible(true);
    setIsAnimationTriggered(true);
  };

  return (
    <div className="divHomeArea">
      <div className="AddArea">
        <div className="AddGroup">

          {!isNoteVisible && (
            <div className="addNotesOff sectionStyle noSelect" onClick={handleAddNoteClick}>
              <p>{currentLanguage.addNote}</p>
              <img src={iconAdd} draggable="false" />
            </div>
          )}

          {isNoteVisible && (
            <div
              className={`addNotesOn sectionStyle noSelect ${isAnimationTriggered ? 'fadeInDown' : ''}`}
              ref={addNotesOnRef}
            >
              <div className="textArea">
                <AutosizeTextarea />
                <div className="divItemGroupTop">
                  <Format />
                  <Format />
                  <Format />
                  <Format />
                  <Format />
                  <Format />
                  <Format />
                  <Format />
                  <Format />
                  <Format />
                </div>
              </div>
              <div className="divItemGroupBottom">
                  <Pin/>
                  <Pin/>
                  <Pin/>
                  <Pin/>
                  <Pin/>
                  <Pin/>
                  <Pin/>
                  <Pin/>
                  <Pin/>
                  <Pin/>
                </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AddNotes;
