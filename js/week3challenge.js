const payDayCalories = '140'
const payDayFat = '8'
const payDaySodium = '55'
const payDayCarbs = '16'
const payDayProtein = '3'
function caloriesPerBar() {
    return payDayCalories*3;
}
function fatPerBar() {
    return payDayFat*3
}
function sodiumPerBar() {
    return payDaySodium*3
}
function carbsPerBar () {
    return payDayCarbs*3
}
function proteinPerBar () {
    return payDayProtein*3
}
const calories = caloriesPerBar();
const dvcalories = calories/2000*100;
const fat = fatPerBar();
const dvfat = fat/80*100;
const sodium = sodiumPerBar();
const dvsodium = sodium/2000*100;
const carbs = carbsPerBar();
const dvcarbs = carbs/250*100;
const protein = proteinPerBar();
const dvprotein = protein/50*100;
const nutrition = [calories+' Calories',dvcalories+'%DV,',fat+'g Fat',dvfat+'%DV,',sodium+'g Sodium',dvsodium+'%DV,', carbs+'g Carbs',dvcarbs+"%DV,",protein+"g Protein",dvprotein+"%DV."].join(" ");
document.querySelector('#challenge-bonus').textContent = nutrition;