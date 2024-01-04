(function(){
    const buttons = document.querySelectorAll('.counterBtn');
    let count = 0;
    const counter = document.querySelector('#counter');

    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            count += (button.dataset.direction === 'prev') ? -1 : 1;
            counter.textContent = count;

            if(count > 0){
                counter.style.color = 'green';
            }
            else if(count < 0){
                counter.style.color = 'red';
            }
            else{
                counter.style.color = 'black';
            }
        });
    });
})();
