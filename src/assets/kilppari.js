$(function () {
  kilppari = {
    anim: {
      animSpeed: 100,
      delta: 0,
      walk: [-27, -167, -307, -447, -587],
      hide: [-727, -867, -1007],
      show: [-1007, -867, -727],
      current: "show",
      currentFrame: 0,
      player: $(".kilppari div"),
      left: 0,
      top: 500,
      speed: 3,
      update: function (delta) {
        this.delta += delta;
        if (this.delta >= this.animSpeed) {
          this.delta = 0;
          this.player.css({
            left: this.left,
            top: this.top,
          });
          if (this.current === "walk") {
            this.left += this.speed;
            this.player.css({
              backgroundPositionY: this[this.current][this.currentFrame++ % 5],
            });
          } else if (this.current === "hide") {
            if (this.currentFrame < 3) {
              this.player.css({
                backgroundPositionY: this[this.current][this.currentFrame++],
              });
            }
          } else if (this.current === "show") {
            if (this.currentFrame < 3) {
              this.player.css({
                backgroundPositionY: this[this.current][this.currentFrame++],
              });
            } else {
              this.change("walk");
            }
          }
        }
      },
      change(anim) {
        this.currentFrame = 0;
        this.current = anim;
      },
    },
  };

  let left = 0;
  let speed = 0;
  const right = $("body").width() * 1;
  let target = 0;
  let clues = $(".clues").html();
  setInterval(() => {
    if (clues !== $(".clues").html()) {
      clues = $(".clues").html();
      const count = $(".clues .shown").length;
      const shown = $(".clues .shown:last");
      console.log(count);
      if (count) {
        target = (right / 4) * count;
        speed = (target - shown.offset().left) / 20 / 30;
        left = shown.offset().left;
        kilppari.anim.change("walk");
      } else {
        speed = -30;
        target = 2000;
        kilppari.anim.change("hide");
      }
    } else if (left < 0 || left > target) {
      speed = 0;
      kilppari.anim.change("hide");
    }
    left += speed;

    $(".kilppari").css({ left: left });
  }, 50);
  $(document).keydown(function (event) {
    if (event.key === " ") {
      if (kilppari.anim.current === "walk") {
        kilppari.anim.change("hide");
      }
    }
  });

  $(document).keyup(function (event) {
    if (event.key === " ") {
      if (kilppari.anim.current === "hide") {
        kilppari.anim.change("show");
      }
    }
  });

  MainLoop.setUpdate(update).start();

  paused = false;
  function update(delta) {
    if (paused) {
      return;
    }
    kilppari.anim.update(delta);
  }

  pause = function () {
    paused = !paused;
  };

  restart = function () {
    document.location.reload();
  };
});
