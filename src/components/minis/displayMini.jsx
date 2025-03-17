import CldImage from '../CldImage';
import PropTypes from 'prop-types';

const DisplayMini = ({mini}) => {

  return (
    <div>
      <h1>{mini?.name || "Mini " + mini?._id}</h1>
      <ul>
        {mini?.images?.map( img => <li key={img._id}>
            <CldImage publicId={img.cloudinaryPublicId}/>
          </li>)}
      </ul>
    </div>
  )
}

DisplayMini.propTypes = {
  mini: PropTypes.object
}
export default DisplayMini