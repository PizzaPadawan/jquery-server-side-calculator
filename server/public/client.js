$(() => {
    getHistory();
    clickHandlers();
})

// global variable to keep operator set to last button clicked.
let operator = '';

// function to POST equation object from inputs to '/history'
function postEquation(){
    //targeting our input field for the full equation to be posted
    let input = $('#numInput').val();
    //splitting our text value into an array to be referenced per individual data keys
    const numArray = input.split(" ");

    //ajax POST methoid
    $.ajax({
        method: 'POST',
        url: '/history',
        data: {
            num1: numArray[0],
            operator: operator,
            num2: numArray[2]
        }
    }).then(function (response){
        //appending history once we've sent new equation
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
    //putting solution append in an if statement to avoid throwing an error in console :)
    if(response.length > 0){
        // variable to target most recent solution
        let x = (response.length - 1)
        // appending most recent solution to DOM
        $('#solution').text(`${response[x].solution}`);
    }else if(response.length === 0){
        // make sure text is emptied if /history is deleted
        $('#solution').text('');
    }
    // emptying history so we're not appending doubles
    $('#history').empty();
    // bröther may I have some LÖÖPS
    for(math of response){
        $('#history').append(`
        <li>${math.num1} ${math.operator} ${math.num2} = ${math.solution}</li>
        `)
        $('#numInput').val('');
    }
}

// function to DELETE '/history' and reappend DOM
function clearHistory(){
    $.ajax({
        method: 'DELETE',
        url: '/history'
    }).then(function (response){
        console.log("in clearHistory")
    }).catch(function(err){
        alert(err);
    });
    // run GET request again to 'clear' the DOM.
    getHistory();
}

// function to feed a clicked equation in history back into input field
function rerunEquation(event){
    // declaring the text of our event target as a variable
    let rerun = $(event.target).text();
    // splitting that text into an array
    let rerunArray = rerun.split(" ");
    // selecting only the parts of the array we want back in our input equation
    $('#numInput').val(`${rerunArray[0]} ${rerunArray[2]} ${rerunArray[4]}`);
    // setting our operator based on operator in array 
    // (with added spaces) to account for our weird syntax in our server side post lol
    operator = ` ${rerunArray[2]} `;
}

//an absurd amount of click handlers
function clickHandlers(){
    $('#history').on('click', 'li', rerunEquation);
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

// setting operators:
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