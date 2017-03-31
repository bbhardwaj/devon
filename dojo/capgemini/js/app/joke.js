define('app/joke',[],function(){
	
	var jokes = ['Mondays are very welcome','Fridays are very boring','Wednesdays are amazing','Tuesdays are very funny'];		

	function nextJoke(){
		var idx = Math.floor(Math.random()*jokes.length);
		return jokes[idx];
	};

	return nextJoke;
});

