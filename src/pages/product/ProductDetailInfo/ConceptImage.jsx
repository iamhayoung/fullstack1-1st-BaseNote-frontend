import React, { Component } from 'react';
import PerfumeConceptImage from '../../../assets/perfumeConceptImage.png';
import './ConceptImage.scss';

class ConceptImage extends Component {
  render() {
    return (
      <div className="conceptImage">
        <img
          className="img-concept"
          src={PerfumeConceptImage}
          alt="BASENOTE perfume"
        />
      </div>
    );
  }
}

export default ConceptImage;
