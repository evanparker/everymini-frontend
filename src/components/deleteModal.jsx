import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { BsFillTrash3Fill } from "react-icons/bs";


function DeleteModal ({show, onClose, onConfirm}) {

  return (
    <Modal dismissible show={show} onClose={onClose} size="xl" className="">
      <Modal.Header>Are you sure?</Modal.Header>
      <Modal.Body className="flex gap-5">
        <Button color="red" onClick={onConfirm}><BsFillTrash3Fill className="mr-2 h-5 w-5"/> Delete</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Modal.Body>
    </Modal>
  )
}

DeleteModal.propTypes = {
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  show: PropTypes.bool
};

export default DeleteModal;