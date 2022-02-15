import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Contents1 from '../components/Contents1';
import Survey1 from '../components/Survey1';


function Psoriasis_1() {
  return (
    <div className="container">
    <Tabs>
    <TabList>
      <Tab>Om Psoriasis</Tab>
      <Tab>Psoriasis -Grundläggande</Tab>
      <Tab>Psoriasis -Svårighetsgrad</Tab>
    </TabList>

    <TabPanel>
       <Contents1 />
    </TabPanel>
    <TabPanel>
       <Survey1 />
    </TabPanel>
    <TabPanel>
        <p>xxxxxx</p>
    </TabPanel>

  </Tabs>

  </div>
  );
}

export default Psoriasis_1;