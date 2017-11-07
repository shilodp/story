function loadFunction() {
    $.getJSON('story.json', function (data){
        title.innerHTML=data.title;
        document.getElementById("loading-title").style.display='none';
        document.getElementById("loading-text").style.display='block';
        for (var i=0; i<data.urls.length;i++){
            var someURL=data.urls[i];
            $.getJSON(someURL, function (text) {
                var someVar=text.text
            });
            var newChap = document.createElement('p');
            newChap.innerHTML = someVar;
            text.appendChild(newChap);
        }
    });
    document.getElementById("loading-text").style.display='none';
}