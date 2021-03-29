import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
      students{
          name
          age
          email
          id
      }
  }
`;


const Student = () => {
    const { loading, error, data } = useQuery(GET_STUDENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { students } = data
    return (
        <div style={{marginLeft:10}}>
            <h3>Students List</h3>
            <table border="2">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(stud => {
                        return (<tr key={stud.id}>
                            <td>{stud.name}</td>
                            <td>{stud.age}</td>
                            <td>{stud.email}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Student
