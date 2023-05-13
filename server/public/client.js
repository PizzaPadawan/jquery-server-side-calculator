$(() => {
    getHistory();
    $('#add').on('click', addButton);
    $('#subtract').on('click', subtractButton);
    $('#multiply').on('click', multiplyButton);
    $('#divide').on('click', divideButton);
    $('#equals').on('click', postEquation);
    $('#C').on('click', () => {
        $('#num1').val('');
        $('#num2').val('');
    })
})

let operator = '';

// function to POST equation object from inputs to '/history'
function postEquation(){
    $.ajax({
        method: 'POST',
        url: '/history',
        data: {
            num1: $("#num1").val(),
            operator: operator,
            num2: $("#num2").val()
        }
    }).then(function (response){
        getHistory();
    }).catch(function(err){
        alert(err.responseText);
    });
}

//function to GET '/history' array and append to DOM
function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function (response){
        historyAppend(response);
    });
}

//function to append history to DOM
function historyAppend(response){
    let x = (response.length - 1)
    $('#history').empty();
    $('#solution').text(`${response[x].solution}`);
    for(math of response){
        $('#history').append(`
        <li>${math.num1} ${math.operator} ${math.num2} = ${math.solution}</li>
        `)
        $('#num1').val('');
        $('#num2').val('');
    }
}

// operator functions
function addButton(){
    operator = '+';
    console.log(operator);
}

function subtractButton(){
    operator = '-';
    console.log(operator);
}

function multiplyButton(){
    operator = '*';
    console.log(operator);
}

function divideButton(){
    operator = '/';
    console.log(operator);
}