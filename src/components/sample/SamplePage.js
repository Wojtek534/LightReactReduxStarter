import React from 'react';
import {connect} from 'react-redux';
// redux
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
// actions
import * as DataActions from '../../redux/actions/dataActions';

class SamplePage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.getData = this.getData.bind(this)
  }
  getData(){
    this.props.actions.getData(this.state.data);
  }
  render()
  {
    return (
    < div id = "sample" >
      <div className="page-section">
        <div className="col-md-4">
          <p className="section">
            sample text
          </p>
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
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(DataActions, dispatch)
  }
}
// mapDispatchToProps
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(SamplePage);
