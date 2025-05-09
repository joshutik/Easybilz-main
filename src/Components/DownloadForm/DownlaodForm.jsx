import './DownloadForm.css'


const DownloadForm = () => {
    return (
      <div>
        <a href="/blank-form.pdf" download="blank-form.pdf">
          <button type="button" className='download rounded-pill px-5 fw-bold py-1'>Download Reg. Form</button>
        </a>
      </div>
    );
  };
  
  export default DownloadForm;