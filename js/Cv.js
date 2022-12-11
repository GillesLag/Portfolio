let codraft = document.getElementById("nav-codraft");
let codraftTab = document.getElementById("nav-codraft-tab");
let stadsbader = document.getElementById("nav-stadsbader");
let stadsbaderTab = document.getElementById("nav-stadsbader-tab");
let exilab = document.getElementById("nav-exilab");
let exilabTab = document.getElementById("nav-exilab-tab");


function ChangeCompany(company){
  switch (company.innerHTML){
    case codraftTab.innerHTML:
      codraft.classList.add("active", "show");
      codraftTab.classList.add("active")
      stadsbader.classList.remove("active", "show");
      stadsbaderTab.classList.remove("active");
      exilab.classList.remove("active", "show");
      exilabTab.classList.remove("active");
      break;

    case (stadsbaderTab.innerHTML):
      codraft.classList.remove("active", "show");
      codraftTab.classList.remove("active")
      stadsbader.classList.add("active", "show");
      stadsbaderTab.classList.add("active");
      exilab.classList.remove("active", "show");
      exilabTab.classList.remove("active");
      break;

    case (exilabTab.innerHTML):
      codraft.classList.remove("active", "show");
      codraftTab.classList.remove("active")
      stadsbader.classList.remove("active", "show");
      stadsbaderTab.classList.remove("active");
      exilab.classList.add("active", "show");
      exilabTab.classList.add("active");
      break;
  }
}

$(".multiple-items").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true
});

