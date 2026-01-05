function showMoreNewsPages(halaman,firstload) { //###
	firstload = firstload || 0;
	next = halaman + 1;
	$("#divMoreNewsPages").html(dataPage[halaman]);
	if(Object.keys(dataPage).length == halaman) $("#divMoreNewsPages a[href='#" + next + "']").hide();
	else $("#divMoreNewsPages a").show();
	
	/*
	if(firstload==0){
		refreshPage = false;
		location.hash = halaman;
	}
	*/
	
	//alert("boom : "+halaman);	
	/*
	$.post('../../module/newsresearch/ajax/ajax_generalNewsPagesMore.php?halaman='+halaman+'&level4='+$('#inputLevel4Value').val(), function(data) {
		document.getElementById("divMoreNewsPages").innerHTML = data;
		//modifyAHref('');
		//alert('12');
	});
	/////
	if( $('#subDomainName').length ){
		subdomain_name = $('#subDomainName').val();
		subnews_name = $('#subNewsName').val();
	}else{
		subdomain_name = "";
		subnews_name = "";
	}
	str_url = '../../module/newsresearch/ajax/ajax_generalNewsPagesMore.php?halaman='+halaman+'&level4='+$('#inputLevel4Value').val();	
	$.post(str_url, {
		modulType: subdomain_name,
		newsType: subnews_name
	})
	.done(function (data) {
		$( "#divMoreNewsPages" ).html( data );
	});
	*/
	//history.pushState('', '', '')

}

function getHash() { 
	var url = window.location.href;
	var hash = url.substring(url.indexOf("#") + 1);
	if (url.indexOf("#") < 1) {
		hash = '1';
	}
	return hash;
}


var dataPage = {};
var isLoadMore = true;
var lastLoad = 0;

$(function () {

	var counter = 0;
	if ($('#subDomainName').length) {
		subdomain_name = $('#subDomainName').val();
		subnews_name = $('#subNewsName').val();
	} else {
		subdomain_name = "";
		subnews_name = "";
	}
	str_url = '../../module/newsresearch/ajax/ajax_generalNewsPagesMore.php?halaman=' + counter + '&level4=' + $('#inputLevel4Value').val();
	$.post(str_url, {
			modulType: subdomain_name,
			newsType: subnews_name
		})
		.done(function (data) {
			dataPage = JSON.parse(data);
			showMoreNewsPages(getHash(),1);
		});

});

window.onpopstate = function(event) {
	var hash=parseInt(getHash());
	showMoreNewsPages(hash,1);
	console.log(Object.keys(dataPage).length);
	console.log(lastLoad);	
	if(hash > Object.keys(dataPage).length - 5  && isLoadMore == true) {
		loadMore(lastLoad);
		lastLoad++;
	}
	
};


function loadMore(batch) {
	isLoadMore = false;
	batch = batch || 0;
	var dataMore;
	
	if ($('#subDomainName').length) {
		subdomain_name = $('#subDomainName').val();
		subnews_name = $('#subNewsName').val();
	} else {
		subdomain_name = "";
		subnews_name = "";
	}
	str_url = '../../module/newsresearch/ajax/ajax_generalNewsPagesMoreLoad.php?batch=' + batch + '&level4=' + $('#inputLevel4Value').val();
	$.post(str_url, {
			modulType: subdomain_name,
			newsType: subnews_name
		})
		.done(function (data) {
			//console.log(data);
			dataMore = JSON.parse(data);
			for (var key in dataMore) {
				dataPage[key] = dataMore[key];
				//if (!validation_messages.hasOwnProperty(key)) continue;
			}
			//console.log(dataMore);
			isLoadMore = true;
		});
		
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}


//setInterval(function(){ location.hash = parseInt(getHash()) + 1 }, 500);