// import { useState } from 'react';
// // import PersonalDetails from './PersonalDetails';
// import RegPayment from './RegPayment';
// // import Confirmation from './Confirmation';
// import './Stepper.css';

// const Stepper = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNext = () => {
//     setCurrentStep(prevStep => prevStep + 1);
//   };

//   const handlePrev = () => {
//     setCurrentStep(prevStep => prevStep - 1);
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 0:
//         return <PersonalDetails onNext={handleNext} />;
//       case 1:
//         return <RegPayment onNext={handleNext} onPrev={handlePrev} />;
//       case 2:
//         return <Confirmation onPrev={handlePrev} />;
//       default:
//         return <PersonalDetails onNext={handleNext} />;
//     }
//   };

//   return (
//     <div className="stepper-container">
//       {renderStep()}
//       <div className="stepper-buttons">
//         {currentStep > 0 && (
//           <button className="btn btn-secondary" onClick={handlePrev}>
//             Previous
//           </button>
//         )}
//         {currentStep < 2 && (
//           <button className="btn btn-primary" onClick={handleNext}>
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Stepper;