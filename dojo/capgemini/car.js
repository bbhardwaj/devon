require([
	'dojo/dom-construct',
	'dojo/json',
	'dojo/query',
	'dojo/dom',
	'dojo/request',
	'dojo/on',
	'dojo/domReady!',
	'dojo/NodeList-manipulate'],

	function (domConstruct,json,query,dom,request,on){
	
	on(dom.byId('link0'),'click',function (){
		var pr = request.get("cars.json",{handleAs:'json'});
		pr.then(handleData,handleError);
		console.log("AJAX request sent!!!!");
	});

	function handleData(arr) {
		console.log("Data received!!!!");
		//var content = json.parse(arr);
		//query('#div0').text(content);
		var table = domConstruct.create('table');
		domConstruct.place(table,dom.byId('div0'));
		query(table).append("<thead><tr><th>VIN</th><th>NAME</th><th>COMPANY</th><th>PRICE</th><th>COLOR</th></tr></thead>");
		var tbody = domConstruct.create('tbody');
		domConstruct.place(tbody,table);
	
		for(var i=0;i<arr.length;i++){
			var car = arr[i];
			
			var tr = domConstruct.create('tr');
			domConstruct.place(tr,tbody);
			domConstruct.create('td',{innerHTML:car.vin},tr);
			domConstruct.create('td',{innerHTML:car.model},tr);
			domConstruct.create('td',{innerHTML:car.make},tr);
			domConstruct.create('td',{innerHTML:car.price},tr);
			domConstruct.create('td',{innerHTML:car.color},tr);
		}
	}

	function handleError(err) {
		console.log("Error in communication.........");
	}
});

