const elMovieList = document.querySelector('.movies__list');

const menuList = document.querySelector(".offcanvas-body__list");
const elbody = document.querySelector("#body")
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

function removeItem(imdbId) {
    let newArrRemove = [];

    for (let i = 0; i < newMovies.length; i++) {
        if (imdbId != i) {
            newArrRemove.push(newMovies[i]);
        }
    }

    newMovies = newArrRemove;

    menuList.innerHTML = "";

}



const elSearchBox = document.querySelector('#searchbox');
const elSearch = document.querySelector('#id-search');
const elIsearch = document.querySelector('#id-Isearch');
const elSearchBtn = document.querySelector('#id-searchBtn');
const elSearchMain = document.querySelector('#search-main');


function funMain(e) {
    let a = e.path[1].id
    let b = e.path[0].id

    console.log(b)

    if (a == elSearchBox.id || b == elSearchBox.id) {
        elSearchBox.style.display = 'none'
        elIsearch.value = ""
        elSearch.innerHTML = ''
        elbody.style.overflow = 'auto'
    }
}

elIsearch.addEventListener("focusin", myFocusFunction);

function myFocusFunction() {
    elSearchBox.style.display = 'block';
    elbody.style.overflow = 'hidden'
}


let a = 0
elIsearch.addEventListener('keyup', (e) => {
    elSearch.innerHTML = ''
    let values = e.target.value.toLowerCase()

    if (!elIsearch.value.trim()) {
        elSearch.innerHTML = null
        elIsearch.value = null
    } else {

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].title.toLowerCase().indexOf(values) != -1) {

                let [li, imgdiv, img, h3] = createElements('li', 'div', 'img', 'h3')

                li.className = 'search__item d-flex';
                li.setAttribute('onclick', 'funFilms(event)');
                li.setAttribute('id', movies[i].imdbId);

                imgdiv.className = 'search__imgbox';
                img.className = "search__img"
                img.setAttribute('src', movies[i].youtubePoster);
                h3.className = 'search__name';
                h3.textContent = movies[i].title;

                //liga qoshish
                imgdiv.appendChild(img)
                li.appendChild(imgdiv)
                li.appendChild(h3)
                elSearch.appendChild(li);
            }
        }
    }
})





// function addItemArray(listId) {
//     newarrayCinema.push(movies.filter((item) => item.imdbId === listId)[0]);
//     addCart(newarrayCinema);
// }


// function addCart(cartCinemaArray) {
//     let arr = cartCinemaArray;
//     let topArr = [];

//     arr.forEach((item) => {
//         if (arr != "") topArr.push(arr[0]);
//         arr = arr.filter((el) => {
//             return arr[0].imdbId != el.imdbId;
//         });
//     });

//     let li = 0;
//     let listArr = [];


//     topArr.forEach((item) => {
//         let count = newarrayCinema.filter((element) => {
//             return element.imdbId == item.imdbId;
//         });
//         li = `<li class="movies__item ">
//         <div class="movies__img-item">
//         <img class='movies__img' src="${item.youtubePosterMax}" alt="img">
//     </div>
//         <div class="movies__desc p-3">
//         <p class="movies__year"> ${item.year}</p>
//             <div class="movies__header d-flex">
//                 <h5 class="movies__name">${item.title}</h5>
//                 <i class='bx bxs-bookmark-star'></i>
//             </div>
//             <br>
//             <span id="total" class="count">
//              ${count.length}
//             </span>
//             <button  type="button" class="btn btn-primary movies__wathBtn" data-bs-toggle="modal" data-bs-target="#exampleModal${idx}">
//                               Watch
//             </button>
//           <button class="pizza__btn remove" onclick="remove(${item.imdbId})">
//             -
//           </button>
//         </div> 
//     </li>
// `;



//         listArr.push(li);
//         menuList.innerHTML = listArr.join("");
//     });
// }





// elAll.addEventListener('click', () => {
//     let sortLi = document.querySelectorAll('li');

//     let a = [...sortLi].filter(el => {
//         if (el.classList.contains("contact__family") || el.classList.contains("contact__friends") || el.classList.contains("contact__colleague")) {
//             el.style.display = 'block'
//             return el
//         }
//     })

//     console.log(a)

// });

// elFam.addEventListener('click', () => {
//     let sortLi = document.querySelectorAll('li');

//     let a = [...sortLi].filter(el => {
//         if (!el.classList.contains("contact__family")) {
//             el.style.display = 'none'
//             return el
//         } else {
//             el.style.display = 'block'
//             return el
//         }
//     })
// });

// elFri.addEventListener('click', () => {
//     let sortLi = document.querySelectorAll('li');

//     let a = [...sortLi].filter(el => {
//         if (!el.classList.contains("contact__friends")) {
//             el.style.display = 'none'
//             return el
//         } else {
//             el.style.display = 'block'
//             return el
//         }
//     })



// });

// elCol.addEventListener('click', () => {
//     let sortLi = document.querySelectorAll('li');

//     let a = [...sortLi].filter(el => {
//         if (!el.classList.contains("contact__colleague")) {
//             el.style.display = 'none'
//             return el
//         } else {
//             el.style.display = 'block'
//             return el
//         }
//     });


// });



// $('.slick-slide').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });