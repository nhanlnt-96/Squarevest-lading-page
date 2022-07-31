$(document).ready(() => {
  // video player play button
  $("#videoPlayButton").click(() => {
    const videoPlayerItem = $("#videoPlayerItem");
    videoPlayerItem.trigger("play");
    videoPlayerItem.css("z-index", 10);
    $("#videoPlayButton").hide();
    $("#videoPlayerBackground").hide();
  });

  // responsive video player with element
  const onWindowResizeHandler = (currentWidth) => {
    const SECTION2_PADDING_BOTTOM = currentWidth >= 768 ? 94 : 47;
    const videoPlayerWrapper = $("#videoPlayerWrapper");

    // set videoPlayerContainer height
    $("#videoPlayerContainer").height(videoPlayerWrapper.height() / 2);
    // set section2Container height
    $("#section2Container").css(
      "min-height",
      videoPlayerWrapper.height() / 2 + SECTION2_PADDING_BOTTOM
    );
    // set section2Wrapper margin-top
    $("#section2Container").css("padding-top", videoPlayerWrapper.height() / 2);
  };

  onWindowResizeHandler(window.innerWidth);

  $(window).resize(() => onWindowResizeHandler(window.innerWidth));

  // move to top button
  $("#moveToTopBtn").click(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
