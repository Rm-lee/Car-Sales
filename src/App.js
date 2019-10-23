import React from 'react';
import {connect} from "react-redux"
import { addToCar } from './actions/addFeature'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
 

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addToCar(item)
  };
  return (
    <div className="boxes">
      <div className="box">
        
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    additionalPrice: state.add.additionalPrice,
    car: state.add.car,
    additionalFeatures: state.add.additionalFeatures
  }

}
const mapDispatchToProps = {
  addToCar: addToCar
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(App);
