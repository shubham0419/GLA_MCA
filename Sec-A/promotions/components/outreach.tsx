// pages/customer-outreach.js
'use client'
import React, { useState } from 'react';
import { Button, Checkbox, Input, Textarea, Select, SelectItem, Card, CardBody,Body } from '@nextui-org/react';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [message, setMessage] = useState('');
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [smsCredits, setSmsCredits] = useState(252);



  const customers = [
    { name: 'rohit', lastVisit: '22/3/2024', lastBillValue: 450 },
    { name: 'devesh', lastVisit: '--', lastBillValue: 0 },
    { name: 'Govinda', lastVisit: '--', lastBillValue: 0 },
    { name: 'goli', lastVisit: '--', lastBillValue: 0 },
    { name: 'Ahmed', lastVisit: '--', lastBillValue: 0 },
    // Add more customers here
  ];

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleTemplateChange = (e) => setSelectedTemplate(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleCustomerSelection = (customerName) => {
    setSelectedCustomers(prev =>
      prev.includes(customerName)
        ? prev.filter(name => name !== customerName)
        : [...prev, customerName]
    );
  };

  const sendMessage = () => {
    // Logic to send message
    console.log('Message sent to:', {selectedCategory, selectedCustomers, message, selectedTemplate, smsCredits});
    setSmsCredits(smsCredits - selectedCustomers.length);
  };

  return (

   <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>

    
    code abhi krna h
   </div>
  );
};

export default Page;
