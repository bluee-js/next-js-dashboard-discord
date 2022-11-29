import React from 'react';

function LogoBorder({ className, r }: { className?: string; r?: any }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="551pt"
      height="958pt"
      viewBox="0 0 551 958"
      preserveAspectRatio="xMidYMid meet"
      className={
        'h-full pointer-events-none absolute filter -z-10' +
        (r && ' rotate-[8deg]') +
        (className || '')
      }
    >
      <defs>
        <linearGradient id="bg" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="20%" stop-color="#4852c5" />
          <stop offset="100%" stop-color="#9a35bb" />
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 .5 .5"
            to="360 .5 .5"
            dur="5s"
            repeatCount="indefinite"
          ></animateTransform>
        </linearGradient>
      </defs>

      <g
        transform="translate(0,958) scale(0.1,-0.1)"
        fill="url(#bg)"
        stroke="none"
      >
        <path d="M2350 9514 c-87 -6 -199 -24 -275 -44 -38 -10 -99 -24 -135 -30 -96 -17 -199 -50 -317 -102 -23 -10 -47 -18 -53 -18 -7 0 -71 -30 -143 -66 -277 -139 -617 -439 -826 -729 -145 -200 -256 -445 -317 -700 -25 -105 -33 -192 -33 -375 -1 -296 58 -552 176 -763 18 -33 33 -61 33 -64 0 -18 97 -165 164 -248 320 -397 710 -637 1421 -876 83 -28 159 -54 170 -60 22 -10 132 -45 245 -79 149 -44 588 -204 690 -251 297 -138 441 -238 525 -364 80 -121 87 -345 14 -486 -59 -116 -348 -199 -692 -199 -192 0 -438 21 -557 47 -63 14 -151 33 -195 43 -94 20 -353 114 -445 160 -105 52 -247 157 -362 266 -219 207 -335 261 -578 271 -132 5 -137 4 -235 -27 -162 -52 -275 -114 -372 -202 -109 -100 -154 -155 -206 -253 l-42 -80 -3 -810 c-2 -543 1 -826 8 -861 13 -62 87 -151 153 -183 54 -26 153 -28 200 -5 45 24 191 169 230 228 l32 51 5 435 5 435 35 -1 c50 -1 106 -31 119 -62 28 -68 31 -161 31 -874 0 -519 3 -753 11 -784 8 -31 28 -63 62 -100 67 -73 96 -88 182 -88 57 -1 80 4 127 27 68 34 162 130 201 208 l27 54 0 402 c0 221 3 408 6 417 8 22 79 21 124 -2 19 -9 43 -33 55 -52 20 -34 20 -53 25 -870 6 -940 -2 -856 87 -941 64 -63 100 -79 171 -79 157 0 282 97 332 257 19 63 20 91 20 1018 0 1059 -5 983 67 972 51 -9 84 -35 111 -87 l22 -44 0 -899 c0 -996 -5 -918 68 -999 78 -86 153 -114 259 -96 110 18 183 84 256 228 l32 65 5 550 5 550 46 -1 c58 0 92 -22 121 -77 l23 -42 5 -1025 c6 -1145 -1 -1049 78 -1121 50 -46 119 -64 213 -56 38 3 89 15 113 26 64 28 141 104 173 170 l28 56 3 1357 2 1358 26 6 c43 11 112 -15 142 -54 l27 -35 5 -686 5 -686 28 -37 c35 -45 106 -104 142 -118 59 -22 196 -6 270 33 44 22 123 110 148 165 l22 47 3 907 3 908 25 6 c37 9 110 -22 136 -59 l23 -32 5 -660 5 -660 27 -41 c36 -56 87 -108 124 -127 134 -69 362 22 438 175 l26 52 0 1240 c-1 987 -4 1264 -15 1351 -39 320 -78 482 -169 707 -46 114 -66 153 -139 273 -92 151 -131 201 -233 301 -361 355 -729 555 -1449 791 -1155 379 -1221 405 -1343 537 -50 54 -69 90 -93 177 -39 143 -11 297 68 375 42 41 66 52 213 99 178 57 263 70 460 70 146 0 202 -4 265 -19 44 -10 105 -25 137 -32 85 -20 221 -76 333 -138 141 -77 191 -110 372 -238 46 -33 70 -33 150 3 23 11 46 19 50 19 9 0 362 126 408 145 17 7 46 18 65 24 19 5 67 22 105 36 39 14 88 32 110 40 53 18 282 100 320 115 17 6 69 50 118 98 87 86 87 87 87 137 0 93 -47 232 -117 343 -19 30 -100 120 -181 201 -157 158 -330 292 -477 371 -44 23 -109 59 -145 80 -63 36 -94 49 -245 105 -38 14 -79 30 -90 35 -32 15 -135 47 -200 63 -33 8 -105 26 -160 40 -267 68 -265 68 -810 72 -275 1 -525 1 -555 -1z m905 -64 c173 -7 269 -19 380 -48 22 -6 87 -22 145 -37 135 -35 242 -66 255 -75 6 -4 28 -13 50 -20 22 -6 54 -18 70 -25 17 -7 44 -17 60 -21 26 -6 109 -47 302 -150 142 -75 331 -221 476 -366 165 -166 216 -243 258 -388 28 -95 26 -128 -8 -140 -16 -6 -37 -15 -48 -20 -11 -5 -38 -14 -60 -21 -22 -6 -44 -15 -50 -19 -5 -4 -23 -10 -40 -14 -16 -4 -43 -13 -60 -21 -45 -19 -399 -145 -408 -145 -5 0 -23 -6 -40 -14 -18 -8 -50 -20 -72 -26 -22 -7 -44 -16 -50 -20 -5 -4 -23 -10 -40 -14 -16 -4 -43 -14 -60 -21 -16 -7 -48 -19 -70 -25 -22 -7 -44 -16 -50 -20 -26 -21 -55 -11 -140 45 -49 32 -92 63 -95 67 -8 10 -80 58 -104 69 -12 5 -57 29 -101 54 -44 25 -96 52 -115 61 -58 25 -73 31 -130 57 -30 14 -77 28 -105 32 -27 4 -59 12 -69 17 -36 19 -211 38 -353 38 -152 0 -274 -12 -338 -34 -22 -8 -60 -17 -84 -20 -24 -4 -63 -15 -87 -26 -23 -11 -46 -20 -49 -20 -3 0 -31 -11 -61 -25 -30 -14 -58 -25 -63 -25 -4 0 -16 -9 -26 -20 -10 -11 -23 -20 -28 -20 -11 0 -16 -4 -83 -68 -38 -36 -114 -140 -114 -156 0 -4 -9 -27 -20 -52 -40 -87 -41 -277 -3 -364 46 -102 59 -124 110 -175 50 -50 135 -115 150 -115 3 0 29 -11 57 -24 118 -55 152 -68 347 -132 112 -37 218 -72 234 -79 17 -7 71 -25 120 -40 50 -15 104 -33 122 -41 17 -8 36 -14 41 -14 6 0 64 -18 129 -40 65 -22 161 -53 213 -69 115 -37 276 -94 322 -114 18 -9 87 -37 153 -63 66 -25 125 -50 130 -54 6 -4 62 -34 125 -66 276 -139 607 -398 749 -587 57 -75 167 -259 211 -352 71 -151 135 -366 166 -560 56 -353 56 -336 52 -1560 -3 -1132 -3 -1140 -24 -1180 -50 -95 -151 -99 -245 -11 -83 80 -79 41 -79 735 0 387 -4 633 -11 661 -5 24 -21 59 -35 77 -32 42 -123 77 -178 68 -107 -16 -195 -86 -229 -181 -16 -45 -17 -114 -17 -899 0 -467 -4 -867 -9 -887 -19 -81 -79 -118 -169 -103 -53 9 -132 84 -145 139 -6 24 -13 305 -16 691 -4 458 -9 658 -18 676 -24 54 -64 89 -120 105 -63 18 -113 14 -183 -17 -62 -28 -98 -64 -131 -134 l-29 -60 -1 -1330 c-1 -731 -4 -1343 -8 -1360 -7 -36 -45 -56 -112 -63 -58 -5 -109 11 -149 48 -63 59 -60 4 -60 1075 0 1104 1 1085 -68 1147 -20 18 -63 42 -94 52 l-57 20 -70 -28 c-79 -31 -129 -78 -165 -155 -20 -45 -21 -59 -24 -591 l-3 -545 -25 -32 c-66 -87 -149 -84 -244 8 -76 73 -69 -16 -72 996 l-3 909 -25 49 c-21 41 -36 55 -80 77 -62 32 -104 34 -175 10 -70 -24 -120 -68 -153 -132 l-27 -55 -5 -976 c-4 -847 -7 -978 -20 -995 -50 -62 -93 -81 -157 -69 -35 6 -113 69 -136 109 -9 16 -13 238 -17 851 -5 772 -6 833 -23 870 -40 88 -121 133 -222 122 -76 -8 -128 -35 -174 -92 -70 -86 -71 -90 -71 -532 0 -427 -2 -444 -55 -479 -18 -11 -46 -17 -85 -17 -53 0 -63 3 -103 36 -25 20 -55 56 -66 80 -21 43 -21 52 -21 801 0 664 -2 766 -16 829 -20 89 -54 125 -141 151 -57 17 -62 17 -122 1 -45 -13 -76 -30 -110 -61 -89 -80 -86 -59 -89 -558 -3 -427 -4 -441 -24 -470 -37 -54 -58 -66 -121 -66 -58 0 -58 0 -123 63 l-64 63 0 755 c0 838 -2 810 67 941 46 89 104 153 190 210 118 79 166 96 335 119 63 8 88 8 130 -4 29 -8 69 -18 89 -21 32 -6 53 -15 148 -65 40 -21 107 -77 211 -176 53 -50 120 -108 150 -128 30 -21 75 -53 100 -72 25 -18 57 -36 72 -40 15 -3 32 -13 39 -21 6 -8 15 -14 20 -14 5 0 33 -11 63 -25 30 -14 61 -25 68 -25 7 -1 31 -9 53 -20 22 -11 47 -20 55 -20 8 0 28 -7 43 -15 31 -16 187 -59 257 -70 25 -4 63 -14 85 -22 58 -20 371 -46 570 -46 278 -1 488 38 627 114 29 16 64 35 78 41 55 27 190 165 190 194 0 4 6 15 13 23 8 9 26 50 40 91 24 65 27 90 27 195 0 154 -25 230 -107 329 -55 67 -184 176 -208 176 -7 0 -23 9 -37 19 -24 20 -146 83 -228 119 -25 11 -71 32 -102 46 -31 14 -62 26 -67 26 -6 0 -28 9 -48 20 -21 11 -45 20 -53 20 -8 1 -33 9 -55 20 -22 11 -47 20 -55 20 -8 0 -33 9 -55 20 -22 11 -46 19 -53 20 -7 0 -32 9 -55 19 -23 11 -59 22 -80 26 -20 4 -39 11 -42 15 -3 5 -30 14 -61 20 -30 6 -67 18 -82 26 -15 8 -35 14 -45 14 -10 0 -37 8 -60 19 -23 10 -57 22 -75 26 -18 4 -45 13 -60 21 -15 8 -34 14 -42 14 -8 0 -33 9 -55 20 -22 11 -49 20 -60 20 -11 0 -33 7 -48 15 -16 8 -47 20 -70 26 -39 10 -64 20 -170 69 -24 11 -49 20 -55 20 -7 0 -29 9 -49 20 -21 11 -43 20 -50 20 -12 0 -188 93 -306 162 -101 59 -230 150 -324 230 -128 109 -321 336 -380 448 -16 30 -52 98 -80 150 -49 90 -103 234 -118 310 -3 19 -14 64 -23 100 -24 94 -25 551 0 625 9 28 19 68 23 90 8 52 44 172 61 204 8 14 14 29 14 34 0 4 29 67 64 140 105 217 287 448 451 572 36 28 89 68 118 90 29 22 66 49 82 60 57 36 250 131 295 144 25 7 50 17 56 22 19 16 144 56 244 79 52 12 120 28 150 36 96 26 161 35 325 45 88 5 167 11 175 14 17 5 418 -3 695 -15z" />
      </g>
    </svg>
  );
}

export default LogoBorder;
