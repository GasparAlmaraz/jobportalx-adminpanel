export const getLastResults = (data) => {
    const result = data;
    const reversedData = result.reverse();
    const finalResult = [];
    for (let index = 0; index < 3; index++) {
        finalResult.push(reversedData[index]);
    }
    return finalResult;
}