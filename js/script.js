var titl = {
    title: "Заголовок",
    urls: ["chapone.json","chaptwo.json","chapthree.json"]
};
var str = JSON.stringify(titl);
arr=JSON.parse(str);
var chapone = {text:"Первая глава"};
str = JSON.stringify(chapone);
chapone=JSON.parse(str);
chaptwo = {text:"Вторая глава"};
str = JSON.stringify(chaptwo);
chaptwo=JSON.parse(str);
chapthree = {text:"Третья глава"};
str = JSON.stringify(chapthree);
chapthree=JSON.parse(str);
var someURL;
var someVar;

function loadFunction() {
    $.getJSON('story.json', function (data){
        title.innerHTML=data.title;
        document.getElementById("loading-title").style.display='none';
        document.getElementById("loading-text").style.display='block';
        for (var i=0; i<data.urls.length;i++){
            someURL=data.urls[i];
            $.getJSON(someURL, function (text) {
                someVar=text.text
            });
            var newChap = document.createElement('p');
            newChap.innerHTML = someVar;
            text.appendChild(newChap);
        }
    });
    document.getElementById("loading-text").style.display='none';
}