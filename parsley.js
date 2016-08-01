var partials = {
    clear: function() {
        partials.workingObj.innerHTML = '';
    },

    fetch: function() {
        var request = new XMLHttpRequest();
        request.addEventListener("load", partials.render);
        request.open("GET", partials.workingObj.attributes.path.nodeValue);
        request.send();
    },


    render: function() {
        partials.workingObj.innerHTML = this.responseText;
        partials.evaluate(this.responseText);
    },

    evaluate: function(response) {
        var data = new DOMParser().parseFromString(response, "text/html");

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

    workingObj: null,

    start: function() {
        Array.prototype.slice.call(document.getElementsByTagName('partial'))
            .forEach(function(obj, i) {
                partials.workingObj = obj;
                partials.clear();
                partials.fetch();
            });
    }
};


var parsley = function() {
    partials.start();
};