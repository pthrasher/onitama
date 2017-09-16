import PropTypes from 'prop-types';
import React from 'react';

export const Horse = ({ fillColor }) => (
  <svg width="110px" height="130px" viewBox="0 0 180 220" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0, 220) scale(0.1, -0.1)" fill={fillColor} stroke="none">
      <path d="M1040 2156 c-59 -32 -270 -109 -334 -122 l-69 -15 -74 37 c-62 32
        -83 38 -140 38 -62 1 -68 -1 -82 -25 -13 -24 -12 -28 10 -58 32 -43 37 -116
        38 -526 2 -354 8 -418 51 -544 17 -47 39 -117 51 -155 11 -38 35 -103 54 -143
        40 -87 56 -92 109 -33 27 30 36 49 36 76 0 46 -12 69 -67 126 l-46 46 69 20
        c132 38 114 50 158 -106 21 -75 43 -143 48 -149 27 -33 102 1 128 58 23 53 12
        100 -46 186 -48 72 -54 66 71 82 79 10 85 8 85 -21 0 -38 61 -283 77 -307 21
        -32 68 -22 110 24 26 27 33 44 33 74 0 51 -48 143 -107 203 l-45 46 86 7 c120
        10 120 10 113 -130 -6 -146 -55 -324 -110 -407 -28 -40 -54 -44 -185 -28 -52
        6 -96 9 -99 7 -13 -14 13 -45 62 -75 33 -20 72 -55 95 -86 28 -39 47 -55 71
        -60 56 -11 87 -6 116 17 15 13 46 34 69 46 25 14 55 44 77 78 72 108 167 397
        167 506 0 31 8 66 21 93 19 38 20 46 9 74 -19 45 -66 76 -166 112 -88 30 -91
        31 -224 24 -74 -3 -150 -9 -167 -12 l-33 -6 0 65 0 65 38 12 c110 36 130 50
        147 101 9 27 15 58 13 70 -5 33 -49 61 -104 66 -90 8 -94 10 -94 47 0 34 1 35
        54 46 62 13 81 30 91 85 4 22 9 53 12 68 9 46 -19 67 -89 67 l-59 0 3 32 c3
        28 9 34 43 46 87 30 102 40 129 87 36 66 34 87 -16 129 -62 53 -136 70 -188
        42z m-320 -309 c14 -10 44 -17 72 -17 46 0 48 -1 48 -29 0 -16 2 -35 5 -43 3
        -8 -23 -27 -78 -55 -45 -22 -90 -44 -99 -47 -38 -12 -10 -78 52 -121 30 -21
        52 -28 84 -28 l43 1 -5 -46 c-2 -26 -7 -50 -11 -53 -3 -4 -39 -19 -79 -33 -39
        -14 -83 -33 -97 -42 l-25 -16 0 213 c1 118 4 251 7 297 l5 83 27 -24 c14 -13
        37 -31 51 -40z m21 -653 c16 -8 42 -14 59 -14 29 0 30 -2 30 -45 0 -41 -2 -45
        -27 -51 -16 -3 -59 -14 -98 -24 -101 -27 -101 -28 -79 187 l5 51 42 -45 c22
        -24 53 -51 68 -59z"
      />
      <path d="M137 803 c-3 -54 -13 -130 -22 -169 -10 -41 -15 -83 -11 -98 8 -33
        82 -115 114 -127 32 -12 72 10 107 61 27 38 29 50 33 154 7 193 -28 248 -174
        271 l-41 6 -6 -98z"
      />
    </g>
  </svg>
);

Horse.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

export default Horse;
