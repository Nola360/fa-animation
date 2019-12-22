// Break chain animations

function breakChain() {
  let chain = document.getElementById('chain');
  chain.innerHTML = '&#xf0c1;';

  setTimeout(function () {
    chain.innerHTML = '&#xf127';
  }, 1000);
}

breakChain();
// Break Chain Every 2 seconds
setInterval(breakChain, 2000);

