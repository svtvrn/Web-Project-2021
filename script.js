var date = new Date();
var date_dom = (date.getUTCMonth()+1) +"-"+ date.getUTCDate() +"-"+ date.getUTCFullYear();
var weekday = date.toLocaleString('default', { weekday: 'short' });
document.querySelector("#date").innerHTML =weekday+".\t"+ date_dom;
weekdayHeaderTheme(date.getDay());



var nightModeButton = document.querySelector("#night-mode");
nightModeButton.addEventListener('click',nightMode);

var style = getComputedStyle(document.body);
var lightPalette = [ document.querySelector(".header").style.backgroundColor, document.querySelector(".footer").style.background, 
                    document.querySelector("body").style.backgroundColor, style.getPropertyValue('--clr--text-prim'),
                    style.getPropertyValue('--clr--text-side'), style.getPropertyValue('--clr--accent'),
                    style.getPropertyValue('--clr--accent-sec')];




function nightMode(e){
    if(nightModeButton.value=="off"){
        nightModeButton.setAttribute('value','on');
        document.querySelector(".header").style.backgroundColor = "#000411";
        document.querySelector(".footer").style.background = "#000411";
        document.querySelector("body").style.backgroundColor = "#000411";
        document.documentElement.style.setProperty('--clr--text-prim', '#fff');
        document.documentElement.style.setProperty('--clr--text-side', '#fff');
        document.documentElement.style.setProperty('--clr--accent', '#fff');
        document.documentElement.style.setProperty('--clr--accent-sec', '#B51C81');
    }else{
        nightModeButton.setAttribute('value','off');
        document.querySelector(".header").style.backgroundColor = lightPalette[0];
        document.querySelector(".footer").style.background = lightPalette[1];
        document.querySelector("body").style.backgroundColor = lightPalette[2];
        document.documentElement.style.setProperty('--clr--text-prim', lightPalette[3]);
        document.documentElement.style.setProperty('--clr--text-side', lightPalette[4]);
        document.documentElement.style.setProperty('--clr--accent', lightPalette[5]);
        document.documentElement.style.setProperty('--clr--accent-sec', lightPalette[6]);
    }
}

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