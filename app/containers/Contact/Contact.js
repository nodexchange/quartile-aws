/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BackgroundSky, SectionItem, ScrollToTopOnMount } from 'components';
import './Contact.scss';

const settings = {
  smallHeader: 'More than just an',
  header: 'Ad Agency',
  description: 'Use our team as an extension of yours and leverage our technical and creative expertise. Let us show you how data, emotions and metrics can transform your business. If you have any questions or simply want to challenge us, do not hesitate, message us now.',
  buttonText: 'Get in touch',
  link: '',
  sectionClass: 'contact',
  backgroundClass: 'orange',
  videoLink: ''
};

// eslint-disable-next-line react/prefer-stateless-function
export default class Contact extends Component {
  render() {
    return (
      <div className={'contact'}>
        <Helmet>
          <title>Contact Us</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <BackgroundSky />
        <ScrollToTopOnMount />
        <SectionItem inView key={0} offset={0} order={0} {...settings} link="contact" />
      </div>
    );
  }
}
