//set intial count
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
btns.forEach((item) => {
  item.addEventListener('click', (event) => {
    const styles = event.currentTarget.classList; //returns class list of selected event
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }

    value.textContent = count;
  });
});
