export const setDataChart = (userAmount, companiesAmount, vacanciesAmount) => {
    return [
        {name: 'Usuarios', Usuarios: userAmount},
        {name: 'Empresas', Empresas: companiesAmount},
        {name: 'Vacantes', Vacantes: vacanciesAmount}
    ]
}