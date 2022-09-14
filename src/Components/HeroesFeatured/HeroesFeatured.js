import { React, useState, useEffect } from "react";
import { getBasicHeroInfoById } from "../../requests";
import HeroSimplified from "../HeroSimplified/HeroSimplified";
import Loader from "../Loader/Loader";
import "./HeroesFeatured.css";

const featuredHeroesIds = [70, 457, 514];

// /// Class version of the component
// class HeroesFeatured extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       featuredHeroesList: [],
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     this.fetchAndRenderFeaturedHeroes();
//   }

//   fetchAndRenderFeaturedHeroes = async () => {
//     let heroes = [];
//     for (const heroId of featuredHeroesIds) {
//       const data = await getBasicHeroInfoById(heroId);
//       heroes.push(data);
//     }

//     this.setSate({ featuredHeroesList: heroes, isLoading: false });
//   };

//   render() {
//     const { isLoading, featuredHeroesList } = this.state;

//     return (
//       <section className="featured">
//         <h1>Featured Heroes</h1>
//         {!isLoading && (
//           <div className="featured__list">
//             {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
//               <HeroSimplified
//                 key={id}
//                 name={name}
//                 imgUrl={imgUrl}
//                 powerstats={powerstats}
//                 id={id}
//               />
//             ))}
//           </div>
//         )}{" "}
//         {isLoading && (
//           <div className="loader-container">
//             <Loader />
//           </div>
//         )}
//       </section>
//     );
//   }
// }

// //// Function Component

function HeroesFeatured() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setfeaturedHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId);
      heroes.push(data);
    }
    setfeaturedHeroesList(heroes);
    setLoadingState(false);
  };

  return (
    <section className="featured">
      <h1>Featured Heroes</h1>
      {!isLoading && (
        <div className="featured__list">
          {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
            <HeroSimplified
              key={id}
              name={name}
              imgUrl={imgUrl}
              powerstats={powerstats}
              id={id}
            />
          ))}
        </div>
      )}{" "}
      {isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </section>
  );
}

export default HeroesFeatured;
