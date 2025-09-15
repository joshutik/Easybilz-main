import './Uploadform.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
const [file, setFile] = useState(null);

// handle file select
const handleFileChange = (e) => {
    setFile(e.target.files[0]);
}

// handle file change
const handleUpload = async (e) =>{
    e.preventDefault();

    if(!file){
        alert('Please select a file first.');
        return;
    }
    
        const formData = new FormData();
        formData.append("uploadform", file);

        try {
            const response = await fetch("http://localhost:5000/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("File uploaded successfully!");
                props.onHide(); // close modal
            } else {
                alert("Failed to upload file.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("An error occurred while uploading.");
        }
};

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Upload Form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please upload previouly downloaded form</p>
               <form onSubmit={handleUpload}>
                <input className='border border-1 rounded' type="file" name="uploadform" onChange={handleFileChange} id="uploadForm" />
                <button type="submit" className='ms-2 border-0 rounded text-light px-2 py-2'>upload</button>
               </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Uploadform() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <button
                onClick={() => setModalShow(true)}
                type="button"
                className="upload rounded-pill px-5 fw-bold py-1 text-center"
            >
                Upload Reg. Form
            </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default Uploadform;
