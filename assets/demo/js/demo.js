jQuery(document).ready(function(t){"use strict";t.ajax({url:"assets/demo/demo.html",dataType:"html"}).done(function(o){t(".demo-holder .content").html(o).promise().done(function(){t("#photoroller").photoroller({startpoint:6}),t.photoroller({target:t("#photoroller2"),startpoint:5})})})});