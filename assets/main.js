/* portoflio javascript */

// homepage arrow animation -- horizontal shake //
function homeOnLoad() {
    var homeArrow = document.getElementById("home-arrow");
    var body = document.getElementsByTagName('body');
    homeArrow.addEventListener('mouseover', function (e) {
        homeArrow.classList.add('animate__animated');
        homeArrow.classList.add('animate__shakeY');
    });

    homeArrow.addEventListener('mouseout', function (e) {
        homeArrow.classList.remove('animate__animated');
        homeArrow.classList.remove('animate__shakeY');
    });

  }

// back button -- uses url history, from W3Schools //

function goBack() {
  window.history.back();
}

  