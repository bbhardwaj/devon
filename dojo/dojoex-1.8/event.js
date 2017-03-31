	require(["dojo/on","dojo/query","dojo/dom","dojo/domReady!"],function (on,query,dom){
			
		var han=on(dom.byId("btn0"),'click',function(){
			alert("Done!");
		});
		
		on(dom.byId("btn1"),'click',function(){
			han.remove();
		});
	
	});
	
