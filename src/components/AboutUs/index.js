import "./AboutUs.scss";


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from './Detail/AboutUs';
import Guarantee from './Detail/Guarantee';
import Privacy from './Detail/PrivacyPolicy';
import Term from './Detail/TermOfUse';
import Payment from './Detail/Payments';

function index() {
  return (
    <div>
      
      <Tabs
      defaultActiveKey="about"
      id="justify-tab-example"
      className="mb-3 mt-3"
      
      justify
    >
      <Tab eventKey="about" title="About Us" >
        <About/>
       </Tab>
      <Tab eventKey="guarantee" title="Guarantee">
        <Guarantee />
      </Tab>
      <Tab eventKey="Privacy" title="Privacy Policy">
        <Privacy/>
      </Tab>
      <Tab eventKey="term" title="Term of use" >
        <Term/>
      </Tab>
      <Tab eventKey="payment" title="Payment" >
        <Payment/>
        </Tab>
    </Tabs>        
      
    </div>
  );
}

export default index;
