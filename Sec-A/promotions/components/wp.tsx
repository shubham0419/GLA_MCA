// pages/promotion.tsx
'use client';
import React, { useState, ChangeEvent } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Button,
  Switch,
  Spacer,
} from '@nextui-org/react';

const Page: React.FC = () => {
  const [promotionType, setPromotionType] = useState<string>('SMS');
  const [promotionImage, setPromotionImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [callbackNumbers, setCallbackNumbers] = useState<string>('');
  const [recurring, setRecurring] = useState<boolean>(false);
//   const [recurring, setRecurring] = useState<boolean>(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPromotionImage(e.target.files[0]);
    }
  };

  const handleSendPromotion = () => {
    // Logic to send promotion
    console.log('Promotion sent', {
      promotionType,
      promotionImage,
      message,
      callbackNumbers,
      recurring,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px',paddingTop:"60px", width:"60%" }}>
      <Card>
        <CardBody>
          <div style={{ textAlign: 'center' }}>
            <h3>WhatsApp promotions are sent after 24 working hours!</h3>
          </div>
          <Spacer y={1} />
          <Spacer y={1.5} />
          <div>
            <Input
              type="file"
              onChange={handleImageChange}
              fullWidth
              // underlined
            //   label="Select Promotional Image:"
            />
          </div>
          <Spacer y={1.5} />
          <div>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Input Promotion Message"
              maxLength={1000}
              fullWidth
              // underlined
              label="Input Promotion Message:"
            />
          </div>
          <Spacer y={1.5} />
          <div>
            <Textarea
              value={callbackNumbers}
              onChange={(e) => setCallbackNumbers(e.target.value)}
              placeholder="Add Callback Numbers (Max 4 Callback Numbers)"
              fullWidth
              // underlined
       
            />
          </div>
          <Spacer y={1.5} />
          <div style={{ textAlign: 'center', color: 'red' }}>
            <h5>Sending to no Clients</h5>
          </div>
          <Spacer y={1} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h5>Recurring</h5>

            <Switch
              checked={recurring}
              onChange={() => setRecurring(!recurring)}
            />
          </div>
        {recurring  &&   <div style={{border:'1px solid black', height:'300px',overflowY:'scroll'}}>
        <div className="flex flex-col gap-3">
      {/* <Table 
        color={selectedColor}
        selectionMode="multiple" 
        defaultSelectedKeys={["2", "3"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    
    </div>
        
          </div>}
          <Spacer y={1.5} />
          <div style={{ textAlign: 'center' }}>
            <Button onClick={handleSendPromotion}>Send</Button>
          </div>
        </CardBody>
        <CardFooter>
          <h3>
            Please enter up to 30 characters for each input in SMS Promotions.
            Bulk Promotion can send up to 2000 SMS promotions at once.
            WhatsApp Promotion - can send up to 2000 WhatsApp promotions at once.
            WhatsApp Promotions are executed within 24 working hrs.
          </h3>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
