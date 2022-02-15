import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
//import createPlotlyComponent from 'react-plotly.js/factory';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import axios from 'axios';
import Header1 from './Header1';
import Questions1 from './Questions1';

const PlotlyRenderers = createPlotlyRenderers(Plot);


class Survey1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data:[]
        };
    }


    componentDidMount(){

      axios.get('http://localhost:8080/answer/getAllAnswersWithPatientIdBySurveyId/1')
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
            <Header1 />
            <div className="scroll_container">
              <Questions1 />
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

export default Survey1