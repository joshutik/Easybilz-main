import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemberRegistration.css';
import { API_BASE_URL } from '../../config';
import { Spinner } from 'react-bootstrap'; // Or use your own spinner component
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



import 'jspdf-autotable'; // Optional: for adding tables in PDF

const MemberRegistration = () => {
  const apiHostname = API_BASE_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fname: '',
    surname: '',
    maritalStatus: 'Single', // Default value
    stateOfOrigin: '',
    nationality: 'Nigerian', // Default value
    gender: 'Male', // Default value
    motherName: '',
    residenceAddress: '',
    town: '',
    email: '',
    mobileNumber: '',
    identity: 'National ID', // Default value
    identityNumber: '',
    employmentStatus: 'Salaried', // Default value
    annualSalary: '',
    businessName: '',
    state: '',
    officePhoneNumber: '',
    nextOfKinFname: '',
    nextOfKinSurname: '',
    nextOfKinOtherNames: '',
    nextOfKinDOB: '',
    nextOfKinRelationship: '',
    nextOfKinPhone: '',
    nextOfKinHomeAddress: '',
    nextOfKinEmail: '',
    nextOfKinTown: '',
    nextOfKinState: '',
    bankName: '',
    accountName: '',
    accountNumber: ''
  });

  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const userID = localStorage.getItem('userID');
      if (!userID) {
        console.error('User ID not found in local storage');
        return;
      }

      try {
        const response = await fetch(`${apiHostname}/user/create/${userID}/`);
        if (response.ok) {
          const data = await response.json();
          // Map API response fields to formData fields
          setFormData({
            ...formData,
            fname: data.firstName || '',
            surname: data.middleName || '',
            maritalStatus: data.maritalStatus || ''
          });
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [apiHostname]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userID = localStorage.getItem('userID');
      if (!userID) {
        console.error('User ID not found in local storage');
        return;
      }

      try {
        const response = await fetch(`${apiHostname}/user/create/${userID}/`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data);

        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [apiHostname]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);
    const userID = localStorage.getItem('userID'); // Fetching userID from local storage

    if (!userID) {
      console.error('User ID not found in local storage');
      return;
    }

    // Alert something before sending the PATCH request

    try {
      const response = await fetch(`${apiHostname}/user/create/${userID}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/profile'); // Redirect to profile or any other page
      } else {
        console.error('Profile submission failed');
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
    }

  };

  // Function to check if all required fields are filled
  const checkFormCompletion = () => {
    for (const key in formData) {
      if (formData[key] === '') {
        return false;
      }
    }
    return true;
  };

  // Update isProfileComplete whenever formData changes
  useEffect(() => {
    setIsProfileComplete(checkFormCompletion());
  }, [formData]);


  function exportToPDF() {
    setLoading(true);
    const element = document.getElementById('formContainer');
    const buttons = document.querySelectorAll('#formContainer .btn');
  
    // Store buttons in a temporary array and remove them
    const buttonArray = Array.from(buttons);
    buttonArray.forEach(button => button.parentNode?.removeChild(button));
  
    if (element) {
      html2canvas(element, { scrollY: -window.scrollY }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
  
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
  
        let position = 0;
  
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
  
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
  
        pdf.save('Member Registration Form.pdf');
        setLoading(false);
  
        // Reinsert buttons
        buttonArray.forEach(button => {
          element.appendChild(button);
        });
      });
    }
  }
  

  return (
    <div className="container-fluid bg-subtle">
      <div className="row justify-content-center py-5">
      <h2 className='text-center py-4'>Complete Your Profile</h2>
        <div className="col-lg-8 col-md-6 col-sm-12 px-0">
          <form onSubmit={handleSubmit} className='bg-light px-4 py-5 rounded pdf-style' id="formContainer">
            {/* Personal Details */}
            <h5 className="fw-bold">Personal Details</h5>
            <div className="mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-lg-4">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-2"
                      id="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-lg-4 my-3">
                    <label htmlFor="surname">Surname</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-2"
                      id="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-lg-4 my-3">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select
                      id="maritalStatus"
                      className="form-control border-dark rounded-5 my-2"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value=""></option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorce">Divorce</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-lg-4 my-3">
                    <label htmlFor="stateOfOrigin">State of Origin</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-2"
                      id="stateOfOrigin"
                      value={formData.stateOfOrigin}
                      onChange={handleChange}
                      required
                     />
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group my-lg-4 my-3">
                        <label htmlFor="nationality">Nationality</label>
                        <select
                          id="nationality"
                          className="form-control border-dark rounded-5 my-2"
                          value={formData.nationality}
                          onChange={handleChange}
                          required
                        >
                          <option value=""></option>
                          <option value="Nigerian">Nigerian</option>
                          <option value="Foreign">Foreign</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group my-lg-4 my-3">
                        <label htmlFor="gender">Gender</label>
                        <select
                          id="gender"
                          className="form-control border-dark rounded-5 my-2"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value=""></option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group my-lg-4 my-3">
                        <label htmlFor="motherName">Mother&apos;s Maiden Name</label>
                        <input
                          type="text"
                          className="form-control border-dark rounded-5 my-2"
                          id="motherName"  
                          value={formData.motherName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <h5>Contact Details</h5>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="residenceAddress">Residence Address</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="residenceAddress"
                      value={formData.residenceAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form-group my-3">
                      <label htmlFor="town">Town/City</label>
                      <input
                        type="text"
                        className="form-control border-dark rounded-5 my-3"
                        id="town"
                        value={formData.town}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form-group my-3">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        className="form-control border-dark rounded-5 my-3"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form-group my-3">
                      <label htmlFor="mobileNumber">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control border-dark rounded-5 my-3"
                        id="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Identification */}
              <h5>Identification</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="identity">Means of Identification</label>
                    <select
                      id="identity"
                      className="form-control border-dark rounded-5 my-3"
                      value={formData.identity}
                      onChange={handleChange}
                      required
                    >
                      <option value=""></option>
                      <option value="National ID">National ID</option>
                      <option value="Voter&apos;s Card">Voter&apos;s Card</option>
                      <option value="Driver&apos;s License">Driver&apos;s License</option>
                      <option value="International Passport">International Passport</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="identityNumber">Id Number</label>
                     <input type='text' className="form-control border-dark rounded-5 my-3"
                      id="identityNumber"
                      value={formData.identityNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Employment Details */}
              <h5>Employment Details</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="employmentStatus">Employment Status</label>
                    <select
                      id="employmentStatus"
                      className="form-control border-dark rounded-5 my-3"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      required
                    >
                      <option value=""></option>
                      <option value="Salary">Salary</option>
                      <option value="Self Employed">Self Employed</option>
                      <option value="Unemployed">Unemployed</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="annualSalary">Annual Salary</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="annualSalary"
                      value={formData.annualSalary}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="businessName">Business Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group my-3">
                      <label htmlFor="town">Town/City</label>
                      <input
                        type="text"
                        className="form-control border-dark rounded-5 my-3"
                        id="town"
                        value={formData.town}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="officePhoneNumber">Office Phone Number</label>
                    <input
                      type="tel"
                      className="form-control border-dark rounded-5 my-3"
                      id="officePhoneNumber"
                      value={formData.officePhoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Next of Kin */}
              <h5>Next of Kin</h5>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinFname">First Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinFname"
                      value={formData.nextOfKinFname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinSurname">Surname</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinSurname"
                      value={formData.nextOfKinSurname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinOtherNames">Other Names</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinOtherNames"
                      value={formData.nextOfKinOtherNames}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinDOB">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinDOB"
                      value={formData.nextOfKinDOB}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinRelationship">Relationship</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinRelationship"
                      value={formData.nextOfKinRelationship}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinPhone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinPhone"
                      value={formData.nextOfKinPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinHomeAddress">Home Address</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinHomeAddress"
                      value={formData.nextOfKinHomeAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinEmail">Email</label>
                    <input
                      type="email"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinEmail"
                      value={formData.nextOfKinEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinTown">Town</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinTown"
                      value={formData.nextOfKinTown}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="nextOfKinState">State</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="nextOfKinState"
                      value={formData.nextOfKinState}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Bank Details */}
              <h5>Bank Details</h5>
              <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="accountNumber">Bank Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="accountName">Account Name</label>
                    <input
                      type="text"
                      className="form-control border-dark rounded-5 my-3"
                      id="accountName"
                      value={formData.accountName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group my-3">
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                      type="Number"
                      className="form-control border-dark rounded-5 my-3"
                      id="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                {!isProfileComplete && (
                  <p>Please complete all required fields before submitting.</p>
                )}
                <button
                  type="submit"
                  className="btn bg-reg w-50 btn-dark rounded-5 my-3 border-0"
                  // disabled={!isProfileComplete}
                >
                  Save
                </button>

              
                <button
                  type="button"
                  onClick={exportToPDF}
                  className="btn bg-reg w-50 btn-dark rounded-5 my-3 border-0"
                  disabled={loading}
                >
                  {loading ? <Spinner animation="border" size="sm" /> : 'Download PDF'}
                </button>

              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  );
};export default MemberRegistration;
