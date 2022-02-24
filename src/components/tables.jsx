export const Linha = ({img, title, desc, fab, gas, km, price, refe, placa, data}) => (
    <tr>
        <td className="p-4">
            <tr>
                <td>
                    <img src={img} alt={title}/>
                </td>
                <td>
                    <p>{title}</p>
                    <p>{desc}</p>
                    <p>{fab} - {gas}</p>
                    <p>{km} - {price}</p>
                </td>
            </tr>
        </td>   
        <td className="p-4">{refe}</td>
        <td className="p-4">{placa}</td>
        <td className="p-4">{data}</td>
    </tr>
)