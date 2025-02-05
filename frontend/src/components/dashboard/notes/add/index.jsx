import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../../hooks/languageContext';
import languageData from '../../../../utils/languageData';
import iconAdd from '../../../../assets/icons/Add.svg';
import '../../../../style/add.css';
import AutosizeTextarea from './textarea';
import Format from './Items/inner/format';
import '../../../../style/note-item.css'
import Pin from './Items/outter/pin';
import Typeface from './Items/inner/typeface';
import Align from './Items/inner/align';
import LetterHeight from './Items/inner/height';
import Spacing from './Items/inner/spacing';
import Case from './Items/inner/case';
import Size from './Items/inner/size';
import List from './Items/inner/list';
import Emoji from './Items/inner/emoji';
import Shortcut from './Items/inner/shortcut';
import Reminder from './Items/outter/reminder';
import Label from './Items/outter/label';
import Archive from './Items/outter/archive';
import Image from './Items/outter/image';
import Checkbox from './Items/outter/checkbox';
import Theme from './Items/outter/theme';
import Draw from './Items/outter/draw';
import Undo from './Items/outter/undo';
import Rendo from './Items/outter/rendo';

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
                  <Typeface />
                  <Align />
                  <LetterHeight />
                  <Spacing />
                  <Case />
                  <Size />
                  <List />
                  <Emoji />
                  <Shortcut />

                </div>
              </div>
              <div className="divItemGroupBottom">
                <Pin />
                <Reminder />
                <Label />
                <Archive />
                <Image />
                <Checkbox />
                <Theme />
                <Draw />
                <Undo />
                <Rendo />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AddNotes;
