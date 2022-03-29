const elMovieList = document.querySelector('.movies__list');

const menuList = document.querySelector(".offcanvas-body__list");

let newarrayCinema = [];

let n1 = Math.floor(Math.random() * movies.length - 29) + 1

let idx = 0;

for (let i = n1; i < n1 + 30; i++) {
    let li = document.createElement("li")
    li.className = 'movies__item ';
    li.innerHTML = `<div class="movies__img-item">
    <img class='movies__img' src="${movies[i].youtubePosterMax}" alt="img">
</div>
    <div class="movies__desc p-3">
    <p class="movies__year"> ${movies[i].year}</p>
        <div class="movies__header d-flex">
            <h5 class="movies__name">${movies[i].title}</h5>
            <i class='bx bxs-bookmark-star'></i>
        </div>
        <br>
        <button  type="button" class="btn btn-primary movies__wathBtn" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
                          Watch
        </button>
        
    </div>

    <div class="modal fade" id="exampleModal${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${movies[i].title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body  ">
                            <div class="modal-img-desc">
                                <div class="modal-img">
                                    <img class="modal-img__item" src="${movies[i].youtubePoster}" alt="film-img">
                                </div>
                                <div class="desc-modal">
                                    <p class="desc-modal-text">${movies[i].summary}
                                    </p>

                                </div>
                            </div>
                            <div class="modal-desc">
                                <ul class="modal__list">
                                    <li class="modal__item">Film Name: ${movies[i].title}</li>
                                    <li class="modal__item">Film Rank: ${movies[i].imdbRating} </li>
                                    <li class="modal__item">Category: ${movies[i].categories}</li>
                                    <li class="modal__item">Film Year: ${movies[i].year}</li>
                                    <li class="modal__item">Film runtime:${movies[i].runtime} </li>
                                </ul>
                                <div class="modal-desc__btns">
                                    <a class="modal__startFilm" href="${movies[i].imdbPage}">Start film</a>
                                    <button class="modal__favoritBtn" onclick="addItem('${movies[i].imdbId}')
                                        ">Add to favourits</button>
                                </div>
                                <div class="like-btns">
                                    <i class='bx bx-like'></i>
                                    <input type="number" class="likeInput">
                                    <i class='bx bx-dislike'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

 `
    idx++;
    elMovieList.appendChild(li)


}

let newMovies = [];

function addItem(imdbId) {
    for (let i = 0; i < movies.length; i++) {
        if (imdbId == movies[i].imdbId) {
            newMovies.push(movies[i]);
        }
        console.log(newMovies);
    }

    for (let i = 0; i < newMovies.length; i++) {

        let li = document.createElement("li");
        li.className = "movies__item ";
        li.innerHTML = `
              <div class="movies__img-item">
              <img class='movies__img' src="${newMovies[i].youtubePosterMax}" alt="img">
          </div>
              <div class="movies__desc p-3">
              <p class="movies__year"> ${newMovies[i].year}</p>
                  <div class="movies__header d-flex">
                      <h5 class="movies__name">${newMovies[i].title}</h5>
                      <i class='bx bxs-bookmark-star'></i>
                  </div>
                  <br>
                  <button  type="button" class="btn btn-primary movies__wathBtn" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
                                    Watch
                  </button>
                <button class="pizza__btn remove" onclick="remove('${newMovies[i].imdbId}')">
                  -
                </button>
              </div> 
    `;

        menuList.appendChild(li);

    }
}

// function removeItem(imdbId) {
//     let newArrRemove = [];

//     for (let i = 0; i < newMovies.length; i++) {
//         if (imdbId != i) {
//             newArrRemove.push(newMovies[i]);
//         }
//     }

//     newMovies = newArrRemove;

//     menuList.innerHTML = "";

// }


const Filterform = document.getElementById('form');
const search = document.getElementsByClassName('search-bar__item2')
const result = document.getElementsByClassName('search__results')

Filterform.addEventListener('submit', (e) => {
    e.preventDefault();
    let value2 = search.value.toLowerCase();


    result.innerHTML = '';
    movies.forEach(el => {
        let title = el.title.toLowerCase();
        if (title.indexOf(value) != -1) {
            let li = document.createElement('li');
            li.className = "movies__item";
            li.innerHTML = `  
            <div class="movies__img-item">
        <img class='movies__img' src="${el.youtubePosterMax}" alt="img">
    </div>
        <div class="movies__desc p-3">
        <p class="movies__year"> ${el.year}</p>
            <div class="movies__header d-flex">
                <h5 class="movies__name">${el.title}</h5>
                <i class='bx bxs-bookmark-star'></i>
            </div>
            <br>
            <button  type="button" class="btn btn-primary movies__wathBtn" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
                              Watch
            </button>
          <button class="pizza__btn remove" onclick="remove('${el.imdbId}')">
            -
          </button>
        </div> `;


            result.appendChild(li);
        }
    });

    search.value = '';
});