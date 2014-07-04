'use strict';

angular.module('taraleriasCom40App')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    $scope.projects = [
      {
        title: "LivelyList",
        pitch: "User-friendly Bucket List Manager",
        description: "I created a site where a user can log in and make a list of all the things they want to do within their lifetime. They can add a title, photo, description and some tags. When they complete the item, they can drag it to a “Done” bucket, similar to Trello’s drag and drop feature.",
        blogURL: 'http://hackerisms.com/2014/06/12/first-project-done-livelylist/',
        imageURL: 'https://s3.amazonaws.com/portfolio_tlerias/lively_home.png',
        liveURL: 'http://livelylist.herokuapp.com',
        tag:'Fullstack Academy',
        showHover: false
      },
      {
        title: "TimelyComments",
        pitch: "Spoil Free Video Comments",
        description: "Winner of Monthly Web-Tech Blitz Hackathon NYC with two other developers. Comments for videos are displayed based on time when they were originally made and in real-time as video plays.",
        blogURL: 'http://hackerisms.com/2014/06/24/late-reblog-hackathon-win/',
        imageURL: 'https://s3.amazonaws.com/portfolio_tlerias/timely_full.png',
        liveURL: 'http://protected-woodland-6743.herokuapp.com/',
        tag:'Hackathon',
        showHover: false
      },
      {
        title: "InvestorSearch",
        pitch: "Collaborated with DreamIt Ventures to help startups find investors",
        description: "Integrated with the AngelList API to gather information about investors. Users can search specific markets and companies to generate a list of investors ranked by relevance to their search. Users can also save investors to an exportable list.",
        blogURL: 'http://hackerisms.com/2014/07/04/fullstack-final-project-investorsearch/',
        imageURL: 'https://s3.amazonaws.com/portfolio_tlerias/investor_search_main.png',
        liveURL: 'http://investorfinder.herokuapp.com',
        tag:'Fullstack Academy',
        showHover: false
      }
    ];

    $scope.hover = function(item) {
      return item.showHover = !item.showHover;
    };

    $rootScope.scrollToAnchor = function(aid){
      var aTag = $("a[id='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},1000);
    }
  });
