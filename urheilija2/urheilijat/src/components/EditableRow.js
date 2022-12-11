import React from 'react'

const EditableRow = ({item, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr id='editTr'>
        <td>{item.Etunimet}</td>
        <td>{item.Sukunimi}</td>
        <td><input type="text" name="cname" required="required" placeholder="Kutsumanimi" value={editFormData.cname} onChange={handleEditFormChange}/></td>
        <td>{item.Syntymävuosi}</td>
        <td><input type="text" name="weight" required="required" placeholder="Paino" value={editFormData.weight} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="link" placeholder="www. -linkki" value={editFormData.link} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="sport" required="required" placeholder="Laji" value={editFormData.sport} onChange={handleEditFormChange}/></td>
        <td><input type="text" name="achievements" required="required" placeholder="Saavutukset" value={editFormData.achievements} onChange={handleEditFormChange}/></td>
        <td><button type='submit'>Save</button><button onClick={handleCancelClick} type='button'>Cancel</button></td>
    </tr>
  )
}

export default EditableRow