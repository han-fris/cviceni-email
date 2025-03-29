const goodbye = (fullName) => {
  const closing = document.querySelector('.email__closing'); //pozor na .class
  closing.innerHTML = `S pozdravem ${fullName}`;
};

const yourName = 'Jan Novák'; //nejdriv definuji tu hodnotu
const addName = goodbye(yourName); //a pak volám funkci
