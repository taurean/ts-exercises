export const map = (map: any[], callback: (any?: any) => void) => {
    let newMap = [];
    for (let i = 0; i < map.length; i++) {
        newMap.push(callback(map[i]));
    }

    return newMap;
};
