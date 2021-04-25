let bgColor;

$(document).ready(function ($) {

    // $("#BTN").click(function () {
    //     $("p").toggleClass("test");
    //     $("p").filter(".test").css("background-color", "green");
    // });

    // $("p").css({
    //     "background-color": "yellow",
    //     "font-size": "70px"
    // });

    // $("#p1").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
    //     if (statusTxt == "success")
    //         alert("External Content loaded Successfuly" + responseTxt);
    //     else if(statusTxt == "error")
    //         alert("Error: " + xhr.status + ":" + xhr.statusText);
    // });
    let jq = $.noConflict();
    jq("#BTN").click(function () {
        $("p").toggleClass("test");
    });


    // let txt = $("<a></a>") .text("Dariush").attr("href", "https://www.google.com");
    // let txt1 = $("<input></input>") .text("Dariush").attr("href", "https://www.google.com");
    // console.log(txt);
    // $("p").prepend(txt, txt1);

    // $("p").append("<p id='link'>Dariush</p>");
    // $("#link").attr("href", "https://www.google.com");

    // $("#BTN").click(function () {
    //     $("p").attr({
    //         "href": "https://www.google.com",
    //         "title": "Dariush Test"
    //     });
    // });

    // $("#BTN").click(function(){
    //     $("#test").html(function(i, orgText){
    //         console.log(i, orgText);
    //         return "<a href='#'>T2</a>";
    //     });
    // });

    // $("button").click(function () {
    //     $("p").hide();
    // });

    // $("p").mouseenter(function () {
    //     bgColor = $(this).css("background-color");
    //     $(this).css("background-color", "black");
    // });

    // $("p").mouseleave(function () {
    //     $(this).css("background-color", bgColor);
    // });

    // $("p").hover(function () {
    //     bgColor = $(this).css("background-color");
    //     $(this).css("background-color", "black");
    // },
    //     function () {
    //         $(this).css("background-color", bgColor);
    //     }
    // );

    // $("#p").mouseover(function () {
    //     // console.log($("#p").text());
    //     // console.log($("#p").val());
    //     // console.log($("#p").html());
    //     console.log($("#p").attr("href"));
    // });

    // $("#in").mouseover(function (){
    //     console.log($("#in").val());
    // });

    // $("#BTN").click(function () {
    //     let div = $("#divi");

    //     div.animate({ left: "250px" }, 5000);
    //     div.animate({ opacity: "0.7" });
    //     div.animate({ height: "+=150px" });
    //     div.animate({ width: "+=150px" });
    //     div.animate({ fontSize: "20px" });

    //     console.log("HI");
    // });

    // $("#stop").click(function () {
    //     $("#divi").stop();
    // });

    // $("#p").css("color", "red").slideUp(2000).slideDown(2000);


    // $("#BTN").click(function () {
    //     $("#divi").animate({
    //         left: "250px",
    //         opacity: "0.7",
    //         height: "+=150px",
    //         width: "+=150px"
    //     }, 1000);
    // });

    // $("#BTN").click(function () {
    //     $("#divi").animate({ left: "250px" });
    // });

    // $("#BTN").click(function () {
    //     $("#divi").slideToggle();
    // });

    // $("#BTN").click(function () {
    //     $(this).text() == "Hide" ? $(this).text("Show") : $(this).text("Hide");
    //     $("#hide").fadeTo("fast", 0.8);
    // });

    // $("#BTN").click(function () {
    //     if ($(this).text() == "Hide") {
    //         $(this).text("Show");
    //         $("#hide").hide(5000, () => {
    //             console.log("Bye");
    //         });
    //     }
    //     else {
    //         $(this).text("Hide");
    //         $("#hide").show(5000, () => {
    //             console.log("Hello");
    //         });
    //     }
    // });

    // $("#BTN").click(function () {
    //     // console.log(this);
    //     $(this).text() == "Hide" ? $(this).text("Show") : $(this).text("Hide");
    //     $("#hide").toggle();
    // });

    // let p = $("p");
    // for (let i = 0; i < p.length; i++) {
    //     p[i].addEventListener("mouseover", function () {
    //         bgColor = p[i].style.backgroundColor;
    //         p[i].style.backgroundColor = "black";
    //     });

    //     p[i].addEventListener("mouseleave", function () {
    //         p[i].style.backgroundColor = bgColor;
    //     });
    // }

    // let p = document.getElementsByTagName("p");
    // for (let i = 0; i < p.length; i++) {
    //     p[i].addEventListener("mouseover", function () {
    //         bgColor = p[i].style.backgroundColor;
    //         p[i].style.backgroundColor = "black";
    //     });

    //     p[i].addEventListener("mouseleave", function () {
    //         p[i].style.backgroundColor = bgColor;
    //     });
    // }

});