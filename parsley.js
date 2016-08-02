var partials = {
    clear: function(obj) {
        obj.innerHTML = '';
    },

    fetch: function(obj) {
        var request = new XMLHttpRequest();

        function requestComplete(e, objRef) {
            partials.render(e.target.responseText, objRef);
        }

        request.addEventListener("load", function(e) {
            requestComplete(e, obj);
        }, false);

        request.open("GET", obj.attributes.path.nodeValue);
        request.send();
    },

    render: function(data, objRef) {
        objRef.innerHTML = data;
        partials.evaluate(data);
    },

    evaluate: function(partialData) {
        var data = new DOMParser().parseFromString(partialData, "text/html");

        Array.prototype.slice.call(data.getElementsByTagName('script'))
            .forEach(function(obj) {
                var partialjs = document.createElement('script');
                if (typeof obj.attributes.src === 'undefined') {
                    partialjs.innerHTML = obj.innerHTML;
                } else {
                    partialjs.src = obj.attributes.src.value;
                }
                document.head.appendChild(partialjs);
            });
    },

    start: function() {
        Array.prototype.slice.call(document.getElementsByTagName('partial'))
            .forEach(function(obj, i) {
                partials.clear(obj);
                partials.fetch(obj);
            });
    }
};


var parsley = function() {
    partials.start();
};