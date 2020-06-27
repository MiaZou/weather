import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class SubmitBtn extends React.Component {
  onZipSubmit = () => {
    this.props.onZipSubmit();
  }

  render () {
    return (
      <div onClick={this.onZipSubmit} className="submit-btn">
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>{this.props.value}</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default SubmitBtn;