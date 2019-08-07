export function getJsonObject(jsonURL) {
    return (function(JSONURL) {
        var json = null;
        $.ajax({
            'url': JSONURL,
            'datatype': 'json',
            async: false,
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })(jsonURL);
}

export function getJsonObjectWithID(jsonURL, ID) {
    return (function(JSONURL) {
        var json = null;
        $.ajax({
            'url': JSONURL,
            'datatype': 'json',
            async: false,
            'success': function(data) {
                json = data;
            }
        });
        for(var i = 0; i < json.length; i++) {
            if(json[i].componentID === ID) {
                return json[i];
            }
        }
        return json;
    })(jsonURL);
}