'use strict';

angular.module('taraleriasCom40App')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    $scope.projects = [
      {
        title: "LivelyList",
        pitch: "User-friendly Bucket List Manager",
        description: "I created a site where a user can log in and make a list of all the things they want to do within their lifetime. They can add a title, photo, description and some tags. When they complete the item, they can drag it to a “Done” bucket, similar to Trello’s drag and drop feature.",
        imageURL: 'https://s3.amazonaws.com/portfolio_tlerias/lively_home.png',
        liveURL: 'http://livelylist.herokuapp.com',
        tag:'Fullstack Academy'
      },
      {
        title: "TimelyComments",
        pitch: "Spoil Free Video Comments",
        description: "Winner of Monthly Web-Tech Blitz Hackathon NYC with two other developers. Comments for videos are displayed based on time when they were originally made and in real-time as video plays.",
        imageURL: 'https://s3.amazonaws.com/portfolio_tlerias/timely_full.png',
        liveURL: 'http://protected-woodland-6743.herokuapp.com/',
        tag:'Hackathon'
      },
      {
        title: "InvestorSearch",
        pitch: "Collaborated with DreamIt Ventures to help startups find investors who are likely to be interested in investing in their company.",
        description: "Integrated with the AngelList API to gather information about investors. Users can search specific markets and companies to generate a list of investors ranked by relevance to their search. Users can also save investors to an exportable list.",
        imageURL: 'https://s3.amazonaws.com/portfolio_tlerias/investor_search_main.png',
        liveURL: 'http://investorfinder.herokuapp.com',
        tag:'Fullstack Academy'
      }
    ];

    $rootScope.scrollToAnchor = function(aid){
      var aTag = $("a[id='"+ aid +"']");
      console.log(aTag)
      $('html,body').animate({scrollTop: aTag.offset().top},1000);
    }
  });
