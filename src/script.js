// loaderscreen

setTimeout(() => {
  $(".bigwrapper").show();
  $(".bigwrapper").fadeIn(2000);

  $(".loaderscreen").css({
    "z-index": "-10",
    opacity: "0",
  });
}, 2000);

// successbox

document.querySelector("#form").addEventListener("submit", () => {
  event.preventDefault();
  let element = document.querySelector("#successful");
  element.classList.remove("z-0");
  element.classList.add("z-20");
  element.style.opacity = "100";

  setTimeout(() => {
    element.classList.remove("z-20");
    element.classList.add("z-0");
    element.style.opacity = "0";
  }, 4000);
});


// $(window).on('load', function () {
//   $('.loaderscreen').css({
//     "z-index":"-10",
//     "opacity":"0"
//   });
// })

// Navbar

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let element = document.querySelector(".header");
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    element.classList.add("shadow-lg");
    element.classList.add("shadow-blue-500");
  } else {
    element.classList.remove("shadow-lg");
    element.classList.remove("shadow-blue-500");
  }
}

// key animation from here

const keyanimation = (arg1, arg2, arg3) => {
  $(document).ready(() => {
    $(arg1).mouseenter(() => {
      $(arg2).css({ width: "100%" });
      $(arg3).css({ width: "100%" });
    });
  });

  $(document).ready(() => {
    $(arg1).mouseleave(() => {
      $(arg2).css({
        width: "0px",
      });
      $(arg3).css({ width: "0" });
    });
  });
};

keyanimation(".home", ".underline1", ".aboveline1");
keyanimation(".about", ".underline2", ".aboveline2");
keyanimation(".resume", ".underline5", ".aboveline5");
keyanimation(".skills", ".underline3", ".aboveline3");
keyanimation(".project", ".underline6", ".aboveline6");
keyanimation(".contact", ".underline4", ".aboveline4");

//Btn from here

$(document).ready(() => {
  $(".menu").click(() => {
    $(() => {
      $(".menuslider").css({
        right: "0px",
      });
    });
  });
});
// slider

$(document).ready(() => {
  $(".cancel").click(() => {
    $(".menuslider").css({ right: "-1707px" });
  });
});

const btn = (btn) => {
  let element = document.querySelector(btn);
  element.addEventListener("mousedown", () => {
    element.style.scale = "0.8";
  });
  element.addEventListener("mouseup", () => {
    element.style.scale = "1";
  });
};
btn("#btn");
btn("#btn2");
btn("#btn3");

// shutter

const shutter = (div, shutterdiv, arrow) => {
  let element = document.querySelector(div);
  element.addEventListener("mouseenter", () => {
    document.querySelector(shutterdiv).style.bottom = "0px";
    document.querySelector(arrow).style.right = "24px";
    document.querySelector(arrow).style.top = "24px";
    document.querySelector(arrow).style.opacity = "1";
  });
  element.addEventListener("mouseleave", () => {
    document.querySelector(shutterdiv).style.bottom = "-100%";
    document.querySelector(arrow).style.right = "4px";
    document.querySelector(arrow).style.top = "4px";
    document.querySelector(arrow).style.opacity = "0";
  });
};
shutter("#shutterdiv1", "#shutter1", "#arrow1");
shutter("#shutterdiv2", "#shutter2", "#arrow2");
shutter("#shutterdiv3", "#shutter3", "#arrow3");
shutter("#shutterdiv4", "#shutter4", "#arrow4");
shutter("#shutterdiv5", "#shutter5", "#arrow5");
shutter("#shutterdiv6", "#shutter6", "#arrow6");
shutter("#shutterdiv7", "#shutter7", "#arrow7");


const keyscroll = (element, y) => {
  let el1 = document.querySelector(element);
  el1.addEventListener("click", () => {
    window.scrollTo(0, y);
  });
};
keyscroll("#homekey", "0");
keyscroll("#aboutkey", "710");
keyscroll("#resumekey", "1810");
keyscroll("#skillskey", "2870");
keyscroll("#contactkey", "4000");
keyscroll("#projectkey", "4000");
keyscroll("#contactkey", "5660");


keyscroll("#home", "0");
keyscroll("#about", "710");
keyscroll("#skills", "2870");
keyscroll("#contact", "5650");
keyscroll(".hireme", "5650");







// const toform = () => {
//   window.scrollTo(0,4000)
//   console.log(200)

// }

// document.querySelector("#btn").addEventListener("click",toform)





// loader page animation


