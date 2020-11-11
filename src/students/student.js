module.exports = {
    sum: notes => {
        if (Math.min(...notes)) {
            const result = notes.reduce((acumulador, nota) => {
                acumulador += nota >= 9 ? nota * 2 : nota;
                return acumulador;
            }, 0)
            return notes.length > 5 ? result * 2 : result;
        }
        return 0;
    }
};