const main = () => {
    try {
        codigo
    } catch (error) {
        console.error(`Deu erro no código. E o erro é esse: \n ${error}`);
        // throw error;
    } finally {
        console.log('Fim do código');
    }
}
main();