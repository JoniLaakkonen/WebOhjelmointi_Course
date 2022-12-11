import React from "react";


export default function ReadOnlyRow({ item, handleEditClick, handelDeleteClick }){
    return(
        <tr id="posts_tr" key={item.id}>
            <td>{item.Etunimet}</td>
            <td>{item.Sukunimi}</td>
            <td>{item.Kutsumanimi}</td>
            <td>{item.Syntymävuosi}</td>
            <td>{item.Paino}</td>
            <td>{item.wwwlinkki_kuvaan}</td>
            <td>{item.Laji}</td>
            <td>{item.Saavutukset}</td>
            <td><button type="button" onClick={(event)=>handleEditClick(event,item)}>Edit</button>
            <button type="button" onClick={()=>handelDeleteClick(item.id)}>Delete</button></td>
        </tr>
    )
}