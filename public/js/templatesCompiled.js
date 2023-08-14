(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['product'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"products\">\r\n						<h1>\r\n							"
    + alias4(((helper = (helper = helpers.Brand || (depth0 != null ? depth0.Brand : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Brand","hash":{},"data":data}) : helper)))
    + "\r\n							</h1>\r\n	<img src=\"images/"
    + alias4(((helper = (helper = helpers.imgSmall || (depth0 != null ? depth0.imgSmall : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgSmall","hash":{},"data":data}) : helper)))
    + "\" class=\"img-rounded\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"modal\" data-target=\"#myModal"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n\r\n	<div class=\"modal fade\" id=\"myModal"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n		<div class=\"modal-dialog\">\r\n			<div class=\"modal-content\">\r\n\r\n				<!-- Modal Header -->\r\n				<div class=\"modal-header\">\r\n				  <h4 class=\"modal-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\r\n				  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\r\n				</div>\r\n\r\n				<!-- Modal body -->\r\n				<div class=\"modal-body\">\r\n					<h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "  $"
    + alias4(((helper = (helper = helpers.Price || (depth0 != null ? depth0.Price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Price","hash":{},"data":data}) : helper)))
    + "!!</h3>\r\n					<p>"
    + alias4(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</p>\r\n					<p><img src=\"images/"
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" class=\"img-rounded\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></p>\r\n				</div>\r\n\r\n				<!-- Modal footer -->\r\n				<div class=\"modal-footer\">\r\n				  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\r\n				</div>\r\n\r\n			</div>\r\n		</div>\r\n\r\n\r\n	</div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.results : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();