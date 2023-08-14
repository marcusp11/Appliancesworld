"use strict";
$(function(){
	$("a").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.get(href, function(results){
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
			var html = Handlebars.templates.product(context);

			console.log(html);

			// Insert the HTML code into the page
			//$("#templateHere").append(html);
			$("#templateHere").html(html);
		});
	})


		$.get("/products", function(results){
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
			var html = Handlebars.templates.product(context);

			console.log(html);

			// Insert the HTML code into the page
			//$("#templateHere").append(html);
			$("#templateHere").html(html);
		});

	});
