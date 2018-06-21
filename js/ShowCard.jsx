// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ShowCard = props => (  
  <div className="show-card">        
      <img src={`/public/img/posters/${props.show.poster}`} alt={`${props.show.title} Show Poster`}/>
      <div>
          <h3> {props.show.title} </h3>
          <h4>{props.show.year}</h4>
          <p>{props.show.description}</p>
      </div>  
  </div>
  );

// $FlowFixMe
// const Wrapper = styled(Link)`
//   width: 32%;
//   border: 2px solid #333;
//   border-radius: 4px;
//   margin-bottom: 25px;
//   padding-right: 10px;
//   overflow: hidden;
//   text-decoration: none;
//   color: black;
// `;

// const Image = styled.img`
//   width: 46%;
//   float: left;
//   margin-right: 10px;
// `;

// class ShowCard extends React.Component {
//   shouldComponentUpdate() {
//     return false;
//   }
//   props: {
//     poster: string,
//     title: string,
//     year: string,
//     description: string,
//     imdbID: string
//   };
//   render() {
//     return (
//       <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
//         <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
//         <div>
//           <h3>{this.props.title}</h3>
//           <h4>({this.props.year})</h4>
//           <p>{this.props.description}</p>
//         </div>
//       </Wrapper>
//     );
//   }
// }

export default ShowCard;
