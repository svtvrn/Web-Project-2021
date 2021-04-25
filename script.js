//Date object
var date = new Date();
//Adding date into the HTML files.
var date_dom = (date.getUTCMonth()+1) +"-"+ date.getUTCDate() +"\n"+ date.getUTCFullYear();
var weekday = date.toLocaleString('default', { weekday: 'short' });
document.querySelector("#date").innerHTML =weekday+".\t"+ date_dom;
weekdayHeaderTheme(date.getDay());

//Night mode button and its event listener
var nightModeButton = document.querySelector("#night-mode");
nightModeButton.addEventListener('click',nightMode);
//Light theme palette saved to change to original color scheme
var style = getComputedStyle(document.body);
var lightPalette = [ document.querySelector(".header").style.backgroundColor, document.querySelector(".footer").style.background, 
                    document.querySelector("body").style.backgroundColor];

//Adding the rating buttons
var likeButton = document.querySelector("#like");
var dislikeButton = document.querySelector("#dislike");
//Setting the event listeners
if(likeButton!=null && dislikeButton!=null){
    likeButton.addEventListener('click',rateArticle);
    dislikeButton.addEventListener('click',rateArticle);
}

//Night mode color switch function
function nightMode(e){
    if(nightModeButton.value=="off"){
        nightModeButton.setAttribute('value','on');
        document.querySelector(".header").style.backgroundColor = "#000411";
        document.querySelector(".footer").style.background = "#000411";
        document.querySelector("body").style.backgroundColor = "#000411";
        document.querySelector("#light-theme").id = 'dark-theme'
    }else{
        nightModeButton.setAttribute('value','off');
        document.querySelector(".header").style.backgroundColor = lightPalette[0];
        document.querySelector(".footer").style.background = lightPalette[1];
        document.querySelector("body").style.backgroundColor = lightPalette[2];
        document.querySelector("#dark-theme").id = 'light-theme'
    }
}

//Header of the site changing colours based on the weekday number
function weekdayHeaderTheme(day){
    switch(day){
        case 0:
            document.querySelector(".header").style.backgroundColor = "#BA3DE1";
            break;
        case 1:
            document.querySelector(".header").style.backgroundColor = "#009FB8";
            break;
        case 2:
            document.querySelector(".header").style.backgroundColor = "#000411";
            break;
        case 3:
            document.querySelector("header").style.backgroundColor = "#ECC046";
            break;
        case 4:
            document.querySelector(".header").style.backgroundColor = "#DA5700";
            break;
        case 5:
            document.querySelector(".header").style.backgroundColor = "#FB0E3D";
            break;
        case 6:
            document.querySelector(".header").style.backgroundColor = "#09D7AB";
            break;
        default:
            document.querySelector(".header").style.backgroundColor = "#662952";
            break;
    }
}

function rateArticle(e){
    if(e.target!==e.currentTarget){
        if(e.currentTarget.id=="like"){
            document.querySelector("#like-path").style.fill = "#1DD73C";
            document.querySelector("#dislike-path").style.fill = "#66295270";
        }else{
            document.querySelector("#like-path").style.fill = "#66295270";
            document.querySelector("#dislike-path").style.fill = "#C53041";
        }
    }
}