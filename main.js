const div = document.getElementById('adinfo');
var domainname = window.location.host;
div.innerHTML = '<a href="http://download.viettechkey.com/file_download/FirefoxSetup.rar"><img src="http://img.viettechkey.com/icon_download/ff.png" height="40"></a>
<a href="http://download.viettechkey.com/file_download/ChromeSetup.rar"><img src="http://img.viettechkey.com/icon_download/chrome.png" height="40"></a>
<a href="http://download.viettechkey.com/file_download/IDM.zip"><img src="http://img.viettechkey.com/icon_download/idm.png" height="40"></a>
<a href="http://download.viettechkey.com/file_download/unikey42RC4.zip"><img src="http://img.viettechkey.com/icon_download/unikey.jpg" height="40"></a>
<a href="http://download.viettechkey.com/file_download/winrar.rar"><img src="http://img.viettechkey.com/icon_download/winrar.png" height="40"></a>
<a href="http://download.cnet.com/FLV-Player-Free/3000-13632_4-10909512.html"><img src="http://img.viettechkey.com/icon_download/flv.jpg" height="40"></a>
<a href="http://download.viettechkey.com/file_download/TeamViewerPortable.zip"><img src="http://img.viettechkey.com/icon_download/teamviewer.png" height="40"></a>
<a href="http://download.viettechkey.com/file_download/FoxitReader.rar"><img src="http://img.viettechkey.com/icon_download/pdf.png" height="40"></a>';

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            createDiv(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", theUrl, false);
    xmlhttp.send();    
}
