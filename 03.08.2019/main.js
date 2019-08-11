var header = document.getElementsByTagName("header")[0];
var scrollArr = [];
window.addEventListener("scroll", function (e) {
    if (this.scrollY > 100) {
        header.style.height = "80px"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.219)"
        $("#navul li").removeClass('active')
        let sec = "";
        $("section").each(function (index, el) {
            if ((($(el).offset().top - 80)) < window.scrollY) {
                sec = el.id;
            }
        })
        $("li[data-section='" + sec + "']").addClass("active")
    } else {
        header.style.height = "100px"
        header.style.boxShadow = "0 5px 50px rgba(0, 0, 0, 0.219)"
    }
})

// Click navbar
$("#navul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
})
$("#resUl li").on("click", function () {
    var checkAttrValue = Number(this.getAttribute("data-id"))
    var clickedElement = $(this) 
setTimeout(function(){
    
        if(window.pageYOffset == checkAttrValue){
            clickedElement.addClass("active").siblings().removeClass("active");
        }
    
},1500)
    

    
})
$("section").each(function (index, el) {
    scrollArr.push($(el).offset().top)
})

var myLists = document.querySelectorAll("#navul li");
var myLists2 = document.querySelectorAll("#resUl li");

for (let i = 0; i < myLists.length; i++) {
    myLists[i].setAttribute("data-id", scrollArr[i] - 50)
    myLists2[i].setAttribute("data-id", scrollArr[i] - 50)
}

$("#navul,#resUl").on("click", "li", function (e) {
    e.preventDefault()
    var leng = $(this).attr("data-id");
    window.scrollTo({
        top: leng,
        left: 0,
        behavior: 'smooth'
    });
});


// Menubar
var menubar = document.getElementById("menubar");
var closeMenu = document.getElementById("closeMenu");
var menus = document.getElementsByClassName("responsiveMenu")[0];
var resList = document.querySelectorAll("#resUl li");

for (let i = 0; i < resList.length; i++) {
    resList[i].addEventListener("click", function () {
        menus.style.display = "none";
        closeMenu.style.display = "none";
        menubar.style.display = "block";
    })
}

menubar.addEventListener("click", function () {
    this.style.display = "none";
    closeMenu.style.display = "block";
    menus.style.display = "block";


    document.body.addEventListener("click", function (e) {
        if (e.target != menus && e.target != menubar) {
            menus.style.display = "none";
            closeMenu.style.display = "none";
            menubar.style.display = "block";
        }
    })


})
closeMenu.addEventListener("click", function () {
    this.style.display = "none";
    menubar.style.display = "block"
    menus.style.display = "none";

})



// End Menubar

// About skills
var progressBars = document.querySelectorAll(".progress-bar");
var progressPercent = document.querySelectorAll(".progressPercent");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 780) {
        for (let i = 0; i < progressBars.length; i++) {
            setTimeout(function () {
                progressBars[i].style.width = progressPercent[i].getAttribute("data-p")
                progressPercent[i].innerText = progressPercent[i].getAttribute("data-p")
            }, 2000)
        }
    }
})




// For img gallery
var imgGallery = document.getElementById("bodyImgLayout");
var galleryImg = $(".imgContain img")
var imgCount = document.getElementById("imgcount");
var imgSrcArr = [];
var currentImgCount = document.getElementById("currentImgCount");
var currentCount = 1

$(".recentBtns a").click(function(e){
    e.preventDefault();  
    imgGallery.style.display = "flex"
    galleryImg.attr('src',$(this).parent().parent().parent().siblings()[0].src)
})

$(".recentImgBox img").each(function(index,img){
    imgSrcArr.push(img.src)
})


imgCount.innerText = imgSrcArr.length
currentImgCount.innerText = currentCount
    $("#recentLeft").click(function(){
        if(currentCount > 0){
            currentCount--
            galleryImg.attr("src",imgSrcArr[currentCount])
            currentImgCount.innerText = currentCount
        }else{
            currentCount = imgSrcArr.length;
        }
    })
    
    $("#recentRight").click(function(){
        if(currentCount < 6){
            currentCount++
            galleryImg.attr("src",imgSrcArr[currentCount])
            currentImgCount.innerText = currentCount
        }else{
            currentCount = 0;
        }
    })

    $("#recentRight").click(function(){
        if(currentCount < imgSrcArr.length){
            currentCount++
            galleryImg.attr("src",imgSrcArr[currentCount])
            currentImgCount.innerText = currentCount
        }else{
            currentCount = 1;
        }
    })
