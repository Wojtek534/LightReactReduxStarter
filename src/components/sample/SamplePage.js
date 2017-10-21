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

class SamplePage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.addData = this.addData.bind(this)
    this.getData = this.getData.bind(this)
  }
  addData (event) {
    event.preventDefault();
  }
  getData(){
    BrowserRouter.push('/about');
  }
  render()
  {
    return (
    <div id = "sample" >
      <div className="page-section">
        <div className="col-md-4 offset-md-4">
          <div className="section">
            <SampleForm
            onSubmit={this.getData}/>
          </div>
        </div>
      </div>
    </div>)
  }
}
// Redux
//
// Define output from actions
SamplePage.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    // from redux reducers index
    data: state.data
  }
}
// function to fire off actions
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(SampleActions, dispatch)
  }
}
// mapDispatchToProps
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(SamplePage);
