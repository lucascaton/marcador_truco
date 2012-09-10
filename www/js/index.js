var app = {
  firstTeamPoints: 0,
  secondTeamPoints: 0,
  initialize: function(){
    this.bind();
  },

  bind: function(){
    document.addEventListener('deviceready', this.deviceready, false);
  },

  deviceready: function(){
    app.setupPointsCounter();
    app.updatePoints();
  },

  setupPointsCounter: function(){
    $('.pointIncrement').click(function(e){
      e.preventDefault();
      var $this  = $(this),
          team   = $this.data('team'),
          points = parseInt($this.data('points'));
    app.incrementPoints(team, points);
    });
  },

  incrementPoints: function(team, points){
    if(team == 'first'){
      this.firstTeamPoints += points;
    }else{
      this.secondTeamPoints += points;
    }
    app.tryFinalizeGame();
    app.updatePoints();
  },

  updatePoints: function(){
    $('#firstTeamPoints').html(app.firstTeamPoints);
    $('#secondTeamPoints').html(app.secondTeamPoints);
  },

  tryFinalizeGame: function(){
    if(this.firstTeamPoints >= 12){
      this.firstTeamPoints = 12;
      $('.pointIncrement').remove();
    }

    if(this.secondTeamPoints >= 12){
      this.secondTeamPoints = 12;
      $('.pointIncrement').remove();
    }
  }
};

// Uncomment for debugging in browser purposes only
// app.deviceready();
