import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    } , []);




    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className ='deposit'>R$12.000</td>       
                        <td>Desenvolvimento</td>       
                        <td>13/03/2022</td>       
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td className ='withdraw'>R$ - 59,00</td>       
                        <td>Alimentação</td>       
                        <td>05/03/2022</td>       
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className ='withdraw'>R$ - 1.000</td>       
                        <td>Casa</td>       
                        <td>02/03/2022</td>       
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className ='deposit'>R$ 5.400</td>       
                        <td>Venda</td>       
                        <td>15/03/2022</td>       
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}