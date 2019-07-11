# Bus tickets

What is a Factory function you ask?

Let's take a step back and think about it a bit in the context of bus tickets.

A bus ticket for a single ride is like a normal function - you pay money and you get on the bus.

Like this:

```javascript

function singleTripTicket(ticketPrice, amount) {
	if (amount >= ticketPrice) {
		return true;
	}
	return false;
}
```

If you pay enough you get on the bus if not you don't.

```javascript

// this prints false - as not enough money was offered to buy a ticket
console.log(singleTripTicket(5, 4));

// this prints true - as  enough money was offered to buy a ticket
console.log(singleTripTicket(5, 4));

```

This function got no state - it just returns true or false. You either get a ticket to ride on the bus or not.

A weekly bus ticket is whole different thing. When you buy one you can ride on the bus ten times in a given week. You can ride up until all the rides has been used up.

The ticket carry some `state` of how many times it can still be used. In the past the tickets was clipped, now a days there are more snazzy electronic cards which get read on the buss. You snap a card on the card reader and if the light is green you get on. If you used up all your rides it's a red light and a tragic beep, but no bus ride for you.

Factory functions are like a Weekly Bus Tickets - they carry some state in them and they have a lifecycle that lasts longer - longer than once bus ride at least.

Factory functions are used to store your applications state in between system activities and can easily be decoupled from the screen logic of your application. Your screen can send it information that it will process. Only for the screen to later ask it for some information again. That way your application logic stays testable and easier to use with your front-end code.

## Take a look

Take a look at this weekly bus ticket.






