const buttons = document.querySelectorAll(".btn")
const hover = document.querySelectorAll(".transition") 

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
        button.classList.add("hover")
        button.classList.remove("non")
  })
})

buttons.forEach((button) => {
  button.addEventListener("mouseleave", (event) => {
        button.classList.add("non")
        button.classList.remove("hover")
  })
})


hover.forEach((image) => {
    image.addEventListener("mouseover", (event) => {
        image.classList.add("larger")
        image.classList.remove("smaller")
    })
})

hover.forEach((image) => {
    image.addEventListener("mouseleave", (event) => {
        image.classList.add("smaller")
        image.classList.remove("larger")
    })
})