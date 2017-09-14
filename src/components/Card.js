import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';

import { alignmentTypes, colors, players } from 'Architecture/constants';
import AttackPatternGrid from './AttackPatternGrid';
import { getCharacterComponent, FirstPlayerIcon, Logo, Swish } from './svg';
import cardBackground from 'Assets/mural.jpg';
import cardTexture from 'Assets/card-texture.png';

const styles = {
  cardContainer: {
    width: 400,
    height: 260,
    borderRadius: 10,
    transition: '2s',
    position: 'absolute',
    transformStyle: 'preserve-3d',

    transform: props => {
      console.log(props);
      if (props.cardInfo.location.indexOf('deck') > -1) {
        const deckPosition = parseInt(props.cardInfo.location.split('-')[1]);
        return `translateY(1200px) translateX(100px) rotateY(180deg) translateZ(${deckPosition * -2}px)`;
      }
      if (props.cardInfo.location === 'blue-1') {
        return `translateY(1300px) translateX(600px) rotateY(0deg)`;
      }
      if (props.cardInfo.location === 'blue-2') {
        return `translateY(1300px) translateX(1100px) rotateY(0deg)`;
      }
      if (props.cardInfo.location === 'red-1') {
        return `translateY(40px) translateX(600px) rotateZ(180deg)`;
      }
      if (props.cardInfo.location === 'red-2') {
        return `translateY(40px) translateX(1100px) rotateZ(180deg)`;
      }
      return '';
    }
  },
  card: {
    width: 400,
    height: 260,
    backgroundImage: `url("${cardTexture}")`,
    borderRadius: 10,
    border: { style: 'solid', width: 1, color: '#444' },
    boxSizing: 'border-box',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(224, 221, 191, 0.8)',
    borderRadius: 10,
    padding: 10,
    boxSizing: 'border-box',
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  leftContent: {
    width: '55%',
    height: '100%',
    position: 'absolute',
    left: 0
  },
  character: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: 5,
  },
  cardName: {
    width: '100%',
    fontSize: 36,
    fontFamily: 'IM Fell English SC',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 120,
    color: 'rgba(60, 60, 60, 1)'
  },
  rightContent: {
    width: 160,
    height: '100%',
    position: 'absolute',
    right: 0
  },
  bottomContent: {
    height: 70,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    padding: [0, 10],
    boxSizing: 'border-box',
    backgroundColor: props => {
      switch (props.cardInfo.alignment) {
        case alignmentTypes.left:
          return colors.opaqueBlue;
        case alignmentTypes.center:
          return colors.opaqueGreen;
        case alignmentTypes.right:
          return colors.opaqueRed;
        default:
          return '';
      }
    }
  },
  verticalAligner: {
    height: '100%',
    width: 1,
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  wisdom: {
    width: '85%',
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: 12,
    fontFamily: 'Caudex',
    color: '#444',
    textAlign: 'center',
  },
  firstPlayerIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 40,
    height: 30,
    position: 'relative',
    right: -10,
    border: { style: 'solid', width: 2, color: colors.opaqueWhite },
    backgroundColor: props => {
      if (props.cardInfo.firstPlayer === players.red) { return colors.red; }
      if (props.cardInfo.firstPlayer === players.blue) { return colors.blue; }
    }
  },

  cardBack: {
    width: 400,
    height: 260,
    backgroundImage: `url("${cardBackground}")`,
    backgroundSize: [400, 260],
    borderRadius: 10,
    border: { style: 'solid', width: 1, color: '#444' },
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'rotateY(180deg)',
    boxSizing: 'border-box',
    backfaceVisibility: 'hidden',
  },
  cardBackTexture: {
    width: 400,
    height: 260,
    backgroundImage: `url("${cardTexture}")`,
    backgroundSize: [400, 260],
    borderRadius: 10,
    position: 'absolute',
    opacity: 0.6
  },
  cardBackTone: {
    width: 400,
    height: 260,
    backgroundColor: 'orange',
    borderRadius: 10,
    position: 'absolute',
    opacity: 0.6
  },
  cardBackLogoContainer: {
    width: 400,
    height: 260,
    borderRadius: 10,
    position: 'absolute',
  },
  cardBackLogoBackground: {
    position: 'absolute',
    top: 80,
    left: 25
  },
  cardBackLogoForeground: {
    position: 'absolute',
    top: 75,
    left: 30
  }
};



export const Card = ({ cardInfo, classes }) => {
  const { alignment, attackPattern, firstPlayer, name, text } = cardInfo;
  const Character = getCharacterComponent(name);
  return (
    <div className={classes.cardContainer}>
      <div className={classes.card}>
        <div className={classes.cardBackground}>
          <div className={classes.content}>
            <div className={classes.leftContent}>
              <Swish />
              <div className={classes.character}><Character fillColor={colors.characterColor} /></div>
              <div className={classes.cardName}>{name.toUpperCase()}</div>
            </div>
            <div className={classes.rightContent}>
              <AttackPatternGrid attackPattern={attackPattern} alignment={alignment} />
            </div>
            <div className={classes.bottomContent}>
              <div className={classes.verticalAligner}></div>
              <div className={classes.wisdom}>{text.split('\n').map((textPart, index) => <div key={index}>{textPart}</div>)}</div>
              <div className={classes.firstPlayerIcon}>
                <FirstPlayerIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.cardBack}>
        <div className={classes.cardBackTexture}></div>
        <div className={classes.cardBackTone}></div>
        <div className={classes.cardBackLogoContainer}>
          <div className={classes.cardBackLogoBackground}><Logo width={100} fillColor={'rgba(0, 0, 0, 0.3)'} /></div>
          <div className={classes.cardBackLogoForeground}><Logo width={100} fillColor={'white'} /></div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Card);
