import '../../../style/modal/toggle.css'
import ChangeTheme from '../../../hooks/changeTheme';

const Theme = () => {
  return (
    <div>
      <div className="ItemSectionGroup1">
        <div className="ItemSection1">
          <p className='p'>Change theme</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

    </div>
  )
}

export default Theme