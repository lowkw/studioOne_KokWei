function loadXMLDoc(dname) {
    'use strict';
    var xhttp;
    var ActiveXObject;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", dname, false);
    xhttp.send("");

    console.log("Response Text:", xhttp.responseText);
    console.log("Response XML:", xhttp.responseXML);

    if (xhttp.responseXML === null) {
        console.error("Failed to load XML. Parsing as XML manually.");
        let parser = new DOMParser();
        return parser.parseFromString(xhttp.responseText, "application/xml");
    }
    
    return xhttp.responseXML;
}

function displayResult(source, styledoc) {
    'use strict';
    var xml;
    var xsl;
    var ex;
    var resultDocument;
    xml = loadXMLDoc(source);
    xsl = loadXMLDoc(styledoc);
    //set a &nbsp to make prevent FF to append the text by double click
    document.getElementById("content").innerHTML = "&nbsp;";
    // code for IE
    if (window.ActiveXObject) {
        ex = xml.transformNode(xsl);
        document.getElementById("content").innerHTML = ex;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {

        var xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("content").appendChild(resultDocument);
    }
}

function collection() {
    'use strict';
    displayResult("resources/studio_one.xml", "resources/studio_one.xslt");
}


function init() {
    'use strict';
    document.getElementById("Btn").addEventListener("click", collection);
}

window.onload = init;