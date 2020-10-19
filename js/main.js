window.onload = () => {
  const shareButton = document.getElementsByClassName("share-button")[0];
  const shareIcons = document.getElementsByClassName("share-icons-container")[0];
  
  shareButton.addEventListener("click", () => {
    // if (shareButton.style.backgroundColor === "hsl(214, 17%, 51%)") {
    //   shareButton.style.backgroundColor = "hsl(210, 46%, 95%)"
    // } else {
    //   shareButton.style.backgroundColor = "hsl(214, 17%, 51%)"
    // }
    
    if (shareIcons.classList.contains("hide")) {
      shareIcons.classList.remove("hide");
    } else {
      shareIcons.classList.add("hide");
    }
  });
  
  shareButton.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "hsl(214, 17%, 51%)";
  });
  
  shareButton.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "hsl(210, 46%, 95%)";
  });
}