var images=["image0.jpg",
             "image1.jpg",
             "image2.jpg",
             "image3.jpg",
             "image4.jpg",
             "image5.jpg"
           ]

var i=0;
function slideshow(){
    document.getElementById("slider").src=images[i];
    if(i<4){
        i++;
    }
    else{
        i=0;
    }
}

setInterval(slideshow,2000);


