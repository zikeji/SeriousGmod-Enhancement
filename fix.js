kango.browser.addEventListener(kango.browser.event.BEFORE_NAVIGATE, function(event) {
    var url = document.createElement('a');
    url.href = event.url;
    if (url.hostname == 'www.seriousgmod.com') {
        if (url.protocol != 'https:') {
            url.protocol = 'https:';
            event.target.navigate(url.href);
        }
    }
});
