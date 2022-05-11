/*

Adds functionality to keep a consistent header across the current pages of the site, (apart from 'home.html', which will have 
the navigation displayed a little differently from the other pages)

Each HTML page on the site has a div with id="header" which will be the location where the function replaces the innerHTML with the
formatted contents of the header, giving the user a consistent navigation experience across each page


*/


function displayHeader(){

    var headerLocation = document.getElementById('header');

    headerLocation.innerHTML = "<header><nav><li><a href='home.html'> Home </a></li>"
    + "<header><nav><li><a href='about-me.html'> About Me </a></li>" 
    + "<header><nav><li><a href='portfolio.html'> Portfolio </a></li>" 
    + "<header><nav><li><a href='contact.html'> Contact </a></li>"
    + "<header><nav><li></li>"
    + "<header><nav><li></li>"
    + "<header><nav><li></li>"
    + "<header><nav><li></li>"
    + '<header><nav><li><input type="radio" id="music-btn" name="site-filter" class="radio" value="music" onclick="headerRadio()">'
    + '<label for="music-btn">Music</label></a></li>'
    + '<header><nav><li><input type="radio" id="both-btn" name="site-filter" class="radio" value="both" onclick="headerRadio()" checked>'
    + '<label for="both-btn">Both</label></a></li>'
    + '<header><nav><li><input type="radio" id="technology-btn" name="site-filter" class="radio" value="development" onclick="headerRadio()">'
    + '<label for="technology-btn">Web/Software Development</label></a></li>';
    
}

/* function that filters the site based on user input from radio button */
function headerRadio(){

    var filterDev = document.getElementById('filter-development');
    var filterMusic = document.getElementById('filter-music');
    var filterBoth = document.getElementById('filter-both');

    if(document.getElementById('music-btn').checked){
        filterDev.style.display = 'none';

        filterMusic.style.display ='none';
        filterMusic.style.display ='inline';

        filterBoth.style.display ='none';
    }
    else if(document.getElementById('technology-btn').checked){
        filterDev.style.display = 'none';
        filterDev.style.display = 'inline';
        filterMusic.style.display ='none';
        filterBoth.style.display ='none';
        

        }
    else if(document.getElementById('both-btn').checked){

        filterDev.style.display = 'none';
        filterDev.style.display = 'inline';

        filterMusic.style.display ='none';
        filterMusic.style.display ='inline';

        filterBoth.style.display ='none';
        filterBoth.style.display ='inline';
        /*const dFilter = document.getElementsByClassName('filter-development');
        for (const f of dFilter) {
            dFilter.style.display = 'none';
            dFilter.style.display = 'inline';
        }
        const mFilter = document.getElementsByClassName('filter-music');
        for (const f of mFilter) {
            mFilter.style.display = 'none';
            dFilter.style.display = 'inline';
        }*/
    }
}

/* function that collects the user selection from the home page and does one of two things:
    1: if the user is just browing: scrolls the page down to the blog
    TODO: add filtering system for blog
    2: if the user selects either music or development, they are directed to the portfolio page and the checkButton() function is executed,
    using local storage to check the correct button based on selection. */
function homeFilter(selection){

    var selectVar = selection /* var to store selection from home screen */

    if (selectVar == 'browsing'){
        window.location.href = '#header';
        
    }
    else if (selectVar == 'music' || 'development') {


        switch (selectVar){
            case 'music': 
                localStorage.setItem('selection-storage','music-btn');
                break;
            case 'development':
                localStorage.setItem('selection-storage', 'technology-btn')
                break;
        }

        window.location.href = 'portfolio.html';

    }

}

function checkButton(filter){
    document.getElementById(localStorage.getItem('selection-storage')).checked = true;
    headerRadio();
}

document.onload = displayHeader();