//Friends object
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

for (i = 0; i < friendsArray[0].score.length; i++) {
	console.log("this syntax works");
}


module.exports = friendsArray;
