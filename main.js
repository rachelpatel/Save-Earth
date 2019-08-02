var button= $('.button');
var paragraph =$('.paragraph');

var quotes = ["       ","Bike somewhere instead of driving in the car", "Carpool with someone to work/school", "Avoid all meats today, go vegetarian",
"Avoid dairy for an entire day, oat milk and almond milk is also very good!", "Pay extra attention to the water you waste today, don't leave the faucet running when you're brushing your teeth or showering"
 ,"don't pre-wash dishes when using a dishwasher"];

button.on("click", comCom);


function comCom(){
var randomDecimal =  Math.random();
var random = randomDecimal * quotes.length;
var final = Math.floor(random);
paragraph.text(quotes[final]);
}

var button1= $('.button1');
var paragraph2 =$('.paragraph2');

var quotes2= ["      ","Go vegetarian for a week", "Invest in glass tupperware & water bottles","Bring a reusable cup to your coffee shop and request to have it filled instead of ordering non-reuseable cups", "Reduce the amount of paper in your life ",
"Be mindful of what you throw away, think twice if it can be reused or recycled", "Volunteer for clean-ups in your community"];


button1.on("click", bye);


function bye(){
var randomDecimal =  Math.random();
var random = randomDecimal * quotes2.length;
var final = Math.floor(random);
paragraph2.text(quotes2[final]);
}

var button2= $('.button2');
var paragraph3 =$('.paragraph3');

var quotes3= ["unplug when it isn' bring used","Remove red meats from your diet", "When going somewhere, not too far from your home, walk or bike there. It's also a good source of exercise", "Invest in some reusable shopping bags", "Create and use a compost pile", "when eating at a resturaunt, bring your own containers(glass, or metal) to pack leftovers,it's better than letting resturaunts throw your leftovers away or using plastic containers to take your food home",
""];


button2.on("click", hi);


function hi(){
var randomDecimal =  Math.random();
var random = randomDecimal * quotes3.length;
var final = Math.floor(random);
paragraph3.text(quotes3[final]);
}
