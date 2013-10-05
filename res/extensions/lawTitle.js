define([
    "classes/Extension"
], function(Extension) {
            console.log('Hello World');
    var lawTitleParser = new Extension("lawTitleParser", "Law title parser");

    var eventMgr = undefined;
    lawTitleParser.onEventMgrCreated = function(eventMgrParameter) {
        eventMgr = eventMgrParameter;
    };

    lawTitleParser.onPagedownConfigure = function(editor) {
        var converter = editor.getConverter();
        converter.hooks.chain("preConversion", function(text) {
            eventMgr.previewStartTime = new Date();
            var tmpText = text + "\n\n";
            var sectionList = [], offset = 0;
            // Look for titles (excluding gfm blocs)
            console.log('Hello World');
            tmpText.replace(/^\s+(#+)\{\}(.*)/gm, function(match, headings, title) {
                console.log(match, headings, title)
                if(title) {
                    // We just found a title which means end of the previous
                    // section
                    // Exclude last \n of the section
                    sectionList.push(tmpText.substring(offset, matchOffset));
                    offset = matchOffset;
                }
                return "";
            });
            // Last section
            sectionList.push(tmpText.substring(offset, text.length));
            eventMgr.onSectionsCreated(sectionList);
            return text;
        });
    };

    return lawTitleParser;
});