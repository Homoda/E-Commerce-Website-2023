var MainImg = document.getElementById("MainImg");
var price = document.getElementById("price");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
    price.innerHTML = "&#163; 2,574";
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
    price.innerHTML = "&#163; 2,000";
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
    price.innerHTML = "&#163; 1,500";
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
    price.innerHTML = "&#163; 3,675";
}
let count = 0;
document.getElementsByClassName("normal")[0].onclick = function () {
    count += 1;
    document.getElementById('count').innerHTML = count;
}