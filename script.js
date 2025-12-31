const numbers = document.querySelectorAll(".number");
function animateCounters() {
  numbers.forEach((num) => {
    const target = +num.dataset.target;
    let current = 0;

    const increment = target / 100;

    const update = () => {
      current += increment;

      if (current < target) {
        num.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        num.textContent = target;
      }
    };

    update();
  });
}
let hasAnimated = false;

const aboutSection = document.querySelector(".about");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
      animateCounters();
      hasAnimated = true;
    }
  },
  { threshold: 0.5 }
);

observer.observe(aboutSection);

const ctx = document.getElementById("testAverageChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "2010","2011","2012","2013","2014",
      "2015","2016","2017","2018","2019",
      "2020","2021","2022","2023","2024"
    ],
    datasets: [{
      label: "Test Batting Average",
      data: [
        35, 32, 30, 34, 38,
        42, 45, 50, 54, 58,
        60, 55, 52, 48, 50
      ],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59,130,246,0.2)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb"
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#94a3b8" },
        grid: { display: false }
      },
      y: {
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(255,255,255,0.05)" }
      }
    }
  }
});


const odiCtx = document.getElementById("odiAverageChart");

new Chart(odiCtx, {
  type: "line",
  data: {
    labels: [
      "2010","2011","2012","2013","2014",
      "2015","2016","2017","2018","2019",
      "2020","2021","2022","2023","2024"
    ],
    datasets: [{
      label: "ODI Batting Average",
      data: [
        30, 32, 35, 37, 40,
        43, 45, 47, 49, 50,
        48, 46, 44, 42, 45
      ],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34,197,94,0.2)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb"
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#94a3b8" },
        grid: { display: false }
      },
      y: {
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(255,255,255,0.05)" }
      }
    }
  }
});

const newsContainer = document.getElementById("news-container");

const rssUrl =
  "https://news.google.com/rss/search?q=Kane+Williamson";

const proxyUrl =
  "https://api.allorigins.win/get?url=" + encodeURIComponent(rssUrl);

fetch(proxyUrl)
  .then((res) => res.json())
  .then((data) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = xml.querySelectorAll("item");

    newsContainer.innerHTML = "";

    Array.from(items)
      .slice(0, 6)
      .forEach((item) => {
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;

        const article = document.createElement("a");
        article.className = "news-card";
        article.href = link;
        article.target = "_blank";

        article.innerHTML = `<h4>${title}</h4>`;

        newsContainer.appendChild(article);
      });
  })
  .catch(() => {
    newsContainer.innerHTML =
      "<p class='error-text'>Failed to load news.</p>";
  });


  let button = document.querySelector(".submit-btn")

  button.addEventListener("click",()=>{
    alert("Thanks for sending out a message!")
  })


  