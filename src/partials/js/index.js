import { refs } from './partials/css/js/refs';
import { renderPicture, clearResults } from './partials/css/js/rendering';
import { fetchPictures } from './partials/css/js/api';
import Notiflix from 'notiflix';
import SimpleLightBox from 'simplelightbox';

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
