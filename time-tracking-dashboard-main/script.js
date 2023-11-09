const tabs = document.querySelectorAll(".links li");
const workDay = document.getElementById("workDay");
const workWeek = document.getElementById("workWeek");
const playDay = document.getElementById("playDay");
const playWeek = document.getElementById("playWeek");
const studyDay = document.getElementById("studyDay");
const studyWeek = document.getElementById("studyWeek");
const exerciseDay = document.getElementById("exerciseDay");
const exerciseWeek = document.getElementById("exerciseWeek");
const socialDay = document.getElementById("socialDay");
const socialWeek = document.getElementById("socialWeek");
const selfDay = document.getElementById("selfDay");
const selfWeek = document.getElementById("selfWeek");

async function fetchData() {
  const dataFetch = await fetch(
    "https://github.com/DejanSheki/FrontendMentor-challenges/blob/main/time-tracking-dashboard-main//data.json",
    {
      mode: "cors",
      credentials: "include",
    }
  );
  const data = await dataFetch.json();

  timeframes(data);
}
fetchData();

function timeframes(data) {
  const work = data[0].timeframes;
  const play = data[1].timeframes;
  const study = data[2].timeframes;
  const exercise = data[3].timeframes;
  const social = data[4].timeframes;
  const self = data[5].timeframes;

  tabs.forEach((tab) => {
    tab.addEventListener("click", ({ target }) => {
      for (const item of tabs) item.classList.toggle("active", target === item);
      let period = target.textContent;

      if (period === "Daily") {
        workDay.innerText = work.daily.current;
        workWeek.innerHTML = work.daily.previous;
        playDay.innerText = play.daily.current;
        playWeek.innerHTML = play.daily.previous;
        studyDay.innerText = study.daily.current;
        studyWeek.innerHTML = study.daily.previous;
        exerciseDay.innerText = exercise.daily.current;
        exerciseWeek.innerHTML = exercise.daily.previous;
        socialDay.innerText = social.daily.current;
        socialWeek.innerHTML = social.daily.previous;
        selfDay.innerText = self.daily.current;
        selfWeek.innerHTML = self.daily.previous;
      }
      if (period === "Weekly") {
        workDay.innerText = work.weekly.current;
        workWeek.innerHTML = work.weekly.previous;
        playDay.innerText = play.weekly.current;
        playWeek.innerHTML = play.weekly.previous;
        studyDay.innerText = study.weekly.current;
        studyWeek.innerHTML = study.weekly.previous;
        exerciseDay.innerText = exercise.weekly.current;
        exerciseWeek.innerHTML = exercise.weekly.previous;
        socialDay.innerText = social.weekly.current;
        socialWeek.innerHTML = social.weekly.previous;
        selfDay.innerText = self.weekly.current;
        selfWeek.innerHTML = self.weekly.previous;
      }
      if (period === "Monthly") {
        workDay.innerText = work.monthly.current;
        workWeek.innerHTML = work.monthly.previous;
        playDay.innerText = play.monthly.current;
        playWeek.innerHTML = play.monthly.previous;
        studyDay.innerText = study.monthly.current;
        studyWeek.innerHTML = study.monthly.previous;
        exerciseDay.innerText = exercise.monthly.current;
        exerciseWeek.innerHTML = exercise.monthly.previous;
        socialDay.innerText = social.monthly.current;
        socialWeek.innerHTML = social.monthly.previous;
        selfDay.innerText = self.monthly.current;
        selfWeek.innerHTML = self.monthly.previous;
      }

      fetchData();
    });
  });
}
