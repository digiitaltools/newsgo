//INDEX IPOTNEWS

function butuhLoginPIN() {
	document.location.href = '../ipotmember/loginpin.php';
}


$(function () {
	
	var ua = navigator.userAgent.toLowerCase();
	var isGonative = ua.indexOf("gonative") > -1;
	var isAndroid = ua.indexOf("android") > -1; 
	
	
	if(isAndroid && isGonative) {
		$("#ipotnewsMainMenu").mmenu({
				"extensions": ["pagedim-white","fx-panels-slide-0","fx-listitems-slide","shadow-page"],
				"offCanvas": {
					"zposition": "front"
				},
				"navbars": [{
					"position": "top",
					content: ["prev", "title", "close"]
				}, {
					"position": "bottom",
					"content": [
						'<a href="../ipotnews" class="btn btn-primary text-white"><i class="ico-home6"></i> HOME</a>',
						'<a href="#" class="btn btn-warning-darker text-white" onClick="exitGonative();"><i class="ico-exit2"></i> EXIT</a>'
					]
				}]
			}, {
				clone: true,

		});
	}else {
		$("#ipotnewsMainMenu").mmenu({
			"extensions": ["pagedim-white","fx-panels-slide-0","fx-listitems-slide","shadow-page"],
			"offCanvas": {
				"zposition": "front"
			},
			"navbars": [{
				"position": "top",
				content: ["prev", "title", "close"]
			}, {
				"position": "bottom",
				"content": [
					'<a href="../ipotnews"><i class="ico-home6"></i> home</a>'
				]
			}]
		}, {
			clone: true,

		});
	}
	
	
});
