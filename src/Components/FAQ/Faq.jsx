import './Faq.css';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';

const Faq = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className="container bg-secondary rounded-4 mx-auto bg-faq w-100 p-5">
        <h2 className='text-center my-4'>Frequently Asked Questions</h2>
        <BootstrapAccordion defaultActiveKey="0" className='faq-bg-1'>
          <BootstrapAccordion.Item eventKey="0">
            <BootstrapAccordion.Header>Is Easy-billz Cooperative approved?</BootstrapAccordion.Header>
            <BootstrapAccordion.Body  className='faq-bg text-light'>
              We are a registered cooperative - easy-bills multipurpose cooperative society Ltd with registration number: RS 35119. To further enhance our effective commitment to our members and non-membership participation, we are in partnership with a microfinance bank.
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="1">
            <BootstrapAccordion.Header>Is my money safe?</BootstrapAccordion.Header>
            <BootstrapAccordion.Body className='faq-bg text-light'>
              We are a registered cooperative - easy-bills multipurpose cooperative society Ltd with registration number: RS 35119. To further enhance our effective commitment to our members and non-membership participation, we are in partnership with a microfinance bank.
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="2">
            <BootstrapAccordion.Header>How can I join?</BootstrapAccordion.Header>
            <BootstrapAccordion.Body className='faq-bg text-light'>
              You join by signing up the membership form and registering with a token (2k). Then, choose a saving plan you want to cultivate, invest plan, etc.
            </BootstrapAccordion.Body >
          </BootstrapAccordion.Item>
        </BootstrapAccordion>
      </div>
    </div>
  );
};

export default Faq;