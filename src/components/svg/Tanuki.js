import PropTypes from 'prop-types';
import React from 'react';

export const Tanuki = ({ fillColor }) => {
  return (
    <svg width="130px" height="130px" viewBox="0 0 290 300" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 300) scale(0.1, -0.1)" fill={fillColor} stroke="none">
        <path d="M792 2891 c-92 -32 -93 -38 -28 -124 31 -42 72 -89 92 -106 34 -30
        34 -31 20 -64 -7 -18 -28 -49 -45 -69 -17 -20 -31 -40 -31 -45 0 -5 39 -9 88
        -9 75 1 94 -3 137 -25 63 -33 155 -69 177 -69 9 0 28 14 42 30 51 61 48 162
        -7 274 -50 101 -90 134 -216 179 -133 48 -163 52 -229 28z"/>
        <path d="M2215 2711 c-14 -12 -202 -38 -380 -51 -252 -19 -354 -46 -385 -102
        -25 -46 -5 -79 63 -103 56 -19 58 -19 144 -1 230 48 349 67 478 76 162 11 235
        29 264 67 36 45 23 93 -30 112 -38 13 -141 15 -154 2z"/>
        <path d="M2040 2304 c-83 -18 -275 -72 -318 -90 -30 -12 -36 -11 -83 16 -27
        17 -56 30 -64 30 -24 0 -73 -71 -100 -144 -26 -70 -26 -72 -10 -141 55 -245
        152 -422 238 -437 24 -5 31 0 53 37 38 66 45 69 173 77 217 12 241 17 262 52
        10 17 19 38 19 47 0 8 25 44 56 80 178 204 211 341 102 422 -89 66 -188 82
        -328 51z m130 -127 c0 -51 -64 -185 -134 -280 -42 -57 -55 -67 -109 -87 -93
        -34 -125 -40 -137 -24 -15 17 -39 155 -40 225 0 35 5 61 13 68 26 21 153 63
        262 86 130 28 145 29 145 12z"/>
        <path d="M1005 2156 c-335 -140 -466 -192 -570 -227 -214 -71 -265 -79 -265
        -43 0 37 -51 -11 -69 -65 -17 -51 -14 -80 13 -126 36 -61 142 -125 206 -125
        33 0 361 182 538 298 23 15 21 9 -18 -63 -133 -245 -520 -840 -620 -953 -29
        -34 -35 -70 -19 -115 21 -61 58 -83 131 -79 33 1 69 7 81 13 26 14 111 92 308
        286 80 79 148 143 150 143 2 0 1 -42 -2 -92 -4 -51 -10 -240 -15 -420 -6 -297
        -6 -333 11 -393 22 -82 59 -125 107 -125 39 0 60 18 83 73 12 30 15 87 15 309
        0 158 9 403 20 582 l20 310 28 30 c43 45 110 149 118 182 4 16 22 43 41 60 18
        17 33 41 33 54 0 13 8 24 20 27 11 3 20 13 20 23 0 9 17 43 38 76 21 32 42 66
        47 73 16 27 -49 -26 -170 -139 -66 -61 -132 -121 -147 -132 l-28 -19 0 23 c1
        107 24 266 50 342 39 113 40 173 3 208 -44 40 -69 41 -158 4z m-102 -698 c-4
        -40 -12 -68 -22 -75 -9 -7 -36 -27 -60 -44 -39 -29 -42 -30 -28 -8 8 13 26 42
        39 64 44 77 73 125 75 125 2 0 0 -28 -4 -62z"/>
        <path d="M2269 1530 c-203 -16 -454 -64 -643 -124 l-104 -33 -49 23 c-57 27
        -101 30 -110 8 -9 -24 14 -286 37 -421 53 -306 144 -553 205 -553 7 0 35 11
        62 25 52 27 149 49 253 59 l65 5 45 -42 c25 -23 71 -74 103 -114 61 -77 75
        -85 146 -86 63 -1 142 43 185 102 83 113 239 605 280 885 15 100 15 110 0 142
        -48 102 -212 144 -475 124z m199 -116 c28 -8 29 -38 2 -200 -35 -213 -141
        -587 -182 -639 -19 -25 -26 -27 -70 -23 -49 5 -73 17 -50 25 43 16 -26 78 -99
        88 l-52 7 7 98 c3 54 8 104 11 112 17 39 157 107 256 123 52 8 89 40 89 76 0
        24 -7 32 -42 50 -39 20 -52 21 -165 15 l-123 -6 0 114 0 115 53 10 c160 34
        315 48 365 35z m-588 -186 l0 -113 -133 -26 c-72 -14 -133 -25 -135 -24 -1 2
        -13 42 -26 90 -16 60 -20 88 -12 91 80 30 275 94 289 94 15 0 17 -12 17 -112z
        m224 -216 c8 -14 -8 -30 -37 -37 -24 -6 -26 -5 -20 11 11 30 45 45 57 26z
        m-227 -81 c-3 -27 -11 -58 -18 -68 -14 -22 -164 -128 -181 -128 -10 0 -55 156
        -58 196 0 12 34 21 125 34 147 21 139 23 132 -34z m-22 -257 c-5 -28 -10 -32
        -58 -42 -28 -6 -60 -13 -69 -17 -11 -5 -22 2 -34 20 l-18 27 44 41 c24 23 64
        53 89 67 l46 25 3 -45 c2 -25 1 -59 -3 -76z"/>
      </g>
    </svg>
  );
};

Tanuki.propTypes = {
  fillColor: PropTypes.string.isRequired
};

export default Tanuki;