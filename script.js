$(document).ready(function(){
    clearBoxes();
    showAbout();
    $("#aboutbtn").click(function(){
        clearBoxes();
        var aboutbox = document.getElementById("aboutbox");
        if (aboutbox.style.display === "none"){
            aboutbox.style.display = "block";
        } else {
            aboutbox.style.display = "none";
        }
    });
    $("#edubtn").click(function(){
        clearBoxes();
        var edubox = document.getElementById("edubox");
        if (edubox.style.display === "none"){
            edubox.style.display = "block";
        } else {
            edubox.style.display = "none";
        }
    });

    $("#projectbtn").click(function(){
        clearBoxes();
        var projectbox = document.getElementById("projectbox");
        if (projectbox.style.display === "none"){
            projectbox.style.display = "block";
        } else {
            projectbox.style.display = "none";
        }
    });

    $("#readingbtn").click(function(){
        clearBoxes();
        var readingbox = document.getElementById("readingbox");
        if (readingbox.style.display === "none"){
            readingbox.style.display = "block";
        } else {
            readingbox.style.display = "none";
        }
    });
})

function showAbout(){
    var aboutbox = document.getElementById("aboutbox");
    aboutbox.style.display = "block";
}

function clearBoxes(){
    const boxes = getAllBoxes();
    $.each(boxes, function(i, box){
        box.style.display = "none";
    })
}

function getAllBoxes(){
    var aboutbox = document.getElementById("aboutbox");
    var edubox = document.getElementById("edubox");
    var projectbox = document.getElementById("projectbox");
    var readingbox = document.getElementById("readingbox");

    return [aboutbox, edubox, projectbox, readingbox]
}
