import {useState,useEffect} from 'react'
import { formateDate } from '../../utils/formateDate'
// import useFetchData from '../../hooks/useFetchData'
import { BASE_URL,token } from '../../config';

const Appointments = ({appointments}) => {

// Construct the URL
  
// for user fetching
const [users, setUsers] = useState({});

useEffect(() => {
  const fetchUsers = async () => {
    const userPromises = appointments.map(async (item) => {
      try {

        const res = await fetch(`${BASE_URL}/users/${item.user}`, {
          headers: { 

            Authorization: `Bearer ${token}` }
        });
        const userData = await res.json();
        return { [item.user]: userData };
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    });

    const usersData = await Promise.all(userPromises);
    const usersObject = Object.assign({}, ...usersData);
    setUsers(usersObject);
  };

  fetchUsers();
}, [appointments]);



  return (
    <table className='w-full text-left text-sm text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
            <th scope="col" className='px-6 py-3'>Name</th>
            <th scope="col" className='px-6 py-3'>Gender</th>
            <th scope="col" className='px-6 py-3'>Booked on</th>
            <th scope="col" className='px-6 py-3'>Status</th>
            <th scope="col" className='px-6 py-3'>Phone</th>
            <th scope="col" className='px-6 py-3'>Email</th>
            </tr>

        </thead>
        <tbody>
            {appointments?.map(item => <tr key={item._id}>
                {/* <td scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                    <img src={item.user.photo} className='w-10 h-10 rounded-full' alt="" />
                    <div className=" pl-3">
                        <div className="text-base font-semibold">{item.user.name}</div>
                        <div className=' text-normal text-gray-500'>{item.user.email}</div>
                    </div>

                </td> */}
                <td className=' px-6 py-4'> {users[item.user]?.data.name} </td>
                <td className=' px-6 py-4'>{item.appointmentDate}</td>
                <td className='px-6 py-4'>{item.createdAt}</td>
                <td className={` px-6 py-4 text-black${(item.status == "approved")?" bg-lime-300 ":" bg-orange-400	 " }`}>{item.status}</td>
                <td>{users[item.user]?.data.phone}</td>
                <td>{users[item.user]?.data.email}</td>
            </tr>)}
        </tbody>
    </table>
  )
}

export default Appointments