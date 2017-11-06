function loadFunction() {
    $.getJSON('title.json', function(key,value){
		if (key=="title") {
		$('h2').innerHTML=(value);
		};
	});
    }