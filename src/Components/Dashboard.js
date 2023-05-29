import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { getLastResults } from "./utils/getLastResults";
import { setDataChart } from "./utils/defineDataChart";

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
            .then(response => setUsers(getLastResults(response.data)))
            .catch(error => console.error(error));

        dataProvider.getList('stars', { pagination: { page: 1, perPage: 3 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => setReviews(getLastResults(response.data)))
            .catch(error => console.error(error));

        dataProvider.getList('job', { pagination: { page: 1, perPage: 3 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => setVacancies(getLastResults(response.data)))
            .catch(error => console.error(error));

        dataProvider.getList('company', { pagination: { page: 1, perPage: 50 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => setcompaniesAmount(response.data))
            .catch(error => console.error(error));

        dataProvider.getList('applicant', { pagination: { page: 1, perPage: 50 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => setUsersAmount(response.data))
            .catch(error => console.error(error));

        dataProvider.getList('job', { pagination: { page: 1, perPage: 50 }, sort: { field: 'id', order: 'DESC' } })
            .then(response => setVacanciesAmount(response.data))
            .catch(error => console.error(error));
    }, [dataProvider]);


    const data = setDataChart(usersAmount.length, companiesAmount.length, vacanciesAmount.length);
    return (
        <Card>
            <CardHeader title="Bienvenido al panel de administrador de JobPortal X" />
            <CardContent>

                <Box display="flex" flexDirection="row" marginTop="20px" fontWeight="bold">
                    <div display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h6" component="h3">
                            Últimos usuarios registrados:
                        </Typography>
                        {
                            users.map(user => (
                                <Typography key={user.id} variant="body2" component="p" >
                                    Nombre: {user.name} {user.lastName}, {user.email}
                                </Typography>
                            ))
                        }
                    </div>


                    <div display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h6" component="h3">
                            Últimas reviews:
                        </Typography>
                        {
                            reviews.map(review => (
                                <Typography key={review.id} variant="body2" component="p">
                                    Estrellas: {review.stars}, Comentario: {review.text}
                                </Typography>
                            ))
                        }
                    </div>

                    <div display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h6" component="h3">
                            Últimas vacantes creadas:
                        </Typography>
                        {
                            vacancies.map(vacancy => (
                                <Typography key={vacancy.id} variant="body2" component="p">
                                    Título: {vacancy.title}, Descripción: {vacancy.description}
                                </Typography>
                            ))
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