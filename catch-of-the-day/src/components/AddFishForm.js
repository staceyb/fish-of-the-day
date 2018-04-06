import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func.isRequired
  }

  createFish = event => {
    event.preventDefault();
   
    const fish = {
      nameRef: this.nameRef.value.value, 
      priceRef: this.priceRef.value.value, 
      statusRef: this.statusRef.value.value, 
      descRef: this.descRef.value.value, 
      imageRef: this.imageRef.value.value 
    }
    this.props.addFish(fish);
    //reset form
    event.currentTarget.reset();
  };

  render() {
   
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          type="text"
          name="name"
          ref={this.nameRef}
          id="name"
          placeholder="Name"
        />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          id="price"
          placeholder="Price"
        />
        <select name="status" id="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          id="desc"
          cols="30"
          rows="10"
          placeholder="Desc"
        />
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          id="image"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
export default AddFishForm;
