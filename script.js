window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 1) nav.className = 'navbar navbar-expand-lg fixed-top navbar-dark bg-t'; else nav.className = 'navbar navbar-expand-lg fixed-top navbar-dark bg-tt';
};

<i class="bi bi-x-lg"></i>