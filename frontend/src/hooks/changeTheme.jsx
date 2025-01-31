const changeTheme = (theme) => {
  if (theme === "light") {
    document.documentElement.style.setProperty("--bgColor", "#EEEEEE");
    document.documentElement.style.setProperty("--bgColorArea", "rgba(236, 236, 236, 0.5)");
    document.documentElement.style.setProperty("--black", "#000000");
    document.documentElement.style.setProperty("--white", "#ffffff");
    document.documentElement.style.setProperty("--mainBgColor", "#B9D7FF");
    document.documentElement.style.setProperty("--mainColor", "#1A73EB");
    document.documentElement.style.setProperty("--bgAnimation", "#FFE38B");
    document.documentElement.style.setProperty("--lightGrayHover", "#F5F5F5");
    document.documentElement.style.setProperty("--grayText", "#5F5F5F");
    document.documentElement.style.setProperty("--lightGrayVersion", "#AEAEAE");
    document.documentElement.style.setProperty("--hrLine", "#EAEAEA");
    document.documentElement.style.setProperty("--highlight", "#B9D7FF");
    document.documentElement.style.setProperty("--scroll", "#D9D9D9");
    document.documentElement.style.setProperty("--scrollHover", "#BDBDBD");
    document.documentElement.style.setProperty("--lightRed", "#ff9b9b");

    document.documentElement.style.setProperty("--shade-white", "linear-gradient(to top, var(--white) 0%, rgba(255, 255, 255, 0) 100%)");

    document.documentElement.style.setProperty("--black-filter", "invert(1) grayscale(100%) brightness(0) contrast(100%)");
    document.documentElement.style.setProperty("--white-filter", "brightness(0) invert(1)");
    document.documentElement.style.setProperty("--gray-filter", "brightness(60%) contrast(150%)");
    document.documentElement.style.setProperty("--color-filter", "brightness(0) saturate(100%) invert(30%) sepia(96%) saturate(2094%) hue-rotate(204deg) brightness(98%) contrast(88%)");
    localStorage.setItem("theme", "light");

  } else {
    document.documentElement.style.setProperty("--bgColor", "#181818");
    document.documentElement.style.setProperty("--bgColorArea", "rgb(24, 24, 24, 0.5)");
    document.documentElement.style.setProperty("--black", "#ffffff");
    document.documentElement.style.setProperty("--white", "#222222");
    document.documentElement.style.setProperty("--mainBgColor", "#112B4E");
    document.documentElement.style.setProperty("--mainColor", "#48A1FF");
    document.documentElement.style.setProperty("--bgAnimation", "#503c00");
    document.documentElement.style.setProperty("--lightGrayHover", "#1d1d1d");
    document.documentElement.style.setProperty("--grayText", "#AEAEAE");
    document.documentElement.style.setProperty("--lightGrayVersion", "#AEAEAE");
    document.documentElement.style.setProperty("--hrLine", "#313131");
    document.documentElement.style.setProperty("--highlight", "#FFE79D");
    document.documentElement.style.setProperty("--scroll", "#434343");
    document.documentElement.style.setProperty("--scrollHover", "#7D7D7D");
    document.documentElement.style.setProperty("--lightRed", "#ff9b9b");

    document.documentElement.style.setProperty("--shade-white", "linear-gradient(to top, var(--white) 0%, rgba(0, 0, 0, 0) 100%)");

    document.documentElement.style.setProperty("--black-filter", "brightness(0) invert(1)");
    document.documentElement.style.setProperty("--white-filter", "brightness(0) invert(1)");
    document.documentElement.style.setProperty("--gray-filter", "brightness(110%) contrast(100%)");
    document.documentElement.style.setProperty("--color-filter", "brightness(0) saturate(100%) invert(58%) sepia(30%) saturate(4034%) hue-rotate(190deg) brightness(101%) contrast(106%)");
    localStorage.setItem("theme", "dark");
  }
};

export default changeTheme;
