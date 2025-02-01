import '../../../style/modal/toggle.css'
import iconFeedback from '../../../assets/icons/Help.svg'

const Feedback = () => {
  return (
    <div>
      <div className="ItemSectionGroup1">
        <div className="ItemSection1">
          <p className='p'>Help & feedback</p>
          <img className='Icon' src={iconFeedback}  draggable="false"  />
        </div>
      </div>

    </div>
  )
}

export default Feedback