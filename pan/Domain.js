$.ajax({url:"https://192.168.0.104:1912",dataType:"jsonp",type:"GET",complete:function(a){200==a.status?window.location.href="https://192.168.0.104:1912/home-u.html":alert("\u4f60\u6210\u529f\u6fc0\u6d3b\u4e86Bug\uff0c\u544a\u8bc9\u6211\u4f60\u662f\u600e\u4e48\u505a\u5230\u7684\uff1aadmin@bufeifan.top")}});setTimeout(function(){window.location.href="/home-redirect.html"},1E3);