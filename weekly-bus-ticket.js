function WeeklyBusTicket(rideCount){

	var rides = rideCount || 10;

	function scan(){
		if (rides >= 1) {
			rides = rides - 1;
			return true;
		} else {
			return false;
		}
	}

	function ridesLeft() {
		return rides;
	}

	return {
		scan,
		ridesLeft
	}
}