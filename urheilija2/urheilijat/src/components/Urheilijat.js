import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

export default function Urheilijat() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addFormData, setAddformData] = useState({
    fname:'',
    sname:'',
    cname:'',
    byear:'',
    weight:'',
    link:'',
    sport:'',
    achievements:'',
  })
  const [editFormData, setEditFormData] = useState({
    cname:'',
    weight:'',
    link:'',
    sport:'',
    achievements:'',
  })

  const[editUrheilijaById, setEditUrheilijaById] = useState(null)

  const  handleAddFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.attributes.getNamedItem('name').value;
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddformData(newFormData);
  }

  const  handleEditFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.attributes.getNamedItem('name').value;
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = () =>{
    try {
      axios.post("http://localhost:3001/urheilijat",{
        fname: addFormData.fname,
        sname: addFormData.sname,
        cname: addFormData.cname,
        year: addFormData.byear,
        weight: addFormData.weight,
        link: addFormData.link,
        sport: addFormData.sport,
        achievements: addFormData.achievements,})
        .then((res) => {
          setData(res.data.post);
          console.log(res.data.post);
        })
        .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
  }

  const handleEditFormSubmit = () =>{
    try {
      axios.put("http://localhost:3001/urheilijat/"+editUrheilijaById,{
        cname: editFormData.cname,
        weight: editFormData.weight,
        link: editFormData.link,
        sport: editFormData.sport,
        achievements: editFormData.achievements,})
        .then((res) => {
          setData(res.data.urheilijat);
          console.log(res.data.urheilijat);
        })
        .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      setEditUrheilijaById(null);
  }

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        axios
          .get("http://localhost:3001/urheilijat")
          .then((res) => {
            setData(res.data.urheilijat);
            console.log(res.data.urheilijat);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleEditClick = (event, urheilija) =>{
    event.preventDefault();
    setEditUrheilijaById(urheilija.id);

    const formValues ={
      cname: urheilija.cname,
      weight: urheilija.weight,
      link: urheilija.link,
      sport: urheilija.sport,
      achievements: urheilija.achievements,
    }

    setEditFormData(formValues);
  }
  const handleCancelClick = () =>{
    setEditUrheilijaById(null);
  }

  const handelDeleteClick = (urheilijaid) => {
    try {
      axios.delete("http://localhost:3001/urheilijat/"+urheilijaid)
      .then((res) => {
        setData(res.data.urheilijat);
      })
        .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
      window.location.reload(false);
  }

  return (
        <main id="urheilijat">
            {!loading && (
                <div>
                    <h2>Urheilijat</h2>
                    <form onSubmit={handleEditFormSubmit}>
                      <Table striped="columns" bordered responsive>
                        <thead>
                            <tr>
                                <th>Etunimet</th>
                                <th>Sukunimi</th>
                                <th>Kutsumanimi</th>
                                <th>Syntymävuuosi</th>
                                <th>Paino</th>
                                <th>www.-linkki</th>
                                <th>Laji</th>
                                <th>Saavutukset</th>
                                <th>Toiminnot</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                              <Fragment>
                                {editUrheilijaById === item.id ? (
                                <EditableRow item={item} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> 
                                ):( 
                                <ReadOnlyRow item={item} handleEditClick={handleEditClick} handelDeleteClick={handelDeleteClick}/>
                                )}
                              </Fragment>
                            ))}
                        </tbody>
                      </Table>
                    </form>
                    <form id="flex" onSubmit={handleAddFormSubmit}> 
                      <h2>Lisää Urheilija</h2> 
                      <input type="text" name="fname" required="required" placeholder="Etuimet" onChange={handleAddFormChange}/>
                      <input type="text" name="sname" required="required" placeholder="Sukunimi" onChange={handleAddFormChange}/>
                      <input type="text" name="cname" required="required" placeholder="Kutsumanimi" onChange={handleAddFormChange}/>
                      <input type="text" name="byear" required="required" placeholder="Syntymävuosi" onChange={handleAddFormChange}/>
                      <input type="text" name="weight" required="required" placeholder="Paino" onChange={handleAddFormChange}/>
                      <input type="text" name="link" placeholder="www. -linkki *" onChange={handleAddFormChange}/>
                      <input type="text" name="sport" required="required" placeholder="Laji" onChange={handleAddFormChange}/>
                      <input type="text" name="achievements" required="required" placeholder="Saavutukset" onChange={handleAddFormChange}/>
                      <button type="submit">Lisää</button>
                    </form>
                </div>
            )}
        </main>
  );
}