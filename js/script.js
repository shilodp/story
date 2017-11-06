function loadFunction() {
    $.getJSON('title.json', function(data){
		$.each(data,function(key, val) {
			$('h2')=(data.title);
		}
	};
    }