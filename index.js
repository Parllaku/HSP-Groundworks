const myFunction = function () {
  var materials = Number(document.getElementById("materials").value);

  const length = Number(document.getElementById("length").value);
  const width = Number(document.getElementById("width").value);
  const depth = Number(document.getElementById("depth").value);

  if (!length || !materials || !width || !depth) {
    alert("please fill all the boxes!");
  } else {
    const total = (materials * length * width * depth) / 1000;
    const total1 = Math.round((total + Number.EPSILON) * 100) / 100;

    document.getElementById(
      "quantityR"
    ).innerHTML = `You need ${total1} tones of`;
  }
};

function openForm() {
  if (document.getElementById("materialsCalc").style.display === "block") {
    document.getElementById("materialsCalc").style.display = "none";
    document.querySelector(".container").style.display = "block";
  } else {
    document.getElementById("materialsCalc").style.display = "block";
    document.querySelector(".container").style.display = "none";
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function plusSlides(n) {
  showSlides((slideIndex += n));
}
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}
