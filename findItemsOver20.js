function findItemsOver20(items) {
	return items.filter(function(item) {
    	return item.qty > 20;
    });
}
// function findItemsOver(items, threshold) {
// 	return items.filter(function(item) {
//     	return item.qty > threshold;
//     });
// }