$(() => {
    getHistory();
    clickHandlers();
})

let operator = '';

// function to POST equation object from inputs to '/history'
function postEquation(){
    let input = $('#numInput').val();
    const numArray = input.split(" ");
    console.log(numArray);
    $.ajax({
        method: 'POST',
        url: '/history',
        data: {
            num1: numArray[0],
            operator: operator,
            num2: numArray[2]
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
    for(math of response){
        $('#history').append(`
        <li>${math.num1} ${math.operator} ${math.num2} = ${math.solution}</li>
        `)
        $('#numInput').val('');
    }
    $('#solution').text(`${response[x].solution}`);
}

function clearHistory(){
    $.ajax({
        method: 'DELETE',
        url: '/history'
    }).then(function (response){
        console.log(response)
        console.log("in clearHistory")
    })
    getHistory();
    $('#solution').text('');
}

//an absurd amount of click handlers
function clickHandlers(){
    $('#1').on('click', button1);
    $('#2').on('click', button2);
    $('#3').on('click', button3);
    $('#4').on('click', button4);
    $('#5').on('click', button5);
    $('#6').on('click', button6);
    $('#7').on('click', button7);
    $('#8').on('click', button8);
    $('#9').on('click', button9);
    $('#0').on('click', button0);
    $('#decimal').on('click', decimalButton);
    $('#add').on('click', addButton);
    $('#subtract').on('click', subtractButton);
    $('#multiply').on('click', multiplyButton);
    $('#divide').on('click', divideButton);
    $('#equals').on('click', postEquation);
    $('#C').on('click', () => {
        $('#numInput').val('');
        operator = '';
    })
    $('#clearHistory').on('click', clearHistory);
}

// calculator buttons:

// function numberButtons(){
//     let value = $(this).text();
//     $('#numInput').val(input + value);
// }

// operators:
function addButton(){
    let input = $('#numInput').val();
    operator = ' + ';
    $('#numInput').val(input + operator);
    console.log(operator);
}

function subtractButton(){
    let input = $('#numInput').val();
    operator = ' - ';
    $('#numInput').val(input + operator);
    console.log(operator);
}

function multiplyButton(){
    let input = $('#numInput').val();
    operator = ' * ';
    $('#numInput').val(input + operator);
    console.log(operator);
}

function divideButton(){
    let input = $('#numInput').val();
    operator = ' / ';
    $('#numInput').val(input + operator);
    console.log(operator);
}

//oh God, here comes all the NUMBERS
function button1(){
    let input = $('#numInput').val();
    let num = '1';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button2(){
    let input = $('#numInput').val();
    let num = '2';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button3(){
    let input = $('#numInput').val();
    let num = '3';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button4(){
    let input = $('#numInput').val();
    let num = '4';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button5(){
    let input = $('#numInput').val();
    let num = '5';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button6(){
    let input = $('#numInput').val();
    let num = '6';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button7(){
    let input = $('#numInput').val();
    let num = '7';
    if(input === undefined){
        $('#numInput').val(num);
    } else{
    $('#numInput').val(input + num);}
}

function button8(){
    let input = $('#numInput').val();
    let num = '8';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button9(){
    let input = $('#numInput').val();
    let num = '9';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function button0(){
    let input = $('#numInput').val();
    let num = '0';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}

function decimalButton(){
    let input = $('#numInput').val();
    let num = '.';
    if(input === undefined){
        $('#numInput').val(num)
    } else{
    $('#numInput').val(input + num);}
}