export const getRandomInt = (): Promise<number> => {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 20));
        }, 2000);
    });
};
