

let awaited = new Swiper(`.popular__actors-slider`, {
    breakpoints: {
        1920: {
            slidesPerView: 1.74,
        },
        1440: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 1,
        },
        720: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1,
        },
    }
});





function randomImg () {
    let parent = document.querySelector('.swiper-wrapper')
    foodImg.forEach((el) => {
        // console.log(el);
        let slade = document.createElement("div");
          slade.classList.add("swiper-slide");
          slade.innerHTML = `
                    <div class="movie__item">
                     <img src="${el.foodimg}" alt="" loading="lazy">
                    </div>
                    `;
            let contentLink = document.createElement("a");
            contentLink.classList.add('content_link')
            contentLink.setAttribute('href','#')
            slade.addEventListener('mousemove', function () {
                contentLink.innerHTML = `<i class="fab fa-instagram instagiram"></i>`
            })
            slade.addEventListener('mouseleave', function () {
                contentLink.innerHTML = ''
            })
            let content = document.createElement("div")
            content.classList.add('galarey_content')
            // console.log(contentLink);
            content.append(contentLink)
            slade.append(content)
            // console.log(contentLink);
          parent.append(slade);
    });
}randomImg()

let footerInput = document.querySelector('.footer_input')
footerInput.style.color = 'black'

let curentMonth = new Date().getMonth()+1
let curentdate = new Date().getDate()



    function clock() {
        let curentHors = new Date().getHours()
        let curMin = new Date().getMinutes()
        let sec = new Date().getSeconds()

        let customers_time = document.querySelectorAll('.customers_time')
        customers_time.forEach(el => {
            if (curentHors < 10) {
                el.innerHTML = `<i class="fal fa-clock"></i> 0${curentHors}:${curMin}`
                if (curMin < 10) {
                    el.innerHTML = `<i class="fal fa-clock"></i> ${curentHors}:0${curMin}`
                }
            }else if (curMin < 10) {
                el.innerHTML = `<i class="fal fa-clock"></i> ${curentHors}:0${curMin}`
            }else{
                el.innerHTML = `<i class="fal fa-clock"></i> ${curentHors}:${curMin}`
            }
        });


        setTimeout(() => {
            clock()
        }, 1000);

    
    
    }
    clock()




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

    let footer_text1 = document.querySelector('.footer_text1 span')
    footer_text1.textContent = curYear + ' '

    let news_date = document.querySelectorAll('.news_date')
    news_date.forEach(el => {
        el.textContent = `${curentdate} ${curMonth} ${curYear}`
    });

    let customers_date = document.querySelectorAll('.customers_date')
    customers_date.forEach(el => {
        el.innerHTML = `<i class="fal fa-calendar"></i> ${curentdate}/${curentMonth}/${curYear}`
    });
    

    

let a = document.querySelector(".a")
let b = document.querySelector(".b")
b.addEventListener("click",function () {
    a.style.display = "none"
    console.log(a);
})