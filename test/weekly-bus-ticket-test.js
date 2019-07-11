describe("For a weekly bus ticket", function(){

	it ("I should be able to get a new one.", function(){

		const weeklyBusTicket = new WeeklyBusTicket();
		assert.equal(10, weeklyBusTicket.ridesLeft());

	});

	it ("should be able to use a bus ticket with more than one ride left", function(){
		const weeklyBusTicket = new WeeklyBusTicket();
		assert.equal(10, weeklyBusTicket.ridesLeft());

		const canRide = weeklyBusTicket.scan();

		assert.equal(true, canRide);
		assert.equal(9, weeklyBusTicket.ridesLeft());
	});

	it ("should only be able to travel 10 times on a ticket.", function(){
		
		const weeklyBusTicket = new WeeklyBusTicket();

		// ride the bus 10 times
		weeklyBusTicket.scan();
		assert.equal(9, weeklyBusTicket.ridesLeft());
		weeklyBusTicket.scan();
		weeklyBusTicket.scan();
		weeklyBusTicket.scan();
		weeklyBusTicket.scan();
		weeklyBusTicket.scan();
		weeklyBusTicket.scan();
		weeklyBusTicket.scan();
		weeklyBusTicket.scan();
		assert.equal(1, weeklyBusTicket.ridesLeft());

		const tenthTime = weeklyBusTicket.scan();

		assert.equal(true, tenthTime);

		//
		const canRide = weeklyBusTicket.scan();
		// // I can't ride 11 time on a ticket so the ticket will return false
		assert.equal(false, canRide);
		assert.equal(0, weeklyBusTicket.ridesLeft());

	});




});