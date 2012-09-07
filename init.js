// by wlsy 
// http://wlsy.me

(function(doc) {
	var html = (new Showdown.converter()).makeHtml(doc.body.innerText);
	doc.body.innerHTML = html;
    doc.body.className = 'container';
}(document));
