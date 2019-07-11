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

## A weekly ticket

A weekly bus ticket is whole different thing. When you buy one you can ride on the bus ten times in a given week. You can ride up until all the rides has been used up.

The ticket carry some `state` of how many times it can still be used. In the past a hole punched in the ticket, now a days there are more snazzy electronic cards which get read on the bus. You snap yout card on the card reader and if the light is green you get on. If you used up all your rides it's a red light and a tragic beep, and no bus ride for you.

## Factory functions & weekly tickets

Factory functions are like a Weekly Bus Tickets. Factory functions can carry some state in them and they have a lifecycle that  longer than one bus ride.

Factory functions are used to store your applications state in between system activities and can easily be decoupled from the screen logic of your application. Your screen can send it information to process. Only for the screen to ask the Factory function for some information later. Factory functions makes your application logic testable and asy to use with your front-end code.

## Take a look

Take a look at the [weekly bus ticket widget](https://codex-academy.github.io/weekly-bus-ticket/) here.

Using a factory function makes it easy to keep track of how many trips are still left on the ticket.

It also makes it easy to [test](https://codex-academy.github.io/weekly-bus-ticket/test/) the logic of the weekly ticket.

## General usage

In this case the [WeeklyBusTicket](https://github.com/codex-academy/weekly-bus-ticket/blob/gh-pages/weekly-bus-ticket.js) factory function is used to count how many rides are left on the ticket. You can use them in your application to count up or down, increment or decrement values or whatever it is that you application need to do.

## Scenarios

What other scenario or problem can you think of that could be implemented using a Factory Function.






