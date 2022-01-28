import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Contents2 from '../components/Contents2';
import Survey2 from '../components/Survey2';

function Cancer_2() {
  return (
    <div className="container">
    <Tabs>
    <TabList>
      <Tab>Om Cancer</Tab>
      <Tab>Cancer</Tab>
      <Tab>3</Tab>
    </TabList>

    <TabPanel>
       <Contents2 />
    </TabPanel>
    <TabPanel> 
        <Survey2 /> 
    </TabPanel>
    <TabPanel>
    </TabPanel>

  </Tabs>

  </div>
  );
}

export default Cancer_2;