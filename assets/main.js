/* portoflio javascript */

// homepage arrow animation -- horizontal shake //
function homeOnLoad() {
    var homeArrow = document.getElementById("home-arrow");
    var body = document.getElementsByTagName('body');
    homeArrow.addEventListener('mouseover', function (e) {
        homeArrow.classList.add('animate__animated');
        homeArrow.classList.add('animate__shakeX');
    });

    homeArrow.addEventListener('mouseout', function (e) {
        homeArrow.classList.remove('animate__animated');
        homeArrow.classList.remove('animate__shakeX');
    });


  }



  