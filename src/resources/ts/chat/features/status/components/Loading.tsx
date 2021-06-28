import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/reducer';
import { Modal } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

function Loading() {
  const isLoading = useSelector((state: RootState) => state.status.isloading);
  return (
    <Modal
      size="sm"
      show={isLoading}
      backdrop="static"
      keyboard={false}
      backdropClassName="modal-loading"
      contentClassName="modal-loading-cont"
    >
      <Modal.Body>
        <Spinner animation="border" variant="info" role="status" />
      </Modal.Body>
      <span className="loading45">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </span>
    </Modal>
  );
}

export default Loading;
