import React, { useState } from 'react';   // Imports: Import necessary libraries and functions:
import { db } from './firebaseConfig';     // React and useState from React for building the component and managing state.
import { collection, addDoc } from 'firebase/firestore';    // db from your Firebase configuration file to interact with Firestore.
                                            // collection and addDoc from Firestore to handle adding documents to a collection.

const TicketOrderForm = () => {     // Initialize state variables using useState for storing the form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');     
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => { // function for submitting to the database
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'ticketOrders'), { //responsible for generating a unique key for each ticket order
        name,                                             // Call addDoc to add a new document to the ticketOrders collection in Firestore
        email,
        ticketType,
        quantity: parseInt(quantity),  // Convert the quantity from a string to an integer
        phone,
        timestamp: new Date()   // Add a timestamp
      });
      console.log('Document written with ID: ', docRef.id); // Log the document ID to the console and display an alert on successful submission
      alert('Ticket order submitted successfully!');
      setName('');            // Clear forms
      setEmail('');
      setTicketType('');
      setQuantity('');
      setPhone('');
    } catch (error) {         // Handle errors by logging the error to the console and displaying an alert if the submission fails
      console.error('Error adding document: ', error);
      alert('Failed to submit ticket order. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center mb-6">Ticket Order Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ticketType" className="block text-sm font-medium text-gray-700">
            Ticket Type:
          </label>
          <select
            id="ticketType"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            required
          >
            <option value="">Select Ticket Type</option>
            <option value="general">General Admission</option>
            <option value="vip">VIP</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
        >
          Purchase Tickets
        </button>
      </form>
    </div>
  );
};

export default TicketOrderForm;