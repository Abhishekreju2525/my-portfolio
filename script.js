window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 1) nav.className = 'navbar navbar-expand-lg fixed-top navbar-dark bg-t'; else nav.className = 'navbar navbar-expand-lg fixed-top navbar-dark bg-tt';
};

window.onscroll = () => {
  const nav = document.querySelector('#navbarTogglerDemo02');
  if(this.scrollY <= 1) nav.className = 'collapse navbar-collapse bg-color'; else nav.className = 'collapse navbar-collapse bg-ttt';
};


  
  
  collapse navbar-collapse bg-ttt