const testpng= document.getElementById("testpng");
const roothtml= document.documentElement

function changeTheme(){
    const currentTheme = roothtml.getAttribute("data-theme");

    if(currentTheme === "dark")roothtml.setAttribute("data-theme", "light")
        else roothtml.setAttribute("data-theme", "dark")
        

    testpng.classList.toggle("bi-moon-fill")
    testpng.classList.toggle("bi-brightness-high-fill")

}

  testpng.addEventListener("click", changeTheme);


