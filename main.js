'use strict';

$(document).ready(init);



var questionPool =[ {
  question:'What college did Ashley graduate from?',
  options: ['Indiana University of Pennsyvania','Virginia Tech','James Madison','Radford']
},{
  question: 'What did Ashley name her car?',
  options: ['Stewey', 'Serena', 'Racer', 'Selena']
},{
  question: 'What sorority was Ashley a charter member of?',
  options: ['Sigma Alpha Lambda', 'Beta Theta Pi', 'Gamma Phi Beta', 'Pi Beta Phi']
}, {
  question:'What is Ashley\'s favorite color?',
  options: ['Red','Blue', 'Gold', 'Green']
}, {
  question: 'What is <em>not</em> one of Ashley\'s favorite foods?',
  options: ['Bacon', 'Pickles', 'Mac & Cheese', 'Pizza']
}, {
  question: 'What state was Ashley born in?',
  options: ['Pennyslvania', 'Virginia', 'Washington, DC','New Jersey']
}]


function init() {

  var appendArray = [];


  for (var i = 0; i < questionPool.length; i++){
    var $questOpt = $('.template').clone();
    $questOpt.removeClass('template');

    var $input = $questOpt.find('input');
    var $question = $questOpt.find('.questionDiv');
    var $label = $questOpt.find('label');

    $input.attr('name','q' + i);
    $question.html(questionPool[i].question);
    var questionObj = questionPool[i];
    var newOptions = _.shuffle(questionObj.options);
    

    $label.each(function(j) {
      $(this).text(newOptions[j]);
    });

    appendArray.push($questOpt)

  }
  var shuffledArr = _.shuffle(appendArray);
  $('#questions').append(shuffledArr);
  $('.template').remove();


  $('form').on("submit", function(event){
    event.preventDefault();

    var correctAnswers = ['Virginia Tech', 'Green', 'Gamma Phi Beta', 'Virginia', 'Pizza', 'Serena'];
    var answerArr = [];

    $('input:checked+label').each(function(){
      answerArr.push($(this).text());
    });

    var score = 0;

    for (var i = 0; i < answerArr.length; i++){
      if (answerArr.indexOf(correctAnswers[i]) !== -1){
        score++;

      }
    }
    
    swal({ title: "Results!",
     text: "You got a " + score + " out of 6", 
     type: "info",   showCancelButton: true,
     confirmButtonColor: "#DD6B55",   confirmButtonText: "Play Again!",
     cancelButtonText: "See Answers",
     closeOnConfirm: true,
     closeOnCancel: true },
     function(isConfirm){   
      if (isConfirm) {     
        window.location.reload();
      } else {     
        if (answerArr.indexOf(correctAnswers[i]) === -1){

        }

      } 
    });
  });



}

