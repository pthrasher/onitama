import PropTypes from 'prop-types';
import React from 'react';

export const Mouse = ({ fillColor }) => {
  return (
    <svg width="210px" height="130px" viewBox="0 0 420 240" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 240) scale(0.1, -0.1)" fill={fillColor} stroke="none">
        <path d="M1434 2306 c-4 -16 5 -42 28 -82 l33 -59 3 -202 c2 -112 2 -203 0
        -203 -2 0 -46 -10 -98 -21 -52 -12 -149 -24 -214 -28 -83 -4 -121 -10 -124
        -19 -2 -7 12 -28 31 -47 43 -43 55 -44 253 -10 81 14 149 25 151 25 2 0 3 -56
        3 -124 l0 -123 -104 -17 c-58 -9 -145 -16 -194 -16 -113 0 -127 -11 -91 -73
        23 -41 24 -47 23 -262 0 -180 -4 -243 -22 -348 -31 -177 -29 -216 14 -335 31
        -85 52 -39 84 193 18 124 24 225 27 446 l5 286 118 21 c65 12 123 22 130 22 7
        0 10 -27 8 -86 l-3 -86 -92 -29 c-51 -17 -93 -34 -93 -39 0 -5 19 -19 41 -31
        41 -20 54 -21 123 -3 l26 6 0 -94 0 -93 -80 -29 c-45 -16 -91 -37 -103 -47
        -22 -19 -22 -19 -3 -34 22 -17 81 -19 141 -5 22 5 40 8 42 7 1 -1 6 -87 12
        -191 10 -192 20 -232 47 -204 20 20 32 97 40 265 6 128 9 153 23 157 9 3 36
        10 61 16 106 27 180 52 180 61 0 5 -15 19 -32 30 -29 18 -45 20 -125 16 l-93
        -4 0 87 0 86 81 24 c44 12 90 31 102 40 l21 17 -28 18 c-29 19 -92 24 -138 12
        l-28 -7 0 84 0 83 136 19 c96 13 141 15 152 8 25 -16 49 -97 62 -214 14 -130
        26 -582 16 -634 l-7 -39 -57 7 c-31 4 -74 9 -94 12 -57 9 -49 -15 30 -99 54
        -57 74 -87 96 -145 15 -39 34 -72 41 -72 15 0 64 59 88 105 51 101 58 298 27
        731 -12 154 -18 290 -15 304 3 14 13 39 22 57 15 27 15 34 2 49 -19 23 -102
        61 -165 75 -45 10 -55 9 -92 -10 -35 -18 -210 -71 -234 -71 -5 0 -8 56 -8 124
        l0 123 58 11 c180 35 257 45 442 55 l205 12 0 25 c0 20 -10 30 -56 53 -89 44
        -137 45 -364 2 -110 -21 -219 -43 -242 -50 l-42 -13 6 142 c3 77 11 173 19
        211 18 92 18 101 -8 125 -34 32 -123 70 -162 70 -29 0 -37 -4 -42 -24z"/>
        <path d="M2815 2310 c-3 -5 -1 -19 5 -30 26 -49 -43 -116 -254 -249 l-99 -62
        -62 12 c-103 20 -119 0 -61 -76 33 -43 104 -212 160 -380 35 -105 66 -160 91
        -160 13 0 21 8 23 23 2 12 9 22 15 22 7 0 155 16 329 37 280 32 320 35 343 23
        25 -13 28 -12 45 10 11 14 45 102 76 195 73 219 98 272 139 297 52 30 53 47 2
        94 -48 43 -161 104 -194 104 -11 0 -31 -9 -45 -19 -14 -11 -45 -25 -69 -30
        -37 -9 -265 -41 -291 -41 -17 0 -6 -28 22 -55 l29 -28 128 17 c70 10 146 16
        168 14 38 -3 40 -5 43 -38 2 -19 1 -53 -3 -75 l-6 -41 -117 -13 c-64 -8 -137
        -18 -162 -25 -38 -9 -45 -15 -45 -36 0 -18 9 -29 29 -39 25 -12 47 -12 140 -1
        60 6 117 15 125 18 11 4 13 1 8 -12 -4 -10 -15 -62 -23 -116 l-17 -98 -35 10
        c-40 11 -54 10 -387 -38 -132 -18 -245 -34 -251 -34 -11 0 -61 177 -52 185 2
        3 56 12 119 20 123 18 162 31 167 57 4 23 -46 48 -96 48 -21 0 -78 -9 -127
        -19 -49 -11 -90 -19 -90 -18 -1 1 -11 37 -22 80 l-21 78 21 8 c12 5 84 36 160
        69 217 96 327 163 327 201 0 21 -63 83 -107 105 -36 18 -69 21 -78 6z"/>
        <path d="M683 2259 c-20 -20 -15 -45 13 -78 43 -51 54 -109 61 -317 l6 -192
        -112 -26 c-62 -15 -158 -36 -214 -47 -55 -10 -105 -23 -110 -28 -29 -29 54
        -81 130 -81 26 0 102 11 168 25 66 14 123 25 127 25 5 0 8 -69 8 -154 l0 -153
        -197 -131 c-252 -165 -294 -189 -373 -204 -62 -12 -65 -14 -68 -44 -5 -50 99
        -154 153 -154 9 0 75 58 148 128 73 71 175 166 227 211 l95 83 3 -78 c3 -83
        -13 -389 -24 -443 -9 -42 -34 -47 -125 -26 -105 23 -108 10 -17 -77 63 -61 79
        -84 98 -136 13 -34 27 -65 32 -68 14 -9 52 31 82 86 53 98 61 163 59 516 l-2
        321 65 64 c35 35 64 67 64 71 0 16 -27 7 -73 -22 -26 -16 -50 -30 -53 -30 -2
        0 -3 59 -2 131 3 146 -3 133 86 170 35 14 58 31 67 49 21 41 2 53 -80 48 l-65
        -3 0 45 c0 92 21 268 42 342 19 72 20 79 5 102 -34 52 -195 106 -224 75z"/>
        <path d="M1841 2186 c-9 -11 -3 -24 27 -63 38 -48 150 -153 162 -153 15 0 39
        37 49 75 17 61 -9 104 -79 132 -63 26 -142 30 -159 9z"/>
        <path d="M3265 1431 c-8 -14 42 -352 69 -466 45 -186 97 -308 192 -451 68
        -103 145 -180 250 -250 101 -67 168 -94 233 -94 76 0 81 14 52 150 -6 25 -11
        126 -11 225 -1 99 -5 189 -9 200 -7 18 -8 18 -24 -5 -8 -14 -32 -79 -52 -145
        -50 -167 -68 -205 -97 -205 -28 0 -117 57 -171 108 -90 86 -189 258 -231 404
        -37 127 -59 280 -52 346 14 119 16 112 -43 154 -53 37 -94 48 -106 29z"/>
        <path d="M2802 1298 c-18 -18 -15 -32 12 -57 43 -40 50 -92 42 -324 -7 -239
        -24 -368 -55 -427 -26 -51 -26 -82 0 -137 32 -67 60 -68 115 -5 24 28 99 87
        166 133 123 83 198 144 198 160 0 21 -62 5 -178 -46 -153 -68 -167 -71 -166
        -30 1 52 27 340 30 344 1 2 43 -22 91 -52 111 -70 125 -73 136 -27 11 44 -3
        83 -38 106 -14 9 -63 21 -110 27 l-84 10 6 96 c3 53 7 97 8 99 1 1 29 -10 61
        -25 74 -34 176 -40 182 -10 7 37 -8 63 -50 87 -36 21 -56 25 -123 24 -64 0
        -82 3 -92 17 -13 17 -92 49 -123 49 -9 0 -21 -5 -28 -12z"/>
        <path d="M2310 1183 c0 -9 10 -27 23 -41 21 -23 22 -30 22 -210 0 -141 -4
        -207 -18 -267 -17 -77 -70 -205 -86 -205 -4 0 -22 -14 -40 -32 -28 -27 -32
        -37 -28 -65 8 -44 42 -91 73 -99 20 -5 33 3 72 42 32 32 105 81 215 144 92 52
        180 106 195 120 l27 25 -32 3 c-17 2 -84 -15 -151 -37 -120 -41 -152 -48 -152
        -33 0 4 9 75 20 157 23 174 27 416 7 455 -24 48 -147 84 -147 43z"/>
        <path d="M2552 1181 c-31 -19 104 -131 159 -131 32 0 59 32 52 60 -8 28 -44
        57 -88 69 -47 13 -105 14 -123 2z"/>
        <path d="M2500 895 c0 -36 136 -144 202 -160 21 -5 29 -2 38 15 16 30 5 82
        -24 109 -47 44 -216 72 -216 36z"/>
      </g>
    </svg>
  );
};

Mouse.propTypes = {
  fillColor: PropTypes.string.isRequired
};

export default Mouse;
