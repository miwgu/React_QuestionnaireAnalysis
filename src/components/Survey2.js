import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
//import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import axios from 'axios';
import Header2 from './Header2';
import Questions2 from './Questions2';

const PlotlyRenderers = createPlotlyRenderers(Plot);


class Survey2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data:[]
        };
    }


    componentDidMount(){

      axios.get('http://localhost:8080/answer/getAllAnswersWithPatientIdBySurveyId2/2')
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
            <Header2 />
            <div className="scroll_container">
              <Questions2 />
            </div>

          
            <PivotTableUI 
                style={{maxWidth: false}}
                data={data}
                onChange={s => this.setState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...this.state}
            />

            </div>
        );
    }
}

export default Survey2