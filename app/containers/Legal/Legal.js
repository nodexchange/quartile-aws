import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { ScrollToTopOnMount, SectionItem } from 'components';
import data from './legal-data.json';
import './Legal.scss';

export default class Legal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let topStyle = { top: 0 + '%' };
    return (
      <div className={'containerLegal'}>
        <Helmet title="Legal & Quartile" />
        <div id={'LegalInner'}>
          <div className={'smallBox'} style={topStyle}>
            <span className={'header inView'}>{data['Legal'].header}</span>
            <div className={'description inView'}>
              {data['Legal'].description.split('\n').map(i =>
                <div className={'descText'} key={i}>{i}</div>
              )}
            </div>
          </div>
        </div>
        <ScrollToTopOnMount />
      </div>
    );
  }
}
