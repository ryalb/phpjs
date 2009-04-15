function __DIR__() {
    // http://kevin.vanzonneveld.net
    // +   original by: Michael White (http://getsprink.com/)
    // -    depends on: dirname
    // -    depends on: __FILE__
    // %        note 1: Not really a function, so in experimental
    // %        note 2: It will probably need a bit of work to make it fully
    // %        note 2: cross-browser but I tested it in FF3 and Safari 3 on
    // %        note 2: mac os x.
    // %        note 3: If the function thinks it is in the original HTML
    // %        note 3: document then the URL stored in window.location.href
    // %        note 3: is used. There might be a better choice for this.
    // %        note 4: I just upgraded to Safari 4 beta today and I found
    // %        note 4: that the method I used to get the current script tag
    // %        note 4: does not work for Safari 4.
    // %        note 4: In my local code I swapped out that part for Prototype's
    // %        note 4: $$('script') and everything worked fine again.
    // *     example 1: __FILE__();
    // *     returns 1: ''

	return dirname(__FILE__());
}