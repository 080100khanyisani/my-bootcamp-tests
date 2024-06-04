function mostProfitableDepartment(items) {
    var saleMap = {};
    for (let i = 0; i < items.length; i++) {
        var dep = items[i].department;
        var sales = items[i].sales;
        saleMap[dep] = (saleMap[dep] || 0) + sales;
    }
    var total_sales = 0;
    var mostProfitableDept;
    for (let department in saleMap) {
        if (saleMap[department] > total_sales) {
            total_sales = saleMap[department];
            mostProfitableDept = department;
        }
    }
	console.log(mostProfitableDept);
    return mostProfitableDept;
}
function mostProfitableDay(days) {
    var dayMap = {};
    for (let i = 0; i < days.length; i++) {
        var day = days[i].day;
        var sales = days[i].sales;
        if (day in dayMap) {
            dayMap[day] += sales;
        } else {
            dayMap[day] = sales;
        }
    }
    var total_sales = 0;
    var mostProfitableDay;
    for (let day in dayMap) {
        if (dayMap[day] > total_sales) {
            total_sales = dayMap[day];
            mostProfitableDay = day;
        }
    }
  	console.log(mostProfitableDay);
    return mostProfitableDay;
}