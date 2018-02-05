//Friends object

// var Friends = function() 
// 	{
// 		this.name = $("#friend-name").val(),
// 		this.photo = $("#photo-link").val(),
// 		this.score = [$("#Q1").val(), 
// 					$("#Q2").val(),
// 					$("#Q3").val(),
// 					$("#Q4").val(),
// 					$("#Q5").val(),
// 					$("#Q6").val(),
// 					$("#Q7").val(),
// 					$("#Q8").val(),
// 					$("#Q9").val(),
// 					$("#Q10").val()

// 				]
// 	}

$(document).ready(function() {
	
	$("#submit-survey").click(function(){
		var Friends =  
		{
		"name": $("#friend-name").val(),
		"photo": $("#photo-link").val(),
		"score": [$("#Q1").val(), 
					$("#Q2").val(),
					$("#Q3").val(),
					$("#Q4").val(),
					$("#Q5").val(),
					$("#Q6").val(),
					$("#Q7").val(),
					$("#Q8").val(),
					$("#Q9").val(),
					$("#Q10").val()

				]
			}
		console.log(Friends);
	})
});
