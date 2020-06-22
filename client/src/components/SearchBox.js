import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="search-box">
        <TextField label="Location" id="standard-size-small" defaultValue="Search" size="small" />
      </div>
    );
  }
}

export default SearchBox;