import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class SearchBox extends React.Component {
  state = { zip: '' };

  onZipChange = event => {
    this.setState({zip: event.target.value });
    setTimeout(() => {
      this.props.onZipChange(this.state.zip);
    }, 10);
  };

  render() {
    return (
      <div className="search-box">
        <TextField onChange={this.onZipChange} label="zip code" id="standard-size-small" defaultValue="Search" size="small" />
      </div>
    );
  }
}

export default SearchBox;