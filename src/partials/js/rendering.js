import { refs } from './refs';

function renderPicture(arr) {
  if (!arr) return;

  //маркап это наша разметка одной карточки с картинкой
  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        //дозаполнить
        return `<div class="photo-card">
    <img src="${webformatURL}" href="${largeImageURL}" alt="" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>${likes}</b>
      </p>
      <p class="info-item">
        <b>${views}</b>
      </p>
      <p class="info-item">
        <b>${comments}</b>
      </p>
      <p class="info-item">
        <b>${downloads}</b>
      </p>
    </div>
  </div>`;
      }
    )
    .join('');

  //отправляем разметку в гэллэри в хтмл
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

//функция очистки предыдущих результатов

function clearResults() {
  refs.gallery.innerHTML = '';
}
export { renderPicture, clearResults };