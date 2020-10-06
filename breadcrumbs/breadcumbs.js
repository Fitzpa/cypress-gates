//Breadcrumbs based on URL location
var breadcrumbsArr = location.href.replace(/(\?.*)$/, '').split('/').slice(3);
// var here = "https://gatesfoundation.org/Ideas/Covid-19/ReFRAMing-Research"
// var breadcrumbsArr = here.replace(/(\?.*)$/, '').split('/').slice(3);

var parts = [];
var links = ""
var breadcrumbsList = document.querySelector('.breadcrumbs');

for (var i = 0; i < breadcrumbsArr.length; i++) {
    var pageName = breadcrumbsArr[i];
    var link = '/' + breadcrumbsArr.slice(0, i + 1).join('/');
    
    if(pageName.includes("-") && !(/[0-9]+/).test(pageName)) {
        var tempArr = pageName.split('-');
        pageName = "";
        for(var j = 0; j < tempArr.length; j++) {
            tempArr[j] = tempArr[j].charAt(0).toUpperCase() + tempArr[j].slice(1);
            pageName += `${tempArr[j]}`;
        }
    } else {
        pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }

    if(i === breadcrumbsArr.length - 1) {
        links += `<li class="breadcrumb active" aria-current="page">${pageName.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '')}</li>`;
    } else {
        links += `<li class="breadcrumb"><a href="${link}">${pageName.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '')}</a></li>`;
    }
    
    parts.push({
        "text": pageName,
        "link": link
    });
}
breadcrumbsList.innerHTML = links