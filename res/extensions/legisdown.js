define([
    "classes/Extension"
], function(Extension) {

    var legisdown = new Extension("legisdown", "Legisdown");

    var eventMgr = undefined;
    legisdown.onEventMgrCreated = function(eventMgrParameter) {
        eventMgr = eventMgrParameter;
    };

    legisdown.onPagedownConfigure = function(editor) {
        var converter = editor.getConverter();
        converter.hooks.chain("preConversion", function(text) {
            eventMgr.previewStartTime = new Date();
            var tmpText = text + "\n\n";
            var sectionList = [], offset = 0;
            // Look for titles (excluding gfm blocs)

            tmpText = text.replace(/^\s*(#+)(.*)\{: (\w+='\w+')+\s*\}$/gm, function(match, level, title, attribute) {
                var levelNum = level.length;
                var title = title.trim();
                var attributeInfo = attribute.split('=');
                
                var returnString = "<h1 data-" + attributeInfo[0] + "=" + attributeInfo[1] + " >" + title + "</h1>";

                console.log(returnString);

                return returnString;
            });



            return tmpText;
        });
    };

    return legisdown;
});