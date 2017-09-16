import PropTypes from 'prop-types';
import React from 'react';

export const Boar = ({ fillColor }) => (
  <svg width="210px" height="130px" viewBox="0 0 440 250" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0, 250) scale(0.1, -0.1)" fill={fillColor} stroke="none">
      <path d="M1830 2345 c-70 -39 -291 -90 -512 -120 -29 -4 -48 -11 -48 -19 0
        -15 34 -47 78 -74 39 -23 43 -23 252 43 80 25 167 49 193 52 l49 6 -25 -49
        c-14 -27 -57 -98 -96 -157 -55 -83 -75 -106 -85 -98 -16 13 -131 41 -174 41
        -64 0 -53 -34 46 -147 83 -96 148 -127 172 -84 5 11 10 46 10 78 l0 58 128
        126 c149 147 209 199 232 199 9 0 25 9 35 20 18 20 18 21 -6 46 -33 36 -137
        95 -174 100 -19 2 -47 -6 -75 -21z"
      />
      <path d="M975 2315 c-27 -13 -108 -35 -180 -49 -308 -60 -404 -70 -482 -50
        -33 9 -46 9 -59 -1 -16 -12 -16 -15 4 -48 29 -51 53 -132 102 -351 50 -227 73
        -296 101 -296 11 0 21 9 25 24 5 21 15 25 82 36 42 6 87 14 100 17 23 5 23 5
        20 -92 l-3 -98 -105 -23 c-156 -35 -190 -45 -190 -59 0 -7 21 -23 46 -35 43
        -21 51 -22 127 -11 45 6 92 14 105 17 22 6 22 5 22 -100 0 -58 -3 -106 -6
        -106 -3 0 -93 -22 -199 -50 -184 -47 -196 -49 -238 -36 -84 25 -92 -7 -24
        -101 53 -75 66 -78 187 -37 128 43 564 210 683 262 49 21 87 42 85 47 -8 25
        -220 -5 -370 -51 -16 -5 -18 4 -18 95 l0 100 58 11 c95 19 171 42 182 55 27
        33 -80 68 -167 54 -26 -4 -54 -8 -60 -8 -10 -1 -13 23 -13 89 0 63 4 92 13 95
        6 3 48 9 92 13 63 7 83 6 94 -5 43 -44 69 23 151 389 14 63 31 111 51 141 26
        40 28 48 18 71 -13 27 -79 74 -141 101 -21 8 -39 15 -40 14 -2 0 -25 -11 -53
        -24z m25 -115 c31 -17 33 -69 10 -227 -12 -81 -25 -169 -27 -195 -3 -27 -6
        -48 -7 -48 0 0 -39 -7 -86 -15 -47 -8 -86 -15 -87 -15 -2 0 -3 44 -3 99 l0 99
        35 6 c54 11 105 35 105 51 0 29 -45 47 -96 39 l-47 -7 8 49 c14 89 12 96 -23
        120 l-32 22 67 11 c38 6 79 12 93 14 48 8 71 7 90 -3z m-322 -141 l-3 -102
        -64 -21 c-114 -38 -108 -79 12 -74 l67 4 0 -93 c0 -51 -1 -93 -2 -93 -2 0 -41
        -7 -88 -15 -47 -8 -90 -15 -96 -15 -6 0 -14 24 -18 53 -4 28 -23 132 -42 231
        -19 98 -34 180 -32 181 6 6 203 43 236 44 l33 1 -3 -101z"
      />
      <path d="M3188 2149 c-24 -13 -23 -30 3 -63 30 -38 37 -79 40 -239 3 -134 2
        -142 -16 -145 -11 -2 -68 -15 -127 -29 -123 -28 -135 -42 -61 -75 46 -20 56
        -21 171 -2 l42 7 0 -116 0 -115 -82 -12 c-205 -30 -378 -50 -439 -50 l-65 0
        -13 53 c-7 28 -27 85 -43 125 l-30 72 86 91 c87 91 186 214 186 231 0 43 -97
        138 -140 138 -35 0 -42 -8 -29 -32 6 -11 8 -35 5 -54 -7 -35 -81 -152 -138
        -218 l-33 -38 -95 94 c-133 132 -210 185 -210 144 0 -8 29 -54 65 -103 35 -48
        86 -121 111 -161 l47 -73 -34 -36 c-19 -19 -89 -82 -157 -140 -124 -106 -151
        -136 -132 -148 21 -13 195 85 327 184 39 29 43 30 51 14 21 -40 52 -156 44
        -167 -144 -190 -290 -349 -427 -463 -94 -79 -125 -109 -125 -124 0 -18 31 -8
        128 41 120 62 228 147 354 279 l95 100 6 -64 c14 -144 -23 -545 -56 -614 -15
        -33 -62 -38 -145 -17 -65 17 -112 21 -112 8 0 -10 53 -60 102 -96 49 -37 69
        -69 72 -119 3 -54 11 -67 43 -67 19 0 41 15 73 48 72 75 120 193 136 339 6 60
        7 61 47 80 76 34 218 122 302 188 l83 65 7 -105 c4 -59 2 -175 -4 -269 -11
        -158 -11 -168 8 -211 20 -46 45 -65 62 -48 5 5 15 32 22 59 l12 49 179 9 180
        8 19 -23 c32 -40 64 -112 71 -161 13 -90 53 -96 100 -15 42 71 48 125 55 452
        6 281 8 313 25 342 25 40 18 49 -83 115 -76 50 -113 58 -141 33 -9 -8 -43 -21
        -75 -30 -58 -14 -257 -47 -261 -42 -1 1 58 64 132 140 l134 138 107 14 c60 8
        200 17 313 21 113 4 211 11 218 17 35 28 -20 117 -82 133 -23 5 -366 -44 -431
        -63 -18 -5 -18 -4 -5 14 8 11 54 71 101 134 125 167 134 183 119 220 -19 45
        -98 111 -129 107 -24 -3 -26 -8 -31 -59 -6 -69 -57 -173 -142 -290 -111 -152
        -116 -157 -175 -165 l-53 -7 0 90 c0 154 -6 145 120 171 111 23 160 39 160 53
        0 34 -139 55 -233 36 l-39 -8 6 98 c4 54 12 128 18 166 8 50 8 73 0 93 -20 43
        -155 87 -194 63z m-426 -935 c42 -22 122 -15 378 30 107 19 196 34 197 32 2
        -2 -55 -63 -127 -137 -71 -74 -130 -137 -130 -140 0 -11 -214 -201 -295 -262
        -44 -33 -85 -64 -90 -68 -8 -6 -10 56 -7 201 4 190 -4 310 -25 400 -6 25 -6
        24 30 -7 21 -18 52 -40 69 -49z m887 -248 c28 -33 39 -446 15 -543 -8 -30 -35
        -30 -72 2 -60 51 -99 55 -241 25 -52 -11 -107 -20 -124 -20 -29 0 -29 1 -23
        38 3 20 6 73 6 118 l0 80 123 11 c184 15 270 62 182 99 -43 18 -91 18 -164 0
        -31 -8 -75 -16 -98 -19 l-43 -5 0 98 0 99 43 6 c192 27 378 32 396 11z"
      />
      <path d="M2048 1765 c-57 -32 -384 -94 -733 -140 -255 -33 -255 -33 -249 -49
        9 -23 91 -76 118 -76 14 0 90 14 168 30 77 17 146 30 153 30 23 0 54 -76 64
        -160 13 -103 14 -620 1 -675 -16 -70 -38 -74 -250 -47 -125 16 -117 -5 30 -83
        62 -33 122 -72 132 -86 11 -14 25 -50 31 -79 7 -29 20 -58 30 -64 45 -29 126
        70 152 187 14 62 15 135 12 524 -3 248 -8 457 -12 463 -4 6 -21 20 -39 31 -17
        10 -28 19 -25 19 3 0 84 16 179 35 285 57 297 53 226 -88 -25 -50 -46 -95 -46
        -99 0 -20 44 -3 122 47 52 32 112 61 150 72 64 17 88 29 88 44 0 19 -67 82
        -137 129 -80 54 -116 61 -165 35z"
      />
    </g>
  </svg>
);

Boar.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

export default Boar;
