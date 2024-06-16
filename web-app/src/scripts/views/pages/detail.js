// import UrlParser from '../../routes/url-parser';
// //import { createrestaurantsDetailTemplate } from '../templates/template-creator-restaurant';

// const Detail = {
//   async render() {
//     return `
//       <div id="restaurant" class="restaurant"></div>
//       <div id="likeButtonContainer"></div>
//     `;
//   },

//   async afterRender() {
//     const url = UrlParser.parseActiveUrlWithoutCombiner();
//     //const restaurant = await RestaurantDicodingSource.detailRestaurants(url.id);
//     const restaurantContainer = document.querySelector('#restaurant');

//     restaurantContainer.innerHTML = createrestaurantsDetailTemplate(restaurant);
//     LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       restaurant: {
//         id: restaurant.id,
//         title: restaurant.title,
//         name: restaurant.name,
//         description: restaurant.description,
//         address: restaurant.address,
//         city: restaurant.city,
//         pictureId: restaurant.pictureId,
//       },
//     });
//   },
// };

// export default Detail;
