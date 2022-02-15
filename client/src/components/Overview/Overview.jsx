/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import style from './Overview.module.css';

const product_id = 40346;

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: [],
      selectedVariant: {},
      info: false,
    };

    this.setSelectedVariant = this.setSelectedVariant.bind(this);
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
    ).then( () => {
      this.state.variants.forEach(
        (v) => {
          if (v['default?']) {
            this.setState({ selectedVariant: v });
          }
        });
      }
    ).then( () => { this.setState({ info: true })}
    );
  }

  setSelectedVariant(v) {
    this.setState({ selectedVariant: v });
  }

  render() {
    if (!this.state.info) { return <div> test </div>; }

    return (
      <div>
        <FeaturedImage variant={this.state.selectedVariant} />
        <StylesList variants={this.state.variants} setSelectedVariant={this.setSelectedVariant}/>
      </div>
    );
  }
}

export default Overview;

function FeaturedImage(props) {
  if (!props.variant) { return <div>test</div> }
  return (
    <div>
      <img
        className={style.FeaturedImage}
        src={props.variant.photos[0].url}
        alt={props.variant.name}
      />
    </div>
  );
}

function StylesList(props) {
  function setSelectedVariant(v) {
    props.setSelectedVariant(v);
  }
  return (
    <div className={style.StyleButtonContainer}>
      {
        props.variants.map((variant, i) =>
        <StyleButton
          key={i}
          variant={variant}
          setSelectedVariant={setSelectedVariant}
        /> )
      }
    </div>
  );
}

function StyleButton(props) {
  function handleClick() {
    console.log(props.variant.name);
    props.setSelectedVariant(props.variant);
  }

  return (
    <div>
      <img
        className={style.StyleButton}
        src={props.variant.photos[0].thumbnail_url}
        alt={props.variant.name}
        onClick={handleClick}
      />
    </div>
  );
}
