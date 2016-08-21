export const BOARD_SIZE = 20;
export const COLORS = {
    GAME_OVER: '#F44336',
    BOARD: '#37474F'
};
export const KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ESC: 27,
    SPACE_BAR: 32,
    ENTER: 13
};

export const detail1 = [
    [[0,1,0],[1,1,1],[0,0,0]],
    [[1,0,0],[1,1,0],[1,0,0]],
    [[1,1,1],[0,1,0],[0,0,0]],
    [[0,1,0],[1,1,0],[0,1,0]]
];

export const detail2 = [
    [[1,1,0],[0,1,1],[0,0,0]],
    [[0,1,0],[1,1,0],[1,0,0]]
];

export const detail3 = [
    [[0,0,1],[1,1,1],[0,0,0]],
    [[1,0,0],[1,0,0],[1,1,0]],
    [[1,1,1],[1,0,0],[0,0,0]],
    [[1,1,0],[0,1,0],[0,1,0]]
];

export const detail4 = [
    [[1,1,0],[1,1,0],[0,0,0]]
];

export const detail5 = [
    [[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],
    [[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
];

export const Details = [
    { positions: detail1, color: "green" },
    { positions: detail2, color: "yellow" },
    { positions: detail3, color: "blue" },
    { positions: detail4, color: "red" },
    { positions: detail5, color: "black" }
];