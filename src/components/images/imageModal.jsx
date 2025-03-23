import { Modal } from "flowbite-react";
import PropTypes from "prop-types";
import CldImage from "./CldImage";


function ImageModal ({image, onClose, show}) {

  return <>
    <Modal dismissible show={show} onClose={onClose} onClick={onClose} size="7xl">
      <Modal.Body>
        <CldImage publicId={image?.cloudinaryPublicId} />
      </Modal.Body>
    </Modal>
  </>
}

ImageModal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
  show: PropTypes.bool
};

export default ImageModal;