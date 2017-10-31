import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// redux
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
// actions
import * as SampleActions from '../../redux/actions/sampleActions';
// presentation
import SampleForm from './presentation/SampleForm';
import SampleTable from './presentation/SampleTable';

class SamplePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirect = this
      .redirect
      .bind(this);
    this.loadFromJson = this
      .loadFromJson
      .bind(this);
  };
  redirect() {
    BrowserRouter.push('/about');
  };
  sampleRow(sample, index) {
    return <div key={index}>{sample.id}</div>;
  };
  loadFromJson(){
    alert(this.props.sample[2].values.start);
  };
  //<SampleTable SampleStore={this.props.sample}/>
  render()
  {
    debugger;
    return (
      <div id="sample">
        <div className="container">
          <div className="col">
            <div className="section">
              <h3>Loaded sample</h3>
              <button className="bg primary" onClick={this.loadFromJson}>Alert</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// Redux
//
// Define output from actions
SamplePage.propTypes = {
  actions: PropTypes.object.isRequired,
  sample: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    // from redux reducers index
    sample: state.sample
  }
}
// function to fire off actions
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SampleActions, dispatch)
  }
}
// mapDispatchToProps
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(SamplePage);
