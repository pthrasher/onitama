import PropTypes from 'prop-types';
import React from 'react';

export const Rabbit = ({ fillColor }) => (
  <svg width="130px" height="130px" viewBox="0 0 229 222" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0, 222) scale(0.1, -0.1)" fill={fillColor} stroke="none">
      <path d="M917 2133 c-12 -11 -8 -40 8 -53 24 -20 18 -53 -23 -133 -52 -99
        -112 -177 -259 -330 -154 -160 -163 -192 -36 -122 87 48 165 106 245 183 l68
        65 92 8 c51 4 126 15 166 23 89 19 122 20 122 4 0 -10 -153 -303 -165 -316
        -12 -14 -364 -65 -480 -70 -164 -8 -172 -15 -107 -86 27 -29 51 -73 77 -142
        72 -189 96 -241 120 -264 24 -22 45 -20 45 4 0 9 26 18 81 26 45 6 83 9 86 7
        6 -7 -48 -130 -92 -208 -123 -217 -294 -385 -543 -537 -120 -72 -151 -97 -138
        -109 9 -10 109 23 206 68 188 88 403 262 522 424 55 74 153 257 189 350 l16
        41 189 22 c104 12 205 22 224 22 59 0 80 10 80 36 0 16 -8 28 -25 36 -14 6
        -25 14 -25 18 0 8 105 163 145 213 17 20 47 49 68 62 20 14 37 33 37 41 0 37
        -138 134 -190 134 -12 0 -35 -7 -52 -16 -27 -14 -253 -53 -313 -54 -14 0 13
        33 95 115 85 86 131 124 177 147 35 17 68 36 74 44 16 20 -4 47 -65 88 -93 62
        -136 70 -191 36 -51 -32 -325 -87 -325 -66 0 4 25 36 54 73 30 36 60 79 65 95
        9 26 7 33 -17 57 -45 45 -182 88 -205 64z m625 -732 c6 -6 -36 -182 -64 -266
        l-13 -39 -154 -23 c-85 -12 -156 -21 -159 -19 -2 2 8 40 21 83 47 148 46 175
        -13 210 -17 9 -30 20 -30 24 0 5 140 25 295 42 36 4 107 -3 117 -12z m-489
        -93 c-6 -62 -37 -222 -51 -259 -9 -23 -19 -27 -111 -42 -124 -21 -121 -21
        -121 1 0 10 -18 83 -39 163 -22 79 -39 144 -38 144 6 3 306 42 333 44 l31 1
        -4 -52z"
      />
      <path d="M1173 904 c-3 -9 1 -31 10 -48 13 -25 17 -75 20 -266 4 -260 11 -300
        70 -386 71 -105 189 -137 497 -137 241 0 313 12 438 73 l82 41 0 122 c0 141
        -33 384 -54 405 -22 22 -33 -8 -61 -175 -45 -261 -69 -284 -333 -314 -114 -13
        -293 -5 -376 16 -74 19 -111 46 -138 98 -31 60 -38 281 -13 406 10 48 15 99
        12 113 -12 48 -139 91 -154 52z"
      />
      <path d="M1490 831 c0 -35 38 -91 117 -169 117 -118 158 -148 178 -132 21 17
        37 83 29 117 -14 56 -82 131 -154 168 -42 22 -170 34 -170 16z"
      />
    </g>
  </svg>
);

Rabbit.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

export default Rabbit;
