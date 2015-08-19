var intval = null;
var pos = 0;


$(document).ready(function() {

	intval = window.setInterval(moveBg, 70);

	 $("#hiddenMenu").on('click',function(){
    	$("#hiddenMenu").animate({
        width: '15vw',
        opacity: '1',
        fontSize: '15pt'

    	}).delay(4000).animate({
        width: '5vw',
        opacity: '.5',
        fontSize: '25pt'

    	});

    	$("#hiddenMenu").html('<br><br>Click on any of the data entries in the table to the left to change their values');
    	var timeoutID = window.setTimeout(changeText, [4500]);
	}); 






	$('#chMin').on("click", function(){
			var chMin = prompt("What would you like the minimum number of customers for Capitol Hill to be chaged to?");
			capitolHill.minCustomers = chMin;
			$('#chMin').html(chMin);
		});
	$('#chMax').on("click", function(){
			var chMax = prompt("What would you like the maximum number of customers for Capitol Hill to be chaged to?");
			capitolHill.maxCustomers = chMax;
			$('#chMax').html(chMax);
		});
	$('#chAvg').on("click", function(){
			var chAvg = prompt("What would you like the average number of donuts per customer for Capitol Hill to be chaged to?");
			capitolHill.avgCustomers = chAvg;
			$('#chAvg').html(chAvg);
		});


	$('#slMin').on("click", function(){
			var slMin = prompt("What would you like the minimum number of customers for South Lake Union to be chaged to?");
			southLakeUnion.minCustomers = slMin;
			$('#slMin').html(slMin);
		});
	$('#slMax').on("click", function(){
			var slMax = prompt("What would you like the maximum number of customers for South Lake Union to be chaged to?");
			southLakeUnion.maxCustomers = slMax;
			$('#slMax').html(slMax);
		});
	$('#slAvg').on("click", function(){
			var slAvg = prompt("What would you like the average number of donuts per customer for South Lake Union to be chaged to?");
			southLakeUnion.avgCustomers = slAvg;
			$('#slAvg').html(slAvg);
		});

	
	$('#wwMin').on("click", function(){
			var wwMin = prompt("What would you like the minimum number of customers for Wedgewood to be chaged to?");
			wedgewood.minCustomers = wwMin;
			$('#wwMin').html(wwMin);
		});
	$('#wwMax').on("click", function(){
			var wwMax = prompt("What would you like the maximum number of customers for Wedgewood to be chaged to?");
			wedgewood.maxCustomers = wwMax;
			$('#wwMax').html(wwMax);
		});
	$('#wwAvg').on("click", function(){
			var wwAvg = prompt("What would you like the average number of donuts per customer for Wedgewood to be chaged to?");
			wedgewood.avgCustomers = wwAvg;
			$('#wwAvg').html(wwAvg);
		});

	
	$('#bMin').on("click", function(){
			var bMin = prompt("What would you like the minimum number of customers for Ballard to be chaged to?");
			ballard.minCustomers = bMin;
			$('#bMin').html(bMin);
		});
	$('#bMax').on("click", function(){
			var bMax = prompt("What would you like the maximum number of customers for Ballard to be chaged to?");
			ballard.maxCustomers = bMax;
			$('#bMax').html(bMax);
		});
	$('#bAvg').on("click", function(){
			var bAvg = prompt("What would you like the average number of donuts per customer for Ballard to be chaged to?");
			ballard.avgCustomers = bAvg;
			$('#bAvg').html(bAvg);
		});

	
	$('#dtMin').on("click", function(){
			var dtMin = prompt("What would you like the minimum number of customers for DownTown to be chaged to?");
			downTown.minCustomers = dtMin;
			$('#dtMin').html(dtMin);
		});
	$('#dtMax').on("click", function(){
			var dtMax = prompt("What would you like the maximum number of customers for DownTown to be chaged to?");
			downTown.minCustomers = dtMax;
			$('#dtMax').html(dtMax);
		});
	$('#dtAvg').on("click", function(){
			var dtAvg = prompt("What would you like the minimum number of customers for Downtown to be chaged to?");
			downTown.minCustomers = dtAvg;
			$('#dtAvg').html(dtAvg);
		});
	   
});

	function changeText() {
	$("#hiddenMenu").html('<br><br>>');
	};


	function moveBg() {
			    
		 pos++;
		 $(".back").css({backgroundPosition: (pos * 1) + "px 0px"});
	}




	function DonutShop (location,minCustomers,maxCustomers,avgDonuts) {
		this.location = location;
		this.minCustomers = minCustomers;
		this.maxCustomers = maxCustomers;
		this.avgDonuts = avgDonuts;
			this.calcDonuts = function() {
				var hoursOpen = document.getElementById("hours").value;
				totalHours = hoursOpen;
				for(var i=0;i<hoursOpen;i++){
				return Math.round(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + (this.minCustomers) * (this.avgDonuts)*(hoursOpen));				
				};
			}
	};

	var downTown = new DonutShop('Downtown',8,43,4.5);
	var capitolHill = new DonutShop('Capitol Hill',4,37,2);
	var southLakeUnion = new DonutShop('South Lake Union',9,23,6.33);
	var wedgewood = new DonutShop('Wedgewood',2,28,1.25);
	var ballard = new DonutShop('Ballard',8,58,3.75);
	var stores = [downTown,capitolHill,southLakeUnion,wedgewood,ballard];
	var totalHours = 0;

				

	function shopSelect(shop){
		var totalDonuts = shop.calcDonuts();
		var avgDonuts = Math.round(totalDonuts/totalHours)
					
		$("#total").show(200);
		setTimeout(function hideTotalWindow(){
		$("#total").toggle(2000);}, 3000);
		$("#totalDonuts").text(totalDonuts);
		$("#avgDonuts").text(avgDonuts);

		console.log("If the " + shop.location + " shop is open for " + totalHours + " hours, the shop needs to make approximately " + totalDonuts + " donuts today.")
		console.log("That is an average of " + avgDonuts + " donuts per hour");

	};