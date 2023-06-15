var client,selected,scale=window.devicePixelRatio;$("#favicon").attr("href",profile_url);var userLang=navigator.language||navigator.userLanguage;if(!1!==multilingual)if(/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)){if("string"==typeof myname_hans)var myname=myname_hans}else if(/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)){if("string"==typeof myname_hant)myname=myname_hant}else if("string"==typeof myname_eng)myname=myname_eng;var firstchar=myname.charAt(0),lastchar=myname.charAt(myname.length-1),english=/^[A-Za-z0-9]*$/;if(english.test(firstchar)||english.test(lastchar))var finalname=" "+myname+" ",finalsub=subtitle.replace(myname,finalname),spacing=!0;else finalname=myname;var finalname_eng=" "+myname;if(null==usage||""===usage||"payment"!==usage&&"donate"!==usage){var usage="payment";console.log("%c The usage variable is not defined correctly","color: red")}if("undefined"==typeof branding||null===branding||""===branding||!0!==branding&&"true"!==branding)var aftertitle="";else if(!0===branding||"true"===branding)aftertitle=" | Merger";if(!1===multilingual)var finaltitle=title,wechatscan="微信扫一扫 向"+finalname+"支付",alipayscan="支付宝扫一扫 向"+finalname+"支付",payto="",presshold="长按识别二维码 向"+finalname+"支付",notavail="🚫 目前没有可用的支付方式",myname_hant=myname,myname_hans=myname,myname_eng=myname;else if(/zh-CN|zh-cn|zh-Hans|zh-hans|cn/i.test(userLang)){if(document.write("<style>body { font-family: -apple-system,BlinkMacSystemFont,Open Sans,Roboto,Oxygen,Cantarell,Fira Sans,Liberation Sans,Droid Sans,PingFang SC,HarmonyOS Sans SC,MiSans,Hiragino Sans GB,WenQuanYi Micro Hei,Noto Sans CJK SC,Noto Sans SC,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;}</style>"),"payment"===usage)var method="付款";if("donate"===usage)method="捐赠";document.title="向"+finalname+method+aftertitle;var trans_wx="微信";finaltitle="向"+finalname+method,finalsub="从下方选择"+method+"方式",presshold="长按识别二维码",payto=" 向"+finalname+method,notavail="🚫 目前没有可用的"+method+"方式",wechatscan=(trans_wx="微信")+(scan="扫一扫"),alipayscan=(trans_ali="支付宝")+scan}else if(/zh-TW|zh-HK|zh-tw|zh-hk|zh-Hant|zh-hant|tw|hk/i.test(userLang)){if(document.write("<style>body { font-family: -apple-system, BlinkMacSystemFont, 'PingFang TC', 'Hiragino Sans CNS', 'Microsoft JhengHei', 'Helvetica Neue', sans-serif; }</style>"),"payment"===usage)method="付款";if("donate"===usage)method="捐贈";document.title="向"+finalname+method+aftertitle;finaltitle="向"+finalname+method,finalsub="從下方選擇"+method+"方式",notavail="🚫 目前沒有可用的"+method+"方式",wechatscan=(trans_wx="WeChat ")+(scan="掃一掃"),alipayscan=(trans_ali="支付寶")+scan,presshold="長按識別二維碼",payto=" 向"+finalname+method}else{if("payment"===usage){method="Pay";var method_t="Payment"}if("donate"===usage)method="Donate",method_t="Donation";var method_lc=method.charAt(0).toLowerCase();document.title=method+" to"+finalname_eng+aftertitle,document.write("<style>body { font-family: sans-serif; }</style>");trans_wx="WeChat";var trans_ali="AliPay",scanhint=(finaltitle=method+" to"+finalname_eng,finalsub="Select a "+method_t.replace(method_t.charAt(0),method_t.charAt(0).toLowerCase())+" method from below","Scan the QR Code to "+method+finalname_eng),scan=(presshold=method.replace(method.charAt(5),"")+method.charAt(5).replace("e","")+"ing to"+finalname_eng+":<br><span style='font-weight:400'>Press and hold to recognise the QR Code</span>","Scan the QR Code with ");payto="",notavail="🚫 Currently no "+method_t.replace(method_t.charAt(0),method_t.charAt(0).toLowerCase())+" method available",wechatscan=scan+trans_wx,alipayscan=scan+trans_ali}var error_num=0;if("undefined"==typeof wechat||null===wechat||""===wechat){document.getElementById("depends").removeChild(document.getElementById("toclick")),error_num+=1;var nowechat=!0}if("undefined"==typeof alipay||null===alipay||""===alipay){document.getElementById("depends").removeChild(document.getElementById("alipaybtn")),error_num+=1;var noalipay=!0}if("undefined"==typeof paypal||null===paypal||""===paypal)document.getElementById("depends").removeChild(document.getElementById("paypalbtn")),error_num+=1;else function openbox(){function e(e,t,n){var a=null!=window.screenLeft?window.screenLeft:window.screenX,o=null!=window.screenTop?window.screenTop:window.screenY,i=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,l=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,d=i/window.screen.availWidth,c=(i-t)/2/d+a,r=(l-n)/2/d+o,s=window.open(e,"_blank","width="+t/d+", height="+n/d+", top="+r+", left="+c);window.focus&&s.focus()}selected="yes",window.innerHeight<window.innerWidth?e(paypal,.25*window.innerWidth,.9*window.innerHeight):e(paypal,.5*window.innerWidth,.9*window.innerHeight)}if(navigator.userAgent.match(/Alipay/i))if(!0===noalipay)alert("AliPay is not set up by the admin \n 管理员没有设置支付宝"),"showqrcode"!=location.href.substr(location.href.lastIndexOf("#")+1)||selected||(document.getElementById("showqrcode").style.display="none");else{window.location.href=alipay;finaltitle="",finalsub="";removal()}else if(navigator.userAgent.match(/MicroMessenger\//i))if(!0===nowechat)alert("WeChat Pay is not set up by the admin \n 管理员没有设置微信支付"),"showqrcode"!=location.href.substr(location.href.lastIndexOf("#")+1)||selected||(document.getElementById("showqrcode").style.display="none");else{client=wechat,document.getElementById("toclick").click(),document.getElementById("titleinfo").innerHTML=presshold+payto;finaltitle="",finalsub="";removal()}else"showqrcode"!=location.href.substr(location.href.lastIndexOf("#")+1)||selected||(document.getElementById("showqrcode").style.display="none"),document.getElementById("qrcodeclose").onclick=function(){document.getElementById("currentqrcode").innerHTML="","flex"==document.getElementById("showqrcode").style.display&&(document.getElementById("showqrcode").style.display="")};if(3===error_num){finalsub=notavail;console.log("%c No Payment Method Available to Users ","color: red")}function openwechat(){selected="yes",document.getElementById("titleinfo").innerHTML=wechatscan+payto,client=wechat,showqrcode()}function openalipay(){selected="yes",document.getElementById("titleinfo").innerHTML=alipayscan+payto,client=alipay,showqrcode()}function removal(){document.getElementById("h").removeChild(document.getElementById("i")),document.getElementById("pending").removeChild(document.getElementById("depends")),document.getElementById("btncontainer").removeChild(document.getElementById("qrcodeclose"))}function urlencode(e){return encodeURIComponent(e).replace(/'/g,"%27").replace(/"/g,"%22")}function showqrcode(){"showqrcode"==location.href.substr(location.href.lastIndexOf("#")+1)&&"yes"==selected&&(document.getElementById("showqrcode").style.display="flex"),document.getElementById("currentqrcode").innerHTML.includes("img")&&(document.getElementById("currentqrcode").getElementsByTagName("img")[0].setAttribute("id","todel"),document.getElementById("currentqrcode").removeChild(document.getElementById("todel"))),$("#currentqrcode").qrcode({render:"image",size:300*scale,text:client})}document.getElementById("name").innerHTML=finaltitle,document.getElementById("description").innerHTML=finalsub,console.log("\n %c Merger 0.28.2 %c https://github.com/qr-merger/merger \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),"undefined"!=typeof tracking&&!0===tracking&&function(e,t,n,a,o,i,l){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},(i=t.createElement(a)).async=1,i.src="https://www.clarity.ms/tag/hkeg670rpp",(l=t.getElementsByTagName(a)[0]).parentNode.insertBefore(i,l)}(window,document,"clarity","script"),window._iconfont_svg_string_974919='<svg><symbol id="icon-paypal" viewBox="0 0 3614 1024"><path d="M1280.301176 293.345882H1147.482353a23.190588 23.190588 0 0 0-22.588235 19.576471l-5.722353 37.345882-8.734118-13.552941c-30.117647-41.863529-93.063529-55.717647-157.214118-55.717647a305.995294 305.995294 0 0 0-296.96 267.444706A251.482353 251.482353 0 0 0 705.656471 752.941176 208.112941 208.112941 0 0 0 873.411765 820.103529a254.494118 254.494118 0 0 0 183.717647-76.197647l-6.02353 37.044706a23.190588 23.190588 0 0 0 22.889412 26.50353h120.470588a38.550588 38.550588 0 0 0 38.249412-32.527059l71.981177-455.378824a23.190588 23.190588 0 0 0-24.395295-26.202353z m-185.223529 258.710589a148.178824 148.178824 0 0 1-150.588235 127.09647 113.543529 113.543529 0 0 1-90.352941-35.538823 112.338824 112.338824 0 0 1-20.781177-93.364706A148.781176 148.781176 0 0 1 983.642353 421.647059a112.037647 112.037647 0 0 1 88.545882 36.141176 115.049412 115.049412 0 0 1 22.889412 94.268236zM652.649412 107.218824C613.195294 60.235294 542.117647 36.442353 451.764706 36.442353H172.574118a38.550588 38.550588 0 0 0-38.249412 32.527059L21.985882 781.251765a23.190588 23.190588 0 0 0 22.889412 26.503529h133.12a38.550588 38.550588 0 0 0 37.948235-32.527059l30.117647-192.150588a38.550588 38.550588 0 0 1 37.948236-32.527059h87.642353c182.814118 0 288.527059-88.545882 315.934117-263.830588 12.649412-75.896471 0.903529-136.131765-34.93647-179.501176zM481.882353 296.357647c-15.058824 99.689412-90.352941 99.689412-165.044706 99.689412H275.576471l30.117647-186.127059a23.190588 23.190588 0 0 1 22.588235-19.576471h19.275294c49.995294 0 97.581176 0 120.470588 30.117647A92.16 92.16 0 0 1 481.882353 296.357647z m1526.964706 9.336471a23.190588 23.190588 0 0 0-21.082353-12.348236h-132.517647a38.851765 38.851765 0 0 0-31.924706 16.865883l-184.621177 271.058823-78.004705-260.818823a38.851765 38.851765 0 0 0-37.345883-27.407059h-131.011764a23.190588 23.190588 0 0 0-21.985883 30.117647l147.275294 432.489412-138.24 194.861176a23.190588 23.190588 0 0 0 18.974118 36.442353h133.421176a38.550588 38.550588 0 0 0 31.62353-16.564706l444.53647-641.505882a23.190588 23.190588 0 0 0 1.204706-23.190588z m1252.291765-12.348236h-132.818824a22.889412 22.889412 0 0 0-22.889412 19.576471l-5.722353 37.345882-9.33647-13.552941c-30.117647-41.863529-93.063529-55.717647-156.912941-55.717647a305.995294 305.995294 0 0 0-296.96 267.444706A251.181176 251.181176 0 0 0 2686.192941 752.941176a208.112941 208.112941 0 0 0 167.454118 67.764706 254.494118 254.494118 0 0 0 184.018823-76.197647l-6.023529 37.044706a23.190588 23.190588 0 0 0 22.889412 26.50353h120.470588a38.550588 38.550588 0 0 0 37.948235-32.527059l71.981177-455.378824a23.190588 23.190588 0 0 0-23.491765-26.804706z m-185.524706 258.710589a148.178824 148.178824 0 0 1-150.588236 127.09647 113.543529 113.543529 0 0 1-90.352941-35.538823 112.64 112.64 0 0 1-20.781176-93.364706A148.781176 148.781176 0 0 1 2964.781176 421.647059a112.037647 112.037647 0 0 1 88.545883 36.141176 114.748235 114.748235 0 0 1 22.588235 94.268236zM2633.788235 107.218824C2594.334118 60.235294 2524.461176 36.442353 2431.397647 36.442353H2153.411765a38.550588 38.550588 0 0 0-37.948236 32.527059l-112.338823 712.282353a23.190588 23.190588 0 0 0 22.889412 26.503529H2168.470588a26.503529 26.503529 0 0 0 26.50353-22.889412l31.924706-201.788235a38.550588 38.550588 0 0 1 37.948235-32.527059h87.943529c183.115294 0 288.527059-88.545882 316.235294-264.131764C2680.470588 210.823529 2669.628235 150.588235 2633.788235 107.218824z m-170.465882 189.138823c-15.058824 99.689412-90.352941 99.689412-165.044706 99.689412h-41.863529L2285.929412 210.823529a22.889412 22.889412 0 0 1 22.889412-19.57647h19.275294c50.296471 0 97.581176 0 120.470588 30.117647a92.461176 92.461176 0 0 1 13.251765 77.402353z m1123.388235-252.084706a23.190588 23.190588 0 0 0-17.468235-8.131765h-128a23.190588 23.190588 0 0 0-22.889412 19.576471l-114.447059 725.232941a23.190588 23.190588 0 0 0 22.889412 26.50353h114.748235a38.550588 38.550588 0 0 0 37.948236-32.527059l112.338823-712.282353a23.190588 23.190588 0 0 0-5.12-18.371765z"  ></path></symbol><symbol id="icon-iconfontrectangle390" viewBox="0 0 1025 1024"><path d="M933.875 679.769l0-415.398c0-89.578-72.64-162.247-162.247-162.247l-519.257 0c-89.578 0-162.247 72.64-162.247 162.247l0 519.257c0 89.578 72.64 162.247 162.247 162.247l519.257 0c79.833 0 146.234-57.694 159.739-133.674-43.01-18.503-229.54-99.03-326.659-145.483-73.909 89.539-151.342 143.264-268.058 143.264-116.716 0-194.602-71.798-185.212-159.831 6.163-57.78 45.78-152.112 217.775-135.887 90.651 8.552 132.162 25.462 206.163 49.822 19.016-35.045 34.979-73.643 46.962-114.726l-327.761 0 0-32.452 162.143 0 0-58.413-197.819 0 0-35.697 197.819 0 0-84.151c0 0 1.864-13.205 16.339-13.205l81.13 0 0 97.356 210.937 0 0 35.697-210.938 0 0 58.413 171.995 0c-15.769 64.437-39.718 123.547-69.793 175.278 50.03 18.048 277.485 87.583 277.485 87.583 0 0 0 0 0 0zM323.779 754.407c-123.318 0-142.788-77.885-136.298-110.337s42.188-74.64 110.743-74.64c78.833 0 149.316 20.114 234.033 61.377-59.424 77.44-132.575 123.6-208.477 123.6z"  ></path></symbol><symbol id="icon-weixinzhifu" viewBox="0 0 1228 1024"><path d="M530.8928 703.1296a41.472 41.472 0 0 1-35.7376-19.8144l-2.7136-5.5808L278.272 394.752a18.7392 18.7392 0 0 1-2.048-8.1408 19.968 19.968 0 0 1 20.48-19.3536c4.608 0 8.8576 1.4336 12.288 3.84l234.3936 139.9296a64.4096 64.4096 0 0 0 54.528 5.9392L1116.2624 204.8C1004.9536 80.896 821.76 0 614.4 0 275.0464 0 0 216.576 0 483.6352c0 145.7152 82.7392 276.8896 212.2752 365.5168a38.1952 38.1952 0 0 1 17.2032 31.488 44.4928 44.4928 0 0 1-2.1504 12.3904l-27.6992 97.4848c-1.3312 4.608-3.328 9.3696-3.328 14.1312 0 10.752 9.216 19.3536 20.48 19.3536 4.4032 0 8.0384-1.536 11.776-3.584l134.5536-73.3184c10.1376-5.5296 20.7872-8.96 32.6144-8.96 6.2976 0 12.288 0.9216 18.0736 2.5088 62.72 17.0496 130.4576 26.5728 200.5504 26.5728C953.7024 967.168 1228.8 750.592 1228.8 483.6352c0-80.9472-25.4464-157.1328-70.0416-224.1024l-604.9792 436.992-4.4544 2.4064a42.1376 42.1376 0 0 1-18.432 4.1984z"  ></path></symbol></svg>',function(e){var t,n=(t=(t=document.getElementsByTagName("script"))[t.length-1]).getAttribute("data-injectcss");if(!(t=t.getAttribute("data-disable-injectsvg"))){var a,o,i,l,d;if(n&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}a=function(){var t,n=document.createElement("div");n.innerHTML=e._iconfont_svg_string_974919,(n=n.getElementsByTagName("svg")[0])&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",(t=document.body).firstChild?function(e,t){t.parentNode.insertBefore(e,t)}(n,t.firstChild):t.appendChild(n))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(a,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),a()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(i=a,l=e.document,d=!1,function e(){try{l.documentElement.doScroll("left")}catch(t){return void setTimeout(e,50)}c()}(),l.onreadystatechange=function(){"complete"==l.readyState&&(l.onreadystatechange=null,c())})}function c(){d||(d=!0,i())}}(window);