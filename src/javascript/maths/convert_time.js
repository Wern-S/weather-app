const convertTime = (currentTime) => {

  const descriptionCurrentTime = document.querySelector('.description-current-time');

  const date = new Date(currentTime);
  const hours = date.getHours();
  const minutes = date.getMinutes();

    if (minutes.toString().length === 2) {
      return descriptionCurrentTime.innerHTML = "It's " + hours + ':' + minutes;
    }else{
      return descriptionCurrentTime.innerHTML = "It's " + hours + ':0' + minutes;
    };
};

export { convertTime };
