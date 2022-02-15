/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import style from './Overview.module.css';

const product_id = 40344;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/styles/',
      params: { product_id },
    }).then(
      (response) => {
        this.setState({ variants: response.data.results });
      },
    );
  }

  render() {
    console.log('render');
    return (
      <StylesList variants={this.state.variants} />
    );
  }
}

export default Overview;

function StylesList(props) {
  return (
    <div className={style.StyleButtonContainer}>
      {
        props.variants.map((variant, i) => <StyleButton key={i} variant={variant} /> )
      }
    </div>
  );
}

function StyleButton(props) {
  return (
    <div>
      <img
        className={style.StyleButton}
        src={props.variant.photos[0].thumbnail_url}
        alt={props.variant.name}
        onClick={()=>{console.log(props.variant.name)}}
      />
    </div>
  );
}
