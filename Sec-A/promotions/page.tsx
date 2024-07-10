// pages/customer-outreach.tsx
'use client'
import React, { useState } from 'react';
// import { Card, CardBody, CardFooter, Input, Textarea, Button, Switch, Spacer } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Switch, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio } from "@nextui-org/react";


import Whatsapp from './components/wp';
import Sms from './components/sms';
import MainWrapper from '@/components/mainWrapper/mainWrapper';

type PromotionType = 'SMS' | 'Whatsapp';

const Page: React.FC = () => {
  const [promotionType, setPromotionType] = useState<PromotionType>('Whatsapp');

  const togglePromotionType = () => {
    setPromotionType(prevType => (prevType === 'SMS' ? 'Whatsapp' : 'SMS'));
  };

  return (
    <MainWrapper name="Promotion" parentWrapper={{
      className : "flex flex-col sm:gap-4 sm:py-4 sm:pl-14 h-full"
    }} mainWrapper={{
      className : "p-2 sm:px-6 sm:py-0 flex justify-center relative"
    }}>
    {/* <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '20px', minHeight: '100vh' }}> */}
        <div className='flex bg-white gap-2 shadow-lg p-3 rounded-lg w-fit absolute right-6 z-50'>
          <h5 className='text-sm'>SMS</h5>
          <Switch 
            color={"success"}
            size="sm"
            checked={promotionType === 'Whatsapp'}
            onChange={togglePromotionType}
            classNames={{
              wrapper:"bg-blue-500",
            }}
          />
          <h5 className='text-sm'>Whatsapp</h5>
        </div>

      {promotionType === 'SMS' ? <Whatsapp /> : <Sms />}
      
    {/* </div> */}
    </MainWrapper>
  );
};

export default Page;
