import '../../../style/modal/toggle.css'
import iconPolicy from '../../../assets/icons/PrivacyPolicy.svg'

const Policy = () => {
  return (
    <div>
      <div className="ItemSectionGroup1">
        <div className="ItemSection1">
          <p className='p'>Privacy policy</p>
          <img src={iconPolicy}  draggable="false"  />
        </div>
      </div>

    </div>
  )
}

export default Policy