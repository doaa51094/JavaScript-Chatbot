var data = {
  chatinit: {
    title: [
      "Hello <span class='emoji'>&#128075</span>",
      "I am mr/chatbot",
      "How can i help you?",
    ],
    options: ["News", "Shopping", "Music", "movies"],
  },
  news: {
    title: ["today 5 headlines"],
    options: [
      '"Going About Life In The Present": Meghan Markle Slams UK Media Reports',
      '"Parrot In A Cage": Union Minister On Role Of CBI During UPA Government',
      "Rahul Gandhi To Hold Roadshow In Karnataka Today, Boost Lingayat Outreach",
      "6 Deaths, 1515 New Covid Cases Recorded In Delhi In Last 24 Hours",
      "Case Against Congress Leader Srinivas BV, Assam Cops Leave For Karnataka",
    ],
    url: {
      link: [
        "https://www.ndtv.com/top-stories",
        "https://www.ndtv.com/top-stories",
        "https://www.ndtv.com/top-stories",
        "https://www.ndtv.com/top-stories",
        "https://www.ndtv.com/top-stories",
      ],
    },
  },
  movies: {
    title: ["today 5 headlines"],
    options: ["webseries", "hollywod", "bollywod", "others"],
    url: {},
  },

  shopping: {
    title: ["please choose shopping category"],
    options: [
      "beauty",
      "dresses",
      "shirts",
      "men fashion",
      "women fashion",
      "electrons",
    ],
    url: {
      link: [
        "https://www.youtube.com/watch?v=4yRWVyxXcJo",
        "https://www.youtube.com/watch?v=TDSNrRu7gxk",
        "https://www.youtube.com/watch?v=4yRWVyxXcJo",
        "https://www.youtube.com/watch?v=3cLgYSIGaJ8",
        "https://www.youtube.com/watch?v=3cLgYSIGaJ8",
      ],
    },
  },

  music: {
    title: ["please choose  favorite song"],
    options: ["song1", "song2", "song3", "song4"],
    url: {
      link: [
        "https://www.youtube.com/watch?v=TDSNrRu7gxk",
        "https://www.youtube.com/watch?v=4yRWVyxXcJo",
        "https://www.youtube.com/watch?v=3cLgYSIGaJ8",
      ],
    },
  },
  hollywod: {
    title: ["please choose  favorite movie"],
    options: ["comedy", "horror", "romance", "action"],
    url: {
      link: [
        "https://www.youtube.com/watch?v=TDSNrRu7gxk",
        "https://www.youtube.com/watch?v=4yRWVyxXcJo",
        "https://www.youtube.com/watch?v=3cLgYSIGaJ8",
        "https://www.youtube.com/watch?v=3cLgYSIGaJ8",
      ],
    },
  },
  bollywod: {
    title: ["please choose favorite movie"],
    options: ["comedy", "horror", "romance", "action"],
    url: {
      link: [
        "https://www.youtube.com/watch?v=TDSNrRu7gxk",
        "https://www.youtube.com/watch?v=4yRWVyxXcJo",
        "https://www.youtube.com/watch?v=3cLgYSIGaJ8",
      ],
    },
  },

  webseries: {
    title: ["please choose favorite webserie"],
    options: ["comedy", "horror", "romance"],
    url: {
      link: [
        "https://www.youtube.com/watch?v=TDSNrRu7gxk",
        "https://www.youtube.com/watch?v=4yRWVyxXcJo",
        "https://www.youtube.com/watch?v=3cLgYSIGaJ8",
      ],
    },
  },

  others: {
    title: ["please choose  favorite song"],
    options: ["youtube", "netflex", "cimanow", "amazon"],
    url: {
      link: [
        "https://www.youtube.com/watch?v=TDSNrRu7gxk",
        "https://www.netflix.com/eg-en/",
        "https://ab.cimanow.cc/",
        "https://www.amazon.com/",
      ],
    },
  },
};
document.getElementById("init").addEventListener("click", ShowChatbot);
var cbot = document.getElementById("chat-box");
var len1 = data.chatinit.title.length;

function ShowChatbot() {
  if ((this.innerText = "Start Chat")) {
    document.getElementById("test").style.display = "block";
    document.getElementById("init").innerText = "Close Chat";
    initChat();
  } else {
    location.reload();
  }
}

function initChat() {
  j = 0;
  cbot.innerHTML = "";
  for (let index = 0; index < len1; index++) {
    setTimeout(handleChat, index * 500);
  }
  setTimeout(function () {
    showOptions(data.chatinit.options);
  }, (len1 + 1) * 500);
}

var j = 0;
function handleChat() {
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}
function showOptions(options) {
  for (let index = 0; index < options.length; index++) {
    var opt = document.createElement("span");
    var inp = "<div>" + options[index] + "</div>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}

function handleOpt() {
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];
  document.querySelectorAll(".opt").forEach((el) => {
    el.remove();
  });
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">' + findText + "</span>";
  elm.innerHTML = sp;
  cbot.appendChild(elm);
  var tempObj = data[findText.toLowerCase()];
  handleResults(tempObj.title, tempObj.options, tempObj.url);
}
function handleResults(title, options, url) {
  for (let index = 0; index < title.length; index++) {
    var elm = document.createElement("p");
    elm.innerHTML = title[index];
    elm.setAttribute("class", "msg");
    {
      title ? cbot.appendChild(elm) : "";
    }
  }

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) == "{}";
  };

  if (isObjectEmpty(url) == true) {
    showOptions(options);
  } else {
    handleOptions(options, url);
  }
}

function handleOptions(options, url) {
  for (let index = 0; index < options.length; index++) {
    var opt = document.createElement("span");
    var inp =
      '<a class="m-link" target="_blank" href=" ' +
      url.link[index] +
      '">' +
      options[index] +
      "</a>";
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }
  var opt = document.createElement("span");
}

function handleScroll() {
  var elm = document.getElementById("chat-box");
  elm.scrollTop = elm.scrollHeight;
}
