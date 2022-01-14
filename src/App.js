import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Survey1 from './components/Survey1';
import Survey2 from './components/Survey2';


function App() {
  return (
    <div className="container">
    <Tabs forceRenderTabPanel defaultIndex={1}>
    <TabList>
      <Tab>Category:Psoriasis</Tab>
      <Tab>Category:Cancer</Tab>
    </TabList>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Om Psoriasis</Tab>
          <Tab>Survey-Psoriasis(grundläggande)</Tab>
          <Tab>Survey-Psoriasis(XXXXX)</Tab>
        </TabList>

        <TabPanel>
          <p><h1><b>Psoriasis</b></h1>
            Psoriasis är en systemisk sjukdom med en inflammatorisk sjukdomsprocess, som framför allt orsakar utslag och fjällande hud, men som också kan påverka leder, hjärt- och kärlsystemet med mera.[1] Sjukdomen smittar inte, men är kronisk; dock kan patienter leva symptomfria.
            2–4 procent av den svenska befolkningen lider av psoriasis.[2]
          </p>
          <p>
              Source:{' '}
          <a href="https://sv.wikipedia.org/wiki/Psoriasis" target="_blank">
          Wikipedia
          </a>
          </p>
          <img src="https://cdn.pixabay.com/photo/2021/02/08/20/24/psoriasis-5996424_1280.jpg" alt="Psoriasis_image" width="200" height="150" />
          
        </TabPanel>
        <TabPanel>
          <Survey1 />
        </TabPanel>

      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab style={{color: "white", background: "RoyalBlue"}}>Om Cancer</Tab>
          <Tab style={{color: "white", background: "RoyalBlue"}}>Survey-Cancer(grundläggande)</Tab>
          <Tab style={{color: "white", background: "RoyalBlue"}}>Survey-Cancer(XXXXX)</Tab>
        </TabList>
        <TabPanel>
          <p><h1><b>Cancer</b></h1> 
              Cancer[a] är en grupp sjukdomar som omfattar onormal celldelning som får förmåga att tränga in i vävnad eller sprida sig till andra delar av kroppen.[1][2] De vanligaste cancertumörerna är av typen carcinom. Det finns även cancertyper som inte ger upphov till någon fast tumör, exempelvis leukemier. Alla tumörer är inte cancer, det finns även godartade tumörer som inte sprider sig till andra delar av kroppen. Sådana kan fortfarande vara farliga om de blir tillräckligt stora eller sitter olägligt, som exempelvis hjärntumörer.[2]
              Möjliga symptom kan vara en knöl, onormal blödning, långvarig hosta, oförklarlig viktnedgång eller förändrade tarmvanor.[3] Även om de här symptomen kan tyda på cancer kan de också ha andra orsaker.[3] Det finns över 100 kända cancertyper hos människan.[2]
              Cancer är en vanlig dödsorsak, men ungefär hälften av alla diagnostiserade överlever sjukdomen. När cancer dödar beror det ofta på att ursprungstumören bildat metastaser (dottertumörer) i livsviktiga organ vilkas funktion då kan svikta. Andra dödsorsaker av cancer kan vara att cancern leder till utsöndring av hormoner, mineraler eller andra substanser, eller att den nedsätter immunförsvaret.[4]
          </p>
          <p>
              Source:{' '}
          <a href="https://sv.wikipedia.org/wiki/Cancer" target="_blank">
          Wikipedia
          </a>
          </p>
          <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"  alt="Cancer_image" width="200" height="150"/>
          
        </TabPanel>
        <TabPanel>
          <Survey2 />
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
  </div>
  );
}

export default App;