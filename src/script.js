window.onload=() => {
  const volumeSlider = document.querySelector("input");

  const changeSliderValue = () => {

    volumeSlider.style.width = `${volumeSlider.value}%`;

    /*window. getComputedStyle(element, '::before');  --- > buscar o pseudo elemento*/

    document.documentElement.style.setProperty(
      "--slider-position",
      `${volumeSlider.value}%`
    );
  };

  volumeSlider.addEventListener("input", changeSliderValue);
}