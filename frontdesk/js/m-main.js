/* Starter
 * -------------------------------------------------- */
(function () {
    var x = document.getElementById("m-header");
    var y = document.getElementById("m-subnav");
    if (y) {
        x.style.boxShadow = "none";
    } else {
        x.style.boxShadow = "0px 4px 5px -2px rgba(173, 173, 173, 0.4)";
    }
})();

/* 目錄
 * -------------------------------------------------- */
function menuToggle() {
  var x = document.getElementById("m-header-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* 搜尋
 * -------------------------------------------------- */
function searchToggle() {
  var x = document.getElementById("m-search-panel");
  var y = document.getElementById("search-term");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    y.focus();
  }
}

/* 活動篩選器
 * -------------------------------------------------- */
function eventFilterToggle() {
  var x = document.getElementById("m-event-filter");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

