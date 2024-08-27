
console.log("Script carregado com sucesso!");

var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("expandedImg");
var closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.gallery img').forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

closeBtn.onclick = function() { 
  modal.style.display = "none";
}

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
