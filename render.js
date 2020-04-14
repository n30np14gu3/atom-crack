document.getElementById('submit-btn').addEventListener('click', () => {
    let flag_message = document.getElementById('flag_message');
    let flag = document.getElementById('flag_input').value;
    if(flag === ''){
        alert('Input is required!');
    }
    let result = flagCompare(flag);
    let message = (result ? 'Nice Job, Man!' : 'Invalid flag(');
    let new_class = result ? 'alert-success' : 'alert-danger';
    flag_message.className = '';
    flag_message.classList.add('alert');
    flag_message.classList.add(new_class);
    flag_message.innerText = message;
});

function flagCompare(flag){
    return window.btoa(flag) === 'c2hie2lfMTB2M18zMTNjN3Iwbn0=';
}