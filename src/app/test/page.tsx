"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowDelete}>
        Launch demo modal
      </Button>

      <Modal show={showDelete} onHide={handleDelete}  centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;