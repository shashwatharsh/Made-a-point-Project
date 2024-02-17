import React from 'react'

const Appointments = ({appointments}) => {
  return (
    <table className='w-full text-left text-sm text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr scope="col" className='px-6 py-3'>Name</tr>
            <tr scope="col" className='px-6 py-3'>Gender</tr>
            <tr scope="col" className='px-6 py-3'>Booked on</tr>
            <tr scope="col" className='px-6 py-3'>Problem</tr>
            <tr scope="col" className='px-6 py-3'>Phone</tr>
            <tr scope="col" className='px-6 py-3'>Email</tr>

        </thead>
        <tbody>
            {appointments}
        </tbody>
    </table>
  )
}

export default Appointments