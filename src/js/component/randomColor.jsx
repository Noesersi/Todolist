function randomColor() {
    const colors = [
      "green",
      "blue",
      "yellow",
      "red",
      "purple",
      "cian",
      "grey",
      "orange",
    ];
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
  }

  export default randomColor;