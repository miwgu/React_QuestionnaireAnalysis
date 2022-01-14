import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
//import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import axios from 'axios';
import Header from './components/Header';
import Questions from './components/Questions';

//Test
import Survey2 from './components/Survey2';


// create Plotly React component via dependency injection
//const Plot = createPlotlyComponent(window.Plotly);

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

// see documentation for supported input formats
//const data = [['attribute', 'attribute2'], ['value1', 'value2']];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data:[]
        };
    }


    componentDidMount(){
      axios.get('http://localhost:8080/answer/getAllAnswersWithPatientIdBySurveyId/1')
      //axios.get('http://localhost:8080/answer/answerBySurveyId/1')
      //axios.get('https://pivottable.js.org/examples/mps.json')
      .then( res=> {
        console.log(res);
        console.log(res.data);
        this.setState({data:res.data});
      })
      .catch(error=>{
        console.log(error);
      })
      .then(()=>{
        console.log("the data is loaded");
      });
    }

    render() {
      let data= this.state.data
        return (
          <div className="container">
            <Header />
            <div className="scroll_container">
              <Questions />
            </div>

          
            <PivotTableUI
                data={data}
                onChange={s => this.setState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...this.state}
            />

           {/* test */}

            <Survey2 />
            
            </div>
        );
    }
}

export default App
//ReactDOM.render(<App />, document.body);