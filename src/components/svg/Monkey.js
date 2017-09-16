import PropTypes from 'prop-types';
import React from 'react';

export const Monkey = ({ fillColor }) => (
  <svg width="130px" height="130px" viewBox="0 0 245 207" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0, 207) scale(0.1, -0.1)" fill={fillColor} stroke="none">
      <path d="M1144 1985 c-4 -9 -1 -29 6 -45 37 -90 -122 -425 -328 -689 l-66 -85
        -19 95 c-10 51 -29 125 -42 162 l-24 68 76 72 c100 95 173 183 173 209 0 44
        -133 149 -157 124 -4 -4 -6 -27 -4 -52 2 -52 -18 -93 -97 -191 l-50 -63 -48
        57 c-63 74 -157 143 -195 143 -40 0 -37 -19 14 -82 124 -153 147 -183 147
        -198 0 -17 -78 -91 -232 -218 -49 -40 -88 -78 -88 -83 0 -32 205 80 327 178
        l43 34 11 -28 c6 -15 18 -56 26 -90 l16 -62 -43 -68 c-119 -188 -256 -341
        -437 -489 -165 -133 -68 -117 143 25 102 67 210 164 294 262 l58 67 5 -52 c7
        -73 -11 -361 -28 -451 -8 -42 -26 -98 -41 -125 -36 -66 -64 -75 -179 -59 -63
        9 -89 9 -97 1 -16 -16 4 -36 82 -82 75 -44 87 -55 115 -114 30 -62 53 -59 111
        11 61 76 109 177 131 283 15 71 18 134 18 377 l0 291 35 19 c19 10 70 51 112
        92 l78 74 0 -179 c-1 -217 -13 -460 -36 -713 -19 -205 -14 -263 29 -333 17
        -28 20 -30 29 -14 35 63 60 414 62 886 1 295 -1 340 -16 378 l-17 42 62 88
        c133 185 227 359 227 420 0 25 -8 41 -30 62 -57 53 -144 78 -156 45z"
      />
      <path d="M1767 1877 c-16 -12 -99 -45 -185 -72 -171 -55 -185 -66 -117 -99
        l39 -20 103 28 c57 14 108 24 113 21 15 -9 12 -51 -11 -146 l-21 -86 -112 -26
        c-61 -15 -167 -38 -236 -52 -164 -35 -156 -31 -136 -54 34 -37 93 -43 217 -20
        361 64 665 127 722 150 33 14 33 20 6 45 -18 17 -36 19 -138 18 -73 0 -136 -7
        -171 -17 -30 -8 -57 -14 -59 -12 -9 10 90 166 137 213 28 30 52 58 52 63 0 10
        -55 51 -97 73 -43 21 -72 19 -106 -7z"
      />
      <path d="M1353 1274 c-3 -9 -1 -25 5 -35 7 -10 12 -28 12 -39 0 -39 -59 -137
        -125 -210 -77 -83 -76 -106 2 -67 27 14 73 44 101 66 46 36 62 43 132 53 44 6
        82 9 83 7 6 -6 -10 -180 -17 -186 -3 -3 -96 -23 -206 -44 -111 -21 -207 -40
        -213 -42 -21 -7 86 -67 121 -67 18 0 83 11 144 25 61 14 116 25 124 25 16 0 3
        -50 -36 -136 -55 -121 -97 -172 -297 -359 -35 -32 -63 -62 -63 -68 0 -18 64 3
        138 45 143 82 283 238 336 376 12 31 25 56 29 55 4 -2 61 -83 127 -180 151
        -227 240 -338 281 -352 51 -18 259 -8 332 15 39 12 6 39 -143 119 -200 106
        -273 158 -391 275 -93 92 -195 218 -185 228 10 10 235 31 396 38 168 7 200 13
        200 40 0 34 -105 104 -156 104 -22 0 -265 -46 -402 -76 l-23 -5 7 93 c4 51 8
        94 9 96 1 1 55 12 121 23 133 24 194 49 194 79 0 26 -48 50 -100 50 -22 0
        -126 -22 -230 -49 -107 -28 -187 -44 -184 -38 4 7 16 24 26 40 11 15 18 37 16
        49 -7 49 -149 93 -165 52z"
      />
    </g>
  </svg>
);

Monkey.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

export default Monkey;
