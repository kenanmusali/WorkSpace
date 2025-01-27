import iconSettings from '../../../../assets/icons/settings.svg';

const SettingsNotes = () => {
  return (
    <div>
        <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Settings</p>
                                    <img src={iconSettings} draggable="false" />
                                </div>
                            </div>
    </div>
  )
}

export default SettingsNotes