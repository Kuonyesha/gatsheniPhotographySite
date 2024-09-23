function handleMediaQueries() {
  const bigScreen = window.matchMedia("(min-width: 1200px)");
  const smallScreen = window.matchMedia("(max-width: 767px)");
  const tablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1199px)"
  );

  function handleBigScreen(e) {
    if (e.matches) {
      // Apply styles for big screens here
      console.log("Big screen detected");
    } else {
      // Remove big screen styles here
      console.log("Big screen not detected");
    }
  }

  function handleSmallScreen(e) {
    if (e.matches) {
      // Apply styles for small screens here
      console.log("Small screen detected");
    } else {
      // Remove small screen styles here
      console.log("Small screen not detected");
    }
  }

  function handleTablet(e) {
    if (e.matches) {
      // Apply styles for tablets here
      console.log("Tablet detected");
    } else {
      // Remove tablet styles here
      console.log("Tablet not detected");
    }
  }

  bigScreen.addEventListener("change", handleBigScreen);
  smallScreen.addEventListener("change", handleSmallScreen);
  tablet.addEventListener("change", handleTablet);

  // Initial check
  handleBigScreen(bigScreen);
  handleSmallScreen(smallScreen);
  handleTablet(tablet);
}

handleMediaQueries();
