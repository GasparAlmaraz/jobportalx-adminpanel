import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { getLastResults } from "./utils/getLastResults";
import { setDataChart } from "./utils/defineDataChart";
import { truncateDescription } from "./utils/truncateText";

export const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [vacancies, setVacancies] = useState([]);

    const [companiesAmount, setcompaniesAmount] = useState([]);
    const [usersAmount, setUsersAmount] = useState([]);
    const [vacanciesAmount, setVacanciesAmount] = useState([]);
    const dataProvider = useDataProvider();

    useEffect(() => {
        dataProvider.getList('applicant', { pagination: { page: 1, perPage: 3 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => response.total ? setUsers(getLastResults(response.data)) : setUsers([]))
            .catch(error => console.error(error));

        dataProvider.getList('stars', { pagination: { page: 1, perPage: 3 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => response.total ? setReviews(getLastResults(response.data)) : setReviews([]))
            .catch(error => console.error(error));

        dataProvider.getList('job', { pagination: { page: 1, perPage: 3 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => response.total ? setVacancies(getLastResults(response.data)) : setVacancies([]))
            .catch(error => console.error(error));

        dataProvider.getList('company', { pagination: { page: 1, perPage: 50 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => response.total ? setcompaniesAmount(response.data) : setcompaniesAmount([]))
            .catch(error => console.error(error));

        dataProvider.getList('applicant', { pagination: { page: 1, perPage: 50 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => response.total ? setUsersAmount(response.data) : setUsersAmount([]))
            .catch(error => console.error(error));

        dataProvider.getList('job', { pagination: { page: 1, perPage: 50 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => response.total ? setVacanciesAmount(response.data) : setVacanciesAmount([]))
            .catch(error => console.error(error));
    }, [dataProvider]);

    const data = setDataChart(usersAmount.length, companiesAmount.length, vacanciesAmount.length);
    return (
        <Card>
            <CardHeader title="Bienvenido al panel de administrador de JobPortal X" />
            <CardContent>

                <Box display="flex" flexDirection="row" marginTop="20px" alignContent="space-around" fontWeight="bold" align="center">
                    <div display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h6" component="h3">
                            Últimos usuarios registrados:
                        </Typography>
                        {
                            users.map(user => user ? (
                                <Typography key={user?.id} variant="body2" component="p" backgroundColor="#EBEBEBff" borderRadius="10px" margin="10px">
                                    {user?.name} {user?.lastName}
                                    <br></br>
                                    {user?.email}
                                </Typography>
                            ) : (<></>))
                        }
                    </div>


                    <div display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h6" component="h3">
                            Últimas reviews:
                        </Typography>
                        {
                            reviews.map(review => review ? (
                                <Typography key={review?.id} variant="body2" component="p" backgroundColor="#EBEBEBff" borderRadius="10px" margin="10px">
                                    Estrellas: {review?.stars}, Comentario: {truncateDescription(review?.text, 10)}
                                </Typography>
                            ) : (<></>)
                            )
                        }
                    </div>

                    <div display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h6" component="h3">
                            Últimas vacantes creadas:
                        </Typography>
                        {
                            vacancies.map(vacancy => vacancy ? (
                                <Typography key={vacancy?.id} variant="body2" component="p" backgroundColor="#EBEBEBff" borderRadius="10px" margin="10px">
                                    Título: {vacancy?.title}, Descripción: {truncateDescription(vacancy?.description, 10)}
                                </Typography>
                            ) : (<></>))
                        }
                    </div>
                </Box>
                <br></br>
                <Typography variant="h6" component="h2">
                    Grafica de registros:
                </Typography>

                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Usuarios" fill="#8884d8" />
                    <Bar dataKey="Empresas" fill="#82ca9d" />
                    <Bar dataKey="Vacantes" fill="#256eff" />
                </BarChart>

            </CardContent>
        </Card>
    );
};