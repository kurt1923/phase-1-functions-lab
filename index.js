function distanceFromHqInBlocks(location){
    if (location >= 42)
    return (location - 42)
    if (location < 42) 
    return (42 - location)
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start > destination) 
    return (start - destination) * 264
    if (destination > start)
    return (destination - start) *264
}

function calculatesFarePrice(start, destination){
    if ((distanceTravelledInFeet(start, destination)) <= 400)
    return 0
    if ((distanceTravelledInFeet)(start, destination) < 2000)
    return ((((distanceTravelledInFeet)(start, destination)) -400) * (.02)) 
    if ((distanceTravelledInFeet)(start, destination) < 2500)
    return 25
    if ((distanceTravelledInFeet)(start, destination) > 2500)
    return "cannot travel that far"
}