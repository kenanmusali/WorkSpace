import '../../style/sidebar/sb-item.css';
import Language from './language';

function SettingsModal() {
    return (
        <div>
            <div className="ModalSection sectionStyle">
                <div className="SbItem">

                    <div className="ItemSectionGroup1">
                        <div className="ItemSection1">
                            <p className='p'>Add labels</p>
                            <img src={""} draggable="false" />
                        </div>
                    </div>
                    <div className="ItemSectionGroup1">
                        <div className="ItemSection1">
                            <p className='p'>Add labels</p>
                            <img src={""} draggable="false" />
                        </div>
                    </div>

                    <Language />


                </div>
            </div></div>
    )
}

export default SettingsModal