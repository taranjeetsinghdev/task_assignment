import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import UploadIcon from "../assets/icon.png";
import CopyIcon from "../assets/copy.png";

const FileUpload = ({ show, handleClose }) => {
  const imageRef = useRef();
  return (
    <Modal show={show} centered size="lg">
      <Modal.Header
        className="d-flex justify-content-between align-items-center"
        style={{ borderBottom: "none" }}
      >
        <h5 className="m-0">Easy Upload</h5>
        <div className='d-flex justify-content-between gap-3 p-2'>
        <span className='fw-bold text-center w-50 p-1'>Bills</span>
            <span className='fw-bold text-center w-50 p-1 border-side text-div'>Receipts</span>
            <span className='fw-bold text-center w-50 p-1'>Bank</span>
        </div>
        <Button variant="light" className="border-0" onClick={handleClose}>
          <FaTimes />
        </Button>
      </Modal.Header>

      <Modal.Body>
        <Form>
          {/* Dropdown */}
          <div className="d-flex gap-5">
            <div className="form-group">
              <label className="form-label text-muted">Document Owner</label>
              <input
                type="text"
                className="owner-input form-control"
                value="Accountant 01"
                placeholder="Start typing..."
                cols={50}
              />
            </div>
            <div className="form-group">
              <label className="form-label text-muted">Client</label>
              <select
                className="form-control"
                style={{ width: "20rem", appearance: "auto" }}
              >
                <option value="" disabled>Select Client</option>
                <option value="invoice">Invoice</option>
                <option value="receipt">Receipt</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* File Upload */}
          <Form.Group className="mb-3">
            <div
              className="d-flex justify-content-center align-items-center gap-1 upload-section"
              onClick={() => imageRef.current.click()}
            >
              <div>
                <button className="links-btn-4">
                  <img src={UploadIcon} alt="img not found" />
                </button>
              </div>
              <div className="d-flex flex-column">
                <span className="text-div">
                  Drag & Drop or Choose file to upload
                </span>
                <span className="text-div">JPG,PNG,PDF,CVS</span>
              </div>
            </div>
            <input className="d-none" type="file" ref={imageRef} />
          </Form.Group>

          {/* Add Receipt Button */}
          <div className="d-flex justify-content-center align-items-center">
            <button variant="primary" className="links-btn-3" style={{ width: "12rem"}}>
              Add Receipt
            </button>
          </div>
          <div className="d-flex flex-column">
            <label className="form-label text-muted">Send Over Email</label>
            <div className="d-flex gap-2">
                <span className="fw-bold">Single: </span> 
                 <span className="text-div">abc.single@gmail.com</span>
                 <img src={CopyIcon} alt="img not found" />
            </div>
            <div className="d-flex gap-2">
                <span className="fw-bold">Multiple: </span>  
                <span className="text-div">abc.multiple@gmail.com</span>
                <img src={CopyIcon} alt="img not found" />
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FileUpload;
