//Friends object



$(document).ready(function() {
	var friendsArray = [
	{
		name: "Chrom",
		photo: "http://fireemblem.wikia.com/wiki/File:Chrom_Fates.png",
		score: [1, 
				5,
				3,
				5,
				5,
				5,
				5,
				1,
				2,
				5

			]
	}
];

	
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
		friendsArray.push(Friends);	
		console.log(Friends);
		console.log(friendsArray);
		
	})
});
