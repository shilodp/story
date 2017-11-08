function loadFunction() {
    $.getJSON('story.json', function (data){
        title.innerHTML=data.title;
        document.getElementById("loading-title").style.display='none';
        document.getElementById("loading-text").style.display='block';
        var n=0;

        for (var i=0; i<data.urls.length;i++){
            var someURL=data.urls[i];
            $.getJSON(someURL, function (chapter) {
                var someVar=chapter.text;
                var newChap = document.createElement('p');
                n++;
                newChap.innerHTML = ("Глава "+n+": "+someVar);
                text.appendChild(newChap);

            });
        }

        document.getElementById("loading-text").style.display='none';
    });
}


function get(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send();
    });
}

function check() {
    get('story.json').then(
        function(response) {
            var data=JSON.parse(response);
            title.innerHTML=data.title;
            document.getElementById("loading-title").style.display='none';
            document.getElementById("loading-text").style.display='block';
            var n=0;
            for (var i=0; i<data.urls.length;i++){
                get(data.urls[i]).then(
                    function (response) {

                        console.log("Success!", response);

                        var story=JSON.parse(response);
                        var someVar=story.text;
                        var newChap = document.createElement('p');
                        n++;
                        newChap.innerHTML = ("Глава "+n+": "+someVar);
                        text.appendChild(newChap);
                    },
                    function(error) {
                        console.error("Failed!", error);
                        document.getElementById("loading-text").style.display='none';
                    },
                document.getElementById("loading-text").style.display='none';
                )
            }
        },
        function(error) {
        console.error("Failed!", error);
        document.getElementById("loading-text").style.display='none';
    });
}
