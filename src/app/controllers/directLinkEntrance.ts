/*function fireEvent(node, eventName) {
    // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
    var doc;
    if (node.ownerDocument) {
        doc = node.ownerDocument;
    } else if (node.nodeType == 9) {
        // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
        doc = node;
    } else {
        throw new Error("Invalid node passed to fireEvent: " + node.id);
    }

    if (node.dispatchEvent) {
        // Gecko-style approach (now the standard) takes more work
        var eventClass = "";

        // Different events have different event classes.
        // If this switch statement can't map an eventName to an eventClass,
        // the event firing is going to fail.
        switch (eventName) {
            case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
            case "mousedown":
            case "mouseup":
                eventClass = "MouseEvents";
                break;

            case "focus":
            case "change":
            case "blur":
            case "select":
                eventClass = "HTMLEvents";
                break;

            default:
                throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
                break;
        }
        var event = doc.createEvent(eventClass);

        var bubbles = eventName == "change" ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

        event.synthetic = true; // allow detection of synthetic events
        // The second parameter says go ahead with the default action
        node.dispatchEvent(event, true);
    } else if (node.fireEvent) {
        // IE-old school style
        var event = doc.createEventObject();
        event.synthetic = true; // allow detection of synthetic events
        node.fireEvent("on" + eventName, event);
    }
};*/

/*function fireMouseEvent(obj, evtName) {
    if (obj.dispatchEvent) {
        //var event = new Event(evtName);
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent(evtName, true, true, window,
            0, 0, 0, 0, 0, false, false, false, false, 0, null);
        obj.dispatchEvent(event);
    } else if (obj.fireEvent) {
        event = document.createEventObject();
        event.button = 1;
        obj.fireEvent("on" + evtName, event);
        obj.fireEvent(evtName);
    } else {
        obj[evtName]();
    }
}*/


$(document).ready(function(){
    pjaxNavigation();
    cart();
    cartInit();
    if ((window.location.pathname).indexOf('product') !== -1){
        $('#pjax').ready(function() {
            productCardGetJSON(123); //model
            
            productCardMenuStick();
            productCardFooterMenu();
            productCardImageSelection();
            productCardShowYandexMap();
        });
    }
    else if ((window.location.pathname).indexOf('poisk') !== -1){
        $('#form').ready(function () {
            deleteRowListState();
            var qwert =  (window.location.pathname).split('/');
            //console.log(qwert[2]);
            $('.productCardTitle h1').attr('title',decodeURI(qwert[2])).html(decodeURI(qwert[2]));
            $('#breadcrumbsCategory1 a span').html('поиск по артикулу');

            new priceListLightViewUser();


            $('td.f1-0').on('dblclick', function(){
                window.location.href = 'https://www.ecarex.ru/poisk/'+$('td.f1-0 div div').html;
            });

        });


    }
    else if ((window.location.pathname).indexOf('catalog') !== -1){

    }
    else if ((window.location.pathname).indexOf('cart') !== -1){
        $('#pjax').ready(function() {
            openCart();
        });
    }
    else if ((window.location.pathname).indexOf('checkout') !== -1){
        $('#pjax').ready(function() {
            checkout();
        });
    }
    else{
        
        
    }


});










