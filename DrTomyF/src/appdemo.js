var app = angular.module('demo', ['textToSpeech']);
app.controller('demoCtrl', function($scope, $timeout, textToSpeech) {
  textToSpeech.onVoiceReady(function(){
    textToSpeech.speak(
      'You worked 9 hours!!',
      'UK English Male',
      {pitch: 2}
    ).then(function() {
      alert('Finish!');
    }, function(err) {
      alert('Error! ' + err);
    });
  });
});
