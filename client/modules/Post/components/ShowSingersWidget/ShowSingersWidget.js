import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Checkbox from '../../../App/Components/Checkbox';

// Import Style
//import styles from './PostCreateWidget.css';

export class ShowSingersWidget extends Component {
	
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
	  this.props.showSingers(true);		
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
	  this.props.showSingers(false);	  
	}
  }
  
  createCheckbox = (label, num)  => ( 
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
	  ref={label}
    />
  )
  
  render() {
    return (
	<div>
		  {this.createCheckbox("Show me the singers!", 3)}
	</div>		  
    );
  }
}

ShowSingersWidget.propTypes = {
  showSingers: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ShowSingersWidget);