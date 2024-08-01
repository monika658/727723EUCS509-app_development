import React from 'react';
import Modal from 'react-modal';
import './PDFModal.css';

Modal.setAppElement('#root');

const PDFModal = ({ isOpen, onRequestClose, pdfUrl }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="PDF Viewer"
            className="pdf-modal"
            overlayClassName="pdf-overlay"
        >
            <button onClick={onRequestClose} className="close-button">Close</button>
            <iframe src={pdfUrl} title="PDF Viewer" className="pdf-iframe"></iframe>
        </Modal>
    );
};

export default PDFModal;
