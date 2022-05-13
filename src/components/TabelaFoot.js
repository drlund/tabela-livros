import React from "react";

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colspan="4">Qauntidade de livros na tabela: { props.qdeLivros }</td>
        </tr>
    </tfoot>
);

export default TabelaFoot;