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
    + '<input type="radio" id="music-btn" name="site-filter" value="music" onclick="headerRadio()">'
    + '<label for="music-btn">Music</label>'
    + '<input type="radio" id="both-btn" name="site-filter" value="both" onclick="headerRadio()" checked>'
    + '<label for="both-btn">Both</label>'
    + '<input type="radio" id="technology-btn" name="site-filter" value="development" onclick="headerRadio()">'
    + '<label for="technology-btn">Web/Software Development</label>';
    
}

function headerRadio(){

    var filterDev = document.getElementById('filter-development');
    var filterMusic = document.getElementById('filter-music');
    var filterBoth = document.getElementById('filter-both');

    if(document.getElementById('music-btn').checked){
        alert('working');
        filterDev.style.display = 'none';
        filterBoth.style.display ='none';
        filterMusic.style.display ='inline';
    }
    else if(document.getElementById('technology-btn').checked){
        alert('tech');
        filterMusic.style.display ='none';
        filterBoth.style.display ='none';
        filterDev.style.display = 'inline';

        }
    else if(document.getElementById('both-btn').checked){
        alert('both');

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

document.onload = displayHeader();