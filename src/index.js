import { refs } from './partials/js/refs';
import { renderPicture, clearResults } from './partials/js/rendering';
import { fetchPictures } from './partials/js/api';
import Notiflix from 'notiflix';


refs.input.addEventListener('submit', onSubmit);

let searchQuery = '';
let currentPage = 1;

async function onSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();

  if (searchQuery === '') {
    return Notiflix.Notify.info(
      'Please, enter the information you are looking for.'
    );
  }

  const { hits, totalHits } = await fetchPictures(searchQuery, currentPage);
  console.log(hits);
  console.log(totalHits);

  if (hits.length === 0) {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  renderPicture(hits);
}
