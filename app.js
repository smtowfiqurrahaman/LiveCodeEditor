function showPreview() {
    var content = ""; 
        content += "<style>" + document.getElementById("csseditor").innerText + "<\/style>";
        content += "<script>" + document.getElementById("jseditor").innerText + "<\/script>";
        content += "<body>" + document.getElementById("htmleditor").innerText + "<\/body>";
    document.getElementById("preview").src = "data:text/html; charset=UTF-8, <html>" + content + "<\/html>";                
 }