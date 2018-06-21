// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';
import preload from '../data'

//const shows = preload.shows.map( (show, i) => <h3> {show.title +' '+ (i + 1) } </h3> )


const Search = () => (
<div className = "search">
  {/*<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>*/}
  {/*shows*/}
  {preload.shows.map( show => <ShowCard show = {show} />)}
</div>
);


// const Search = () => (
//   <div className = "search">
//     {/*<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>*/}
//     {/*shows*/}
//       {preload.shows.map( (show, i) => 
//       <div className="show-card">
        
//         <img src={`/public/img/posters/${show.poster}`} alt={`${show.title} Show Poster`}/>
//         <div>
//           <h3> {show.title +' '+ (i + 1) } </h3>
//           <h4>{show.year}</h4>
//           <p>{show.description}</p>
//         </div>   
//       </div>  
//       )}
  
//   </div>
//   )


export default Search


// const Search = (props: {
//   searchTerm: string, // eslint-disable-line react/no-unused-prop-types
//   shows: Array<Show>
// }) => (
//   <div className="search">
//     <Header showSearch />
//     <div>
//       {props.shows
//         .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
//         .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)}
//     </div>
//   </div>
// );

// const mapStateToProps = state => ({
//   searchTerm: state.searchTerm
// });

// export const Unwrapped = Search;
// export default connect(mapStateToProps)(Search);
