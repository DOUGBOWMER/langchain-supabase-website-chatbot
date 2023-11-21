import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Inventory.styles';

class Inventory extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  UNSAFE_componentWillMount = () => {
    console.log('Inventory will mount');
  }

  componentDidMount = () => {
    console.log('Inventory mounted');
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    console.log('Inventory will receive props', nextProps);
  }

  UNSAFE_componentWillUpdate = (nextProps, nextState) => {
    console.log('Inventory will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Inventory did update');
  }

  componentWillUnmount = () => {
    console.log('Inventory will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="InventoryWrapper">
        Test content
      </div>
    );
  }
}

Inventory.propTypes = {
  // bla: PropTypes.string,
};

Inventory.defaultProps = {
  // bla: 'test',
};

export default Inventory;
