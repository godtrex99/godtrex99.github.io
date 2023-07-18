var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";



var repliesfForHowAreYou = ["I'm fine.", "I'm good. And yourself?", "Not bad. How are you?", "I'm doing well, and you?", "Good, how about you?", "I'm great!", "Everything is fine when you are around.", "The best I can be. I hope you are at your best too.", "I'm still learning and eagerly waiting to grasp new things."];
var repliesForHello = ["Hello there!", "Hey!", "Hola!", "Nice to meet you!", "I'm here!", "Hey! How's it going?", "What's up?", "Hey! What a pleasant surprise!"];
var repliesForBye = ["Catch you on the flip side!", "Bye-bye, butterfly.", "See you soon!", "Catch you later!", "Bye for now", "See you on the internet!"];
var repliesfForLove = ["I get that a lot!", "You are day-dreaming again!", "I love You........Tube! LOL!", "Are you sure you aren't sick or something?", "I love you too!", "You are not my type!", "❤️"]
var repliesForCommandUnknown = ["Hey I couldn't catch you....<br>Send 'help' to know more about usage.", "I didn't get it.", "Please can you repeat it?", "I'm still learning...please use approriate keywords in your phrase.", "I'm still working on it.<br>"];
var repliesForVoiceAssistants = ["Yes! I know her.", "Of-cource! Who don't know her?", "I'm teching lessions from her!", "She is my BFF!", "My childhood friend!"];



function getRandom(arrayOfReplies) {
    var sizeOfArray = arrayOfReplies.length;
    return arrayOfReplies[Math.floor(Math.random() * sizeOfArray)];
}




function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Selamat Datang :) <br><br>Ketik<span class='bold'>'help'</span>Jika kamu Bingung ♥️");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know...<br>e.g<br><span class='bold'>'bug flex'</span> - Kumpulan Bug Flex<br><span class='bold'>'bug akrab'</span> - Kumpulan Bug Akrab<br><span class='bold'>'bug unligame'</span> - Kumpulan Bug Axis Unligame<br><span class='bold'>'opmini'</span> - Kumpulan Bug Opera Mini<br><span class='bold'>'opok tsell'</span> - Kumpulan Bug Opok Tsell<br><span class='bold'>'clear'</span> - Untuk Membersihkan Chat.</span>");
            break;
        case "clear":
            clearChat();
                sendTextMessage("Berhasil Menghapus Pesan");
            }, 2000);
            clearChat();
            break;
        case "opok tsell":
            setTimeout(() => {
                sendTextMessage("📌Bug Opera Mini📌<br><br>Payload :<br>GET /cdn-cgi/trace HTTP/1.1[crlf]Host:<br> skul.id[crlf][crlf]CF-RAY / HTTP/1.1[lf]Host: [host]<br>[lf]Expect:<br> 100-continue[lf]Connection:<br> Upgrade[lf]Upgrade: websocket[lf]User-Agent: Googlebot/2.1<br> (+http://www.google.com/bot.html)[crlf][crlf]<br>");
            }, 2000);
            break;
        case "opmini":
            setTimeout(() => {
            sendTextMessage("📌Bug Opera Mini📌<br><br>• support-vpn-pro.opera.com:443<br>• res-odx.op-mobile.opera.com<br>• kibana.op-mobile.opera.com<br>• img.email.cashback.opera.com<br>• img.news.cashback.opera.com<br>• support-vpn-pro.opera.com<br>• img-odx.op-mobile.opera.com<br>• odsp-quic.op-mobile.opera.com<br>• odsp-test.op-mobile.opera.com<br>• res-odx-cf.op-mobile.opera.com<br><br>Silahkan coba satu-satu bug di atas,jika tidak konek sabar aja 🗿");
            }, 2000);
            break;
        case "bug akrab":
            setTimeout(() => {
                sendTextMessage("📌Bug Akrab📌<br><br>Akrab Jabar<br>• 104.18.2.198<br>• cdn.noice.id<br>• support.zoom.us<br>• teams.live.com<br>• teams.microsoft.com<br>• 172.64.149.82<br><br>Silahkan coba satu-satu bug di atas,jika tidak konek sabar aja 🗿");
            }, 2000);
            break;;
        case "bug unligame":
            setTimeout(() => {
                sendTextMessage("📌Bug Axis Unli Game📌<br><br>• cdn.appsflyer.com:80<br>• 104.16.108.96:443<br>• avatars.pool.miniclippt.com<br>• ir.huya.com<br>• poe.garena.com<br>• cf-vod.nimo.tv<br>• cftxvid.vod.nimo.tv<br>• cdntest40.line-scdn.net<br><br>Silahkan coba satu-satu bug di atas,jika tidak konek sabar aja 🗿");
            }, 2000);
            break;
        case "bug ilped":
            setTimeout(() => {
                sendTextMessage("📌Bug Ilmupedia📌<br><br>IP Proxy<br>• 104.22.25.131<br>• 104.17.3.81<br>• 104.21.21.104<br>• 104.16.51.111<br>• 172.67.66.68<br>• 104.18.2.2<br>• 104.16.66.85");
            }, 2000);
            break;
        case "bug flex":
            setTimeout(() => {
                sendTextMessage("📌Bug Flex📌<br><br>XL Flex WA (Banten) :<br>• web.web.whatsapp.com<br>• whatsapp.boychongzen.online<br>• fna.whatsapp.net<br>• sogood.linefriends.com<br>• Df.game.naver.com<br>• care.pmang.game.naver.com<br>• ava.game.naver.com<br><br> Flex Turbo Basic :<br><br>• zendesk1.grabtaxi.com<br>• zendesk1.shopee.sg ");
            }, 2000);
            break;
    }

}



function ifElseThinkAndExecute(textString) {
    if (textString.includes("hii") || textString.includes("hi") || textString.includes("hello") || textString.includes("hola") || textString.includes("hey")) {
        // reply for hi message
        sendTextMessage(getRandom(repliesForHello));
    } else if (textString.includes("i need break") || textString.includes("leave me") || textString.includes("bye") || textString.includes("see you soon") || textString.includes("bye bye") || textString.includes("goodbye")) {
        // reply for bye message
        sendTextMessage(getRandom(repliesForBye));
    } else if (textString.includes("i love you") || textString.includes("love you") || textString.includes("you are hot") || textString.includes("i like you")) {
        // reply for i love you
        sendTextMessage(getRandom(repliesfForLove));
    } else if (textString.includes("how are you") || (textString.includes("hows going") || textString.includes("how its going" || textString.includes("how it's going") || textString.includes("what are you doing")))) {
        // reply for 'how are you' request
        sendTextMessage(getRandom(repliesfForHowAreYou));
    } else if (textString.includes("you know") && (textString.includes("bixby") || textString.includes("siri" || textString.includes("alexa") || textString.includes("cortana")))) {
        // reply for 'you know other chattingBots' request
        sendTextMessage(getRandom(repliesForVoiceAssistants));
    } else {
        setTimeout(() => {
            sendTextMessage(getRandom(repliesForCommandUnknown));
        }, 2000);
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
