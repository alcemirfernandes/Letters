# Letters notes

## 2012-09-01
- tried various methods of triggering a custom event on a view
	- all failed until...
- read [this StackOverflow discussion][1]
	- the chosen answer and the one from James Brown point out that the events list in a view is used to define events triggered *on the view.el* not on the view object itself. This is not made explicit in the bbjs docs
	- so to get the view to respond, I simply triggered the custom event on the view.el. 
	- i suspect there's a better way to do it. [Another discussion][2] on SO and [this, linked from it][3], which I actually read before the other one, suggest using an event aggregator. 


[1]: http://stackoverflow.com/questions/5379290/how-to-trigger-bind-custom-events-in-backbone-js-views/8630126#answer-8029660 
	 "How to trigger / bind custom events in Backbone.js views?"

[2]: http://stackoverflow.com/questions/6930621/backbone-js-binding-from-one-view-to-another
	 "Backbone.js - Binding from one view to another?"

[3]: http://lostechies.com/derickbailey/2012/04/03/revisiting-the-backbone-event-aggregator-lessons-learned/
	 "Revisiting The Backbone Event Aggregator: Lessons Learned"