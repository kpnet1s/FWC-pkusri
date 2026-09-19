const balloon = document.getElementById("balloon");

let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

function updateBalloon() {
    $("#balloon").css({
	"width": size + "px",
	"height": size + "px",
	"background-color": colors[colorIndex]
	});
}

$("#balloon").click(function () {
    size += 10;
    colorIndex = (colorIndex + 1) % 3;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }

    updateBalloon();
});

$("#balloon").mouseleave(function () {
    if (size > 200) {
        size -= 5;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;

    updateBalloon();
});
