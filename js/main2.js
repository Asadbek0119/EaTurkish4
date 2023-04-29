
let curentdate = new Date().getDate()
let date = new Date().getMonth();
    curYear = new Date().getFullYear();
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // console.log(this.months[1]);
    curMonth = months[date];
    // console.log(curMonth);
    // console.log(this.date);
let news_date = document.querySelectorAll('.news_date')
    news_date.forEach(el => {
        el.textContent = `${curentdate} ${curMonth} ${curYear}`
    });
