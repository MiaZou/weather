import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const SubmitBtn = ({value}) => {

  return (
    <div className="submit-btn">
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button>{value}</Button>
      </ButtonGroup>
    </div>
  );
}

export default SubmitBtn;