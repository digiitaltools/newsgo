//SHARE BUTTON


function load() {
    /*
    gapi.client.setApiKey('AIzaSyDwTGmBpJa0vKyee0l5aasDZrrOEoNIn7Q');
    gapi.client.load('urlshortener', 'v1', makeRequest);
    */
}

function makeRequest() {
     	/*
	var longUrl = window.location.href;
	var request = gapi.client.urlshortener.url.insert({
		'resource': {
			'longUrl': longUrl
		}
	});
	request.execute(function (response) {
		if (response.id != null) {
			str = response.id;
			$("#input_short").val(response.id);
			goShare();
		}
	});
	*/
}

function goShare() {
	/*
	setTimeout(function () {
		var longUrlToShort = $("#input_short").val();
		var ua = navigator.userAgent.toLowerCase();
		var isGonative = ua.indexOf("gonative") > -1;
		var isIOS = ua.indexOf("ios") > -1; 
		
		if(isIOS && isGonative) {
			$("#share_news").jsSocials({
				url: longUrlToShort,
				shares: [{
					share: "twitter",
					logo: "ico-twitter",
					hashtags: "ipotnews,indopremier",
					shareUrl: "https://twitter.com/share?text={text}&url={url}&hashtags={hashtags}",
				}, {
					share: "facebook",
					logo: "ico-facebook",
				}, {
					share: "googleplus",
					logo: "ico-google",
				}, {
					share: "email",
					logo: "ico-envelope",
				}, ],
				showLabel: false,
				showCount: false,
				shareIn: "popup",
				//whatsapp://send?text=https%3A%2F%2Fgoo.gl%2FQJiqzp%20KABAR%20PASAR%2027%20NOVEMBER%3A%20Regulasi%20Pajak%20E-commerce%20Diperluas%2C%20Kinerja%20Pendapatan%20Jadi%20Sorotan
				//tg://msg?text=https%3A%2F%2Fgoo.gl%2FQJiqzp%20KABAR%20PASAR%2027%20NOVEMBER%3A%20Regulasi%20Pajak%20E-commerce%20Diperluas%2C%20Kinerja%20Pendapatan%20Jadi%20Sorotan
			});
			$(".jssocials-shares")
				.addClass('animation animating fadeInUp')
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
					$(this).removeClass('animation animating fadeInUp');
				});
		}else {
			$("#share_news").jsSocials({
				url: longUrlToShort,
				shares: [{
					share: "twitter",
					logo: "ico-twitter",
					hashtags: "ipotnews,indopremier",
					shareUrl: "https://twitter.com/share?text={text}&url={url}&hashtags={hashtags}",
				}, {
					share: "facebook",
					logo: "ico-facebook",
				}, {
					share: "googleplus",
					logo: "ico-google",
				}, {
					share: "email",
					logo: "ico-envelope",
				},{
					share: "whatsapp",
					shareUrl: "whatsapp://send?text={text}%20{url}",
				}, {
					share: "telegram",
					shareUrl: "tg://msg?text={text}%20{url}",
				}, ],
				showLabel: false,
				shareIn: "popup",
				showCount: false,
				//whatsapp://send?text=https%3A%2F%2Fgoo.gl%2FQJiqzp%20KABAR%20PASAR%2027%20NOVEMBER%3A%20Regulasi%20Pajak%20E-commerce%20Diperluas%2C%20Kinerja%20Pendapatan%20Jadi%20Sorotan
				//tg://msg?text=https%3A%2F%2Fgoo.gl%2FQJiqzp%20KABAR%20PASAR%2027%20NOVEMBER%3A%20Regulasi%20Pajak%20E-commerce%20Diperluas%2C%20Kinerja%20Pendapatan%20Jadi%20Sorotan
			});
			$(".jssocials-shares")
				.addClass('animation animating fadeInUp')
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
					$(this).removeClass('animation animating fadeInUp');
				});
		}
		
	}, 1000);
	*/
}

window.onload = load;

