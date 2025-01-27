import iconShortcut from '../../../assets/icons/Shortkey.svg';

const Shortcut = () => {
    return (
        <div>
            <div className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>Shortcut</p>
                    <img src={iconShortcut} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Shortcut