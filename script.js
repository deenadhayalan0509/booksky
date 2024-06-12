var popupbg = document.querySelector(".popup-background")
var popupbox = document.querySelector(".popup-box")

function overlay()
{
    popupbg.style.display="block"
    popupbox.style.display="block"
}

var cancelpopup=document.getElementById("cancel-book")

function cancel(event)
{
    event.preventDefault()
    popupbg.style.display="none"
    popupbox.style.display="none"
}

var container = document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event)
{
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>
        ${bookdescription.value}
    </p>
    <button onclick="deletebook(event)">DELETE</button>`
    container.append(div)
    event.preventDefault()
    popupbg.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}