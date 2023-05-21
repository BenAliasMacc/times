import './DividerMiddle.css';
import cloudLeft from '../../assets/nuage-left_bg-middle.svg';
import cloudRight from '../../assets/nuage-right_bg-middle.svg';

const DividerMiddle = () => {
    return (
        <div className='dividerMiddle'>
            <img className='dividerMiddle__image-left' src={cloudLeft} alt="" />
            <img className='dividerMiddle__image-right' src={cloudRight} alt="" />
        </div>
    )
};

export default DividerMiddle;