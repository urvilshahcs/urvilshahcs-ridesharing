$(document).ready(function(e) {
    $(function(){
		console.log("hello");
		//$(".col-lg-9 main-chart").hide();
		$("#dashboard_page").show();
		$("#rating_option_page").hide();
		//$("#rating_option_page").css({"visibility":"hidden"});
		//$("#business_goal_page").css({"visibility":"hidden"});
		$("#business_goal_page").hide();
		$("#ppo_page").hide();
		$("#ranking_page").hide();
		//$("#ppo_page").css({"visibility":"hidden"});
		//$("#ranking_page").css({"visibility":"hidden"});
	});		
});


$("#dashboard_link").click(function ()
{
	$("#dashboard_page").show();
	$("#business_goal_page").hide();
	$("#ppo_page").hide();
	$("#ranking_page").hide();
	$("#rating_option_page").hide();
});

$("#ro_link").click(function ()
{
	$("#dashboard_page").hide();
	$("#business_goal_page").hide();
	$("#ppo_page").hide();
	$("#ranking_page").hide();
	$("#rating_option_page").show();
});

$("#bg_link").click(function ()
{
	$("#dashboard_page").hide();
	$("#rating_option_page").hide();
	$("#ppo_page").hide();
	$("#ranking_page").hide();
	$("#business_goal_page").show();
});

$("#ppo_link").click(function ()
{
	$("#dashboard_page").hide();
	$("#rating_option_page").hide();
	$("#business_goal_page").hide();
	$("#ranking_page").hide();
	$("#ppo_page").show();
});

$("#ranking_link").click(function ()
{
	$("#dashboard_page").hide();
	$("#rating_option_page").hide();
	$("#ppo_page").hide();
	$("#ranking_page").show();
	$("#business_goal_page").hide();
});
