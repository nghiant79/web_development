const dataY = [
  {
    name: "WHITE SAMOYED",
    link: "#",
    image: "/images/pet/dog-5.jpeg",
    category: "new",
    author: "Davis John",
  },
  {
    name: "BEAUTY POODLE",
    link: "#",
    image: "/images/pet/dog-6.jpeg",
    category: "new",
    author: "Nghia Nguyen",
  },
  {
    name: "CUTE HUSKY",
    link: "#",
    image: "/images/pet/dog-7.jpeg",
    category: "new",
    author: "Jenifer Caleb",
  },
  {
    name: "PUG FAT",
    link: "#",
    image: "/images/pet/dog-8.jpeg",
    category: "new",
    author: "Keny Swiff",
  },
];
let html = "";
dataY.forEach((el) => {
  html += `
        <article class="card">
        <div class="card__info-hover"></div>
        <div class="card__img"></div>
        <a href="${el.link}" class="card_link">
          <div
            class="card__img--hover"
            style="background-image: url('${el.image}')"
          ></div>
        </a>
        <div class="card__info">
          <span class="card__category">${el.category}</span>
          <h3 class="card__title">${el.name}</h3>
          <span class="card__by">
            by
            <a href="#" class="card__from" title="from">
              ${el.author}
            </a>
          </span>
        </div>
      </article>
      `;
});
document.getElementById("fetchDom").innerHTML += html;

fetch("https://okla.nqdat.com/api/youtube/data")
  .then((res) => res.json())
  .then((res) => {
    let html = "";
    res.data.forEach((el) => {
      html += `
        <article class="card">
        <div class="card__info-hover"></div>
        <div class="card__img"></div>
        <a href="${el.link}" class="card_link">
          <div
            class="card__img--hover"
            style="background-image: url('${el.image}')"
          ></div>
        </a>
        <div class="card__info">
          <span class="card__category">${el.category}</span>
          <h3 class="card__title">${el.name}</h3>
          <span class="card__by">
            by
            <a href="#" class="card__from" title="from">
              ${el.author}
            </a>
          </span>
        </div>
      </article>
      `;
    });
    document.getElementById("fetchDom").innerHTML += html;
  });

