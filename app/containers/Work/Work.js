import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Divider, GridCard, Hero } from 'components';
import './Work.scss';

const settings = {
  "data": [{
      "header": "Ford F-150 360°",
      "description": "360° In-Car Experience ",
      "imageClass": "ford",
      "link": "work/ford"
    },{
      "header": "Brazil Tourism",
      "description": "Virtual 360° Video Tour",
      "imageClass": "brazil",
      "link": "work/brazil"
    },{
      "header": "Renault Takeover",
      "description": "Renault cross-screen video takeover",
      "imageClass": "renault",
      "link": "work/renault"
    }, {
      "header": "AIB - Brand Takeover",
      "description": "Unique interactive Homepage wallpaper takeover.",
      "imageClass": "aib",
      "link": "work/aib"
    }, {
      "header": "Toyota",
      "description": "Vibrant 360° banner to support Toyota Yaris re-launch.",
      "imageClass": "toyota",
      "link": "work/toyota"
    }, {
      "header": "Audi",
      "description": "Pure Imagination - Responsive Header",
      "imageClass": "audi",
      "link": "work/audi"
    }, {
      "header": "EBS - Interactive Wallpaper",
      "description": "Premium Video takeover from a static wallpaper.",
      "imageClass": "ebs",
      "link": "work/ebs"
    }, {
      "header": "Marvel - VR Virtual Reality takeover",
      "description": "Bleeding-edge mobile experience.",
      "imageClass": "marvel",
      "link": "work/marvel"
    }
  ],
  "quotes": [{
    "text": "Empathy is about standing in someone else's shoes, feeling with his or her heart, seeing with his or her eyes. Not only is empathy hard to outsource and automate, but it makes the world a better place.",
    "author": "Daniel H. Pink"
  }, {
    "text": "When people talk, listen completely. Most people never listen.",
    "author": "Ernest Hemingway"
  }, {
    "text": "Sometimes all a person wants is an empathetic ear; all he or she needs is to talk it out. Just offering a listening ear and an understanding heart for his or her suffering can be a big comfort.",
    "author": "Roy T. Bennett"
  }, {
    "text": "I believe empathy is the most essential quality of civilization.",
    "author": "Roger Ebert"
  }]
}

export default class Work extends Component {
  selectRandomQuote() {
    const quotes = settings.quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  render() {
    const cards = [];
    const projectsGridCopy = settings.data;
    for (let i = 0; i < projectsGridCopy.length; i++) {
      cards.push(<GridCard key={i} order={i} {...projectsGridCopy[i]} />);
    }
    const quote = this.selectRandomQuote();
    // {cards}
    return (
      <div className={'projects'}>
        <Helmet title="Our Work" />
        <Hero smallHeader={'"' + quote.text + '"'} smallText={quote.author} background="narrow" />
        <div className={'section'}>
          <ul className={'grid' + ' ' + 'cards'}>
            {cards}
          </ul>
        </div>
        <Divider colour="" />
      </div>
    );
  }
}
