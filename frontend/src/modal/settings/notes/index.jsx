import '../../../style/sidebar/sb-item.css';
import Feedback from '../feedback';
import Gradient from '../gradient';
import Language from '../language';
import Policy from '../policy';
import Theme from '../theme';

function SettingsModalNotes() {
    return (
        <div>
            <div className="ModalSectionSetting sectionStyle">
                <div className="SbItem">
                    <Theme />
                    <Gradient />
                    <Policy />
                    <Feedback />
                    <Language />
                </div>
            </div></div>
    )
}

export default SettingsModalNotes