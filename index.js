let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "The Falcon and the Winter Soldier [a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "images/slider 2.png"
    },
    {
      name: "loki",
      des:
        "Loki appears in Marvel Comics and in the Marvel Cinematic Universe,played by Tom Hiddleston,as a villain (or antihero) who consistently comes into conflict with the superhero Thor, his adopted brother and archenemy. Loki appears in Rick Riordan 's Magnus Chase and the Gods of Asgard series.",
  
      image: "images/slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "WandaVision is an American web television series, based on the Marvel Comics superheroes of the same names. The series is a sequel to Avengers: Endgame and a prequel to Doctor Strange in the Multiverse of Madness. It is the first television series of Phase Four of the Marvel Cinematic Universe.",
      image: "images/slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya and the Last Dragon explores the strength we have in unity. Raya’s father, Chief Benja believed in harmony from the start and thus it was his ultimate goal to assemble the broken world. However, Raya’s character pursuit is not to bring harmony but bring back her father.",
      image: "images/slider 4.png"
    },
    {
      name: "luca",
      des:
        "Luca, an Italian-set animated fairy tale concerning two young sea monsters exploring an unknown human world, offers the studio's hallmark visual splendor, yet fails to venture outside of safe waters.",
      image: "images/slider 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  