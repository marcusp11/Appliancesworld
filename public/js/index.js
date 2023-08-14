"use strict";
$(function(){
		$.get("/samsung", function(results){
			console.log(results);
			if(!results)  //nothing came back so just exit function
			{
				return;
			}

			var context = {
					"results" : results
			};
			console.log(context);

			//Pass the data to the pre-compiled function so that it can generate the required html
			var html = Handlebars.templates.samsung(context);

			console.log(html);

			// Insert the HTML code into the page
			$("#").append(html);
		});

	});
	
