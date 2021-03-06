// Redux state transitions
export const CARDS_RECEIVED = 'CARDS_RECEIVED';
export const CARD_SELECTED = 'CARD_SELECTED';
export const EXECUTE_MOVE = 'EXECUTE_MOVE';
export const PAWN_SELECTED = 'PAWN_SELECTED';
export const START_NEW_GAME = 'START_NEW_GAME';
export const RESET_ALL_REDUCERS = 'RESET_ALL_REDUCERS';

export const players = {
  red: 'RED',
  blue: 'BLUE',
};

export const alignmentTypes = {
  left: 'LEFT',
  right: 'RIGHT',
  center: 'CENTER',
};

export const colors = {
  blue: 'rgb(90, 120, 140)',
  red: 'rgb(145, 85, 75)',
  green: 'rgb(130, 140, 120)',
  opaqueBlue: 'rgba(90, 120, 140, 0.4)',
  opaqueRed: 'rgba(145, 85, 75, 0.3)',
  opaqueGreen: 'rgba(130, 140, 120, 0.5)',
  characterColor: 'rgba(100, 100, 100, 0.6)',
  opaqueWhite: 'rgba(255, 255, 255, 0.4)',
};
