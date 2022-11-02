let userAge = 28;
let isSubscribed = true;


if ((userAge <= 18) && (isSubscribed == true)) {
    console.log("The user is younger than 18 and is subscribed");
} else if((userAge >= 18) && (isSubscribed == true )){
    console.log("The user is older than 18 and is subscribed");
} else if((userAge <= 18) && (isSubscribed == false)){
    console.log("The user is younger than 18 and is not subscribed");
} else if ((userAge >= 18) || (isSubscribed == false)){
    console.log("The user is older than 18 and is not subscribed");
} else{
    console.log("This should not show up as a result");
}
