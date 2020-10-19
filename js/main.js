window.onload = () => {
  const shareButton = document.getElementsByClassName("share-button")[0];
  const shareIcons = document.getElementsByClassName("share-icons-container")[0];
  const shareIcon = document.getElementsByClassName("share-icon")[0];
  
  shareButton.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIcon.style.fill = "hsl(210, 46%, 95%)";
  });
  
  shareButton.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareIcon.style.fill = "hsl(214, 17%, 51%)";
  });
  
  shareButton.addEventListener("click", () => {    
    if (shareIcons.classList.contains("hide")) {
      shareIcons.classList.remove("hide");
    } else {
      shareIcons.classList.add("hide");
    }
  });
}