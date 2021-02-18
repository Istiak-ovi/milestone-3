//number 1-----------------

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(43);
console.log(result,"meter");

//number 2------------------

function budgetCalculator(watch,mobile,laptop){
    var watchBudget = watch * 50;
    var mobileBudget = mobile * 100;
    var laptopBudget = laptop * 500;
    var total = watchBudget + mobileBudget + laptopBudget;
    return total;
}
var result = budgetCalculator(2,2,3);
console.log("We need:",result,"TK");
var result = budgetCalculator(5,4,2);
console.log("We need:",result,"TK");

//number 3-------------

function hotelCost(day){
    if(day<=10){
        var costPerDay = 100;
        var total = day * costPerDay;
        return total;
    }
    else if(day>10 && day<=20){
        var beforeTenDayCost = 1000;
        var newDay = day - 10;
        var secondTotal = (beforeTenDayCost) + (newDay*80);
        return secondTotal;
    }
    else{
        var beforeTwentyDay = (10*100) + (10*80);
        var afterTwentyDays = day - 20;
        var thirdTotalCost = (beforeTwentyDay) + (afterTwentyDays * 50) ;
        return thirdTotalCost;
    }
}
var firstCount = hotelCost(7);
console.log("Tk needed:",firstCount);
var secondCount = hotelCost(18);
console.log("Tk needed:",secondCount);
var thirdCount = hotelCost(31);
console.log("Tk needed:",thirdCount);


//number 4---------

function megaFriend(friend){
    var maxFriend=friend[0];
    for(var i=0;i<friend.length;i++){
        if(maxFriend.length<friend[i].length){
            maxFriend=friend[i];
        }
    }
    return maxFriend;
}
var friendList=['Ron','Istiak Ahamed','Kalam','Khorsed Mia'];
var myMegaFriend =megaFriend(friendList);
console.log("My Mega Friend is :",myMegaFriend);