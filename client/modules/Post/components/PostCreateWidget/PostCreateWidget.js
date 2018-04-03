import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Checkbox from '../../../App/Components/Checkbox';

// Import Style
import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
	
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => { 
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = label => ( 
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
	  ref={label}
    />
  )
  
  addPost = () => {
    const nameRef = this.refs.name;
    const instrumentRef = this.refs.instrument;
    if (nameRef.value && instrumentRef.value) {
      this.props.addPost(nameRef.value, instrumentRef.value, this.refs.singer.state.isChecked);
      nameRef.value = instrumentRef.value = '';
      this.refs.singer.setState({isChecked: false});
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.memberName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.instrument} className={styles['form-field']} ref="instrument" />
		  {this.createCheckbox("singer")}
          <a className='btn btn-primary' href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostCreateWidget);