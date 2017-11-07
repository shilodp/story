function loadFunction() {
    $.getJSON('story.json', function (data){
        title.innerHTML=data.title;
        document.getElementById("loading-title").style.display='none';
        document.getElementById("loading-text").style.display='block';

        for (var i=0; i<data.urls.length;i++){
            var someURL=data.urls[i];
            $.getJSON(someURL, function (chapter) {
                var someVar=chapter.text;
                var newChap = document.createElement('p');
                var n;
                n=(i+1);
                newChap.innerHTML = ("Глава "+n+": "+someVar);
                text.appendChild(newChap);
            });
        }

        document.getElementById("loading-text").style.display='none';
    });
}