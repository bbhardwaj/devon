define('app/cal',['./joke','dojo/dom'],function(joke,dom){

	var obj =  {
		title:'Math Calc',
		currentTime:new Date(),
		add:function (a,b){
			console.log(joke());
			console.log(a+b);
			dom.byId('div0').innerHTML = a+b;
		},
		subtract:function (a,b){
			console.log(joke());
			console.log(a-b);
			dom.byId('div0').innerHTML = a-b;
		}
	};

	return obj;		
});


