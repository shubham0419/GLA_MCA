// pages/customer-outreach.tsx
'use client';
import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Input,
  Textarea,
  Select,
  SelectItem,
  Card,
  CardBody,
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio

} from '@nextui-org/react';
import { categories } from './category';


type Category = {
  name: string;
  templates: string[]
};

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({ name: "", templates: [""] });
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [smsCredits, setSmsCredits] = useState<number>(252);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const select = categories.find((category) => category.name == e.target.value);
    if (select)
      setSelectedCategory(select);
  }
  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(e.target.value);
    setMessage(selectedCategory.templates[Number(e.target.value)])
  }
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);
  const handleCustomerSelection = (customerName: string) => {
    setSelectedCustomers((prev) =>
      prev.includes(customerName)
        ? prev.filter((name) => name !== customerName)
        : [...prev, customerName]
    );
  };

  const sendMessage = () => {
    // Logic to send message
    console.log('Message sent to:', {
      selectedCategory,
      selectedCustomers,
      message,
      selectedTemplate,
      smsCredits,
    });
    setSmsCredits(smsCredits - selectedCustomers.length);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "60px", flexDirection: 'column', width: "100%" }}>
      <Card>
        <CardBody>
          <div>
            <div>
              <Select
                onChange={handleCategoryChange}
                variant="bordered"
                placeholder="Choose a message category"
                className="min-w-[200px] m-4 ml-0 mb-0 text-2xl"
              >
                {categories.map((category) => <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>)}
              </Select>

              <br />
              <Select
                onChange={handleTemplateChange}
                variant="bordered"
                placeholder="Choose a message template"
                className="min-w-[200px] m-4 ml-0 mb-0 text-2xl"
              >
                {selectedCategory.templates.map((template, ind) => <SelectItem key={ind} value={template}>
                  {template}
                </SelectItem>)}
              </Select>
            </div>
            <br />
            <br />
            <div>
              <Textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Choose message template from above"
                isDisabled={true}
              />
            </div>
            <br />
            <br />
            <div>
              <div>Remaining SMS Credits: {smsCredits}</div>
            </div>
          </div>

          <br />
          <br />

          {/* <Card>
          <CardBody>
            {customers.map((customer) => (
              <div key={customer.name} style={{ marginBottom: '10px' }}>
                <Checkbox
                  isSelected={selectedCustomers.includes(customer.name)}
                  onChange={() => handleCustomerSelection(customer.name)}
                >
                  <div>
                    <div>{customer.name}</div>
                    <div>Last Visit: {customer.lastVisit}</div>
                    <div>Last Bill Value: {customer.lastBillValue}</div>
                  </div>
                </Checkbox>
              </div>
            ))}
          </CardBody>
        </Card> */}


          <div className="flex flex-col gap-3">
            <Table
              color={"default"}
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
            </Table>

          </div>

          <Button onClick={sendMessage}>Send Message</Button>

        </CardBody>
      </Card>
    </div>
  );
};

export default Page;
