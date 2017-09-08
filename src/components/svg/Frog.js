import PropTypes from 'prop-types';
import React from 'react';

export const Frog = ({ fillColor }) => {
  return (
    <svg width="210px" height="130px" viewBox="0 0 430 248" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 248) scale(0.1, -0.1)" fill={fillColor} stroke="none">
        <path d="M1051 2396 c-11 -13 -8 -19 13 -41 21 -21 29 -42 37 -104 6 -42 9
        -96 7 -121 l-3 -44 -224 -48 c-124 -27 -227 -50 -230 -53 -10 -10 44 -56 80
        -66 28 -9 65 -7 165 6 71 9 150 19 177 22 l47 6 0 -81 0 -81 -42 -11 c-268
        -69 -343 -95 -343 -119 0 -34 123 -36 300 -5 44 8 81 14 83 14 6 0 1 -189 -6
        -194 -15 -9 -534 -103 -754 -137 -147 -22 -218 -37 -218 -45 0 -13 70 -73 107
        -93 35 -18 83 -13 194 19 191 56 780 164 1142 210 180 23 417 26 563 8 83 -10
        97 -9 110 4 14 14 14 19 1 44 -21 39 -63 78 -117 106 -83 43 -176 33 -868 -89
        l-33 -6 3 98 3 98 145 28 c166 31 227 46 235 58 11 18 -8 40 -43 52 -35 12
        -233 7 -311 -7 l-34 -7 6 78 c3 42 7 78 9 80 2 2 71 17 153 34 83 16 181 40
        218 51 76 23 82 38 34 73 -40 31 -129 33 -269 8 -64 -12 -122 -21 -129 -21
        -14 0 -7 99 12 172 16 59 6 73 -65 93 -89 25 -141 29 -155 11z"/>
        <path d="M3260 1975 c-10 -12 -8 -22 13 -53 40 -59 48 -105 54 -303 l6 -187
        -54 -15 c-30 -9 -89 -26 -131 -38 -45 -12 -78 -28 -78 -35 0 -7 20 -20 45 -30
        39 -15 55 -15 115 -5 110 18 101 30 98 -126 l-3 -137 -50 -12 c-303 -72 -401
        -97 -409 -104 -5 -5 6 -18 25 -30 30 -19 44 -21 119 -16 47 3 134 15 194 26
        59 12 110 19 112 17 2 -2 7 -64 10 -138 l7 -134 -139 -34 c-236 -58 -233 -56
        -164 -91 46 -24 116 -25 234 -6 l79 13 -7 -90 c-3 -50 -6 -107 -6 -127 l0 -37
        -302 -42 c-167 -23 -323 -44 -348 -47 -58 -7 -110 -23 -110 -34 0 -15 37 -45
        89 -72 l49 -25 194 38 c360 72 650 100 888 88 267 -13 250 -15 250 24 0 38
        -15 54 -80 88 -72 37 -251 37 -483 2 l-38 -6 3 129 3 128 97 18 c114 20 158
        39 194 81 22 26 23 32 11 44 -23 23 -85 26 -185 9 -50 -9 -96 -16 -101 -16 -4
        0 -4 19 1 43 5 23 11 63 15 88 5 44 4 47 -40 86 l-46 40 162 28 c280 48 347
        70 347 112 0 7 -15 22 -32 33 -40 25 -96 21 -295 -20 l-133 -27 0 126 c0 69 4
        131 8 137 4 7 55 24 115 38 59 14 125 35 147 46 48 25 54 55 13 71 -33 13
        -145 5 -221 -15 l-54 -15 6 57 c3 31 8 100 11 152 4 52 11 122 17 155 l10 60
        -42 37 c-39 35 -118 68 -161 68 -9 0 -22 -7 -29 -15z"/>
        <path d="M2262 1827 c-11 -13 -8 -21 17 -50 47 -53 53 -80 59 -258 4 -157 4
        -167 -14 -172 -58 -18 -243 -47 -295 -47 -68 0 -71 -5 -35 -71 13 -24 45 -110
        70 -190 44 -138 80 -214 101 -214 6 0 14 14 19 31 9 31 12 32 88 41 l78 9 0
        -152 0 -152 -178 -66 c-183 -68 -213 -74 -257 -54 -22 10 -29 9 -46 -9 -29
        -29 -18 -70 32 -127 29 -32 48 -46 66 -46 30 0 227 101 488 250 98 56 181 98
        182 94 2 -5 26 -44 53 -87 56 -88 74 -94 103 -37 26 51 19 127 -18 180 -41 60
        -101 100 -147 100 -47 0 -57 -19 -36 -64 l16 -32 -79 -31 -79 -31 0 98 c0 53
        3 117 6 141 l6 44 125 24 c149 28 189 54 147 95 -14 15 -11 24 41 101 31 47
        74 99 96 117 21 17 39 35 39 40 0 16 -72 87 -119 117 -56 37 -92 39 -134 9
        -25 -18 -128 -46 -174 -48 -14 0 -11 114 8 276 8 65 8 97 1 111 -25 46 -204
        92 -230 60z m413 -547 c4 -18 -1 -58 -14 -102 -35 -129 -31 -124 -112 -142
        -39 -9 -76 -16 -82 -16 -10 0 -2 258 9 269 7 7 88 18 146 20 44 1 47 -1 53
        -29z m-331 -146 c4 -75 6 -138 3 -140 -5 -5 -159 -35 -162 -32 -4 4 -44 272
        -41 275 2 3 157 31 177 32 14 1 17 -19 23 -135z"/>
        <path d="M1405 1285 c-42 -24 -162 -56 -376 -99 -113 -23 -129 -24 -165 -11
        -53 19 -93 19 -101 -1 -3 -9 2 -49 13 -88 29 -109 26 -383 -6 -634 -24 -190
        -24 -194 -6 -245 22 -63 44 -97 61 -97 27 0 62 163 70 332 9 171 -12 152 177
        166 270 20 371 57 294 107 -41 27 -87 27 -219 1 -71 -14 -153 -29 -183 -32
        l-54 -7 0 85 0 85 138 7 c75 4 160 11 189 17 52 10 113 44 120 66 6 17 -50 43
        -94 43 -32 0 -235 -34 -330 -55 -22 -5 -23 -3 -23 79 l0 84 58 7 c31 3 131 22
        220 41 176 37 217 40 256 23 37 -17 56 -75 77 -239 16 -127 17 -555 1 -594
        l-12 -29 -113 8 -112 7 20 -22 c11 -12 45 -35 76 -51 65 -32 109 -79 109 -115
        0 -68 52 -85 100 -34 39 42 68 105 85 186 19 91 19 362 0 559 -21 210 -20 266
        5 298 11 14 18 31 15 39 -6 16 -110 87 -172 117 -53 26 -68 26 -118 -4z"/>
      </g>
    </svg>
  );
};

Frog.propTypes = {
  fillColor: PropTypes.string.isRequired
};

export default Frog;
