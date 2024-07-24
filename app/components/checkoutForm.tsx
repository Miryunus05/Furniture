'use client';
import React, { ChangeEvent, Component, FormEvent } from 'react';

interface ContactFormState {
  name: string;
  LName: string; // Last name
  company: string; // Company name
  street: string; // Street address
  city: string; // Town/City
  province: string; // Province
  code: string; // ZIP code
  phone: string; // Phone number
  email: string; // Email address
  subject: string; // Additional information
  region: string; // Country/Region
}

export default class ContactForm extends Component<{}, ContactFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      LName: '',
      company: '',
      street: '',
      city: '',
      province: '',
      code: '',
      phone: '',
      email: '',
      subject: '',
      region: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<ContactFormState, keyof ContactFormState>);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, LName, company, street, city, province, code, phone, email, subject, region } = this.state;
    alert(`Name: ${name} ${LName}, Company: ${company}, Address: ${street}, City: ${city}, Province: ${province}, ZIP: ${code}, Phone: ${phone}, Email: ${email}, Subject: ${subject}, Region: ${region}`);
    console.log(this.state);
  }

  render() {
    const { name, LName, company, street, city, province, code, phone, email, subject, region } = this.state;
    return (
      <div className="p-8">
        <h2 className='text-[36px] font-semibold leading-[100px]'>Billing details</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4 flex gap-[33px]">
            <div>
              <label htmlFor="name" className='mb-5'>First name</label><br /><br />
              <input
                name="name"
                value={name}
                onChange={this.handleChange}
                type="text"
                className="border-2 w-[211px] p-4 rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="LName">Last name</label><br /><br />
              <input
                name="LName"
                value={LName}
                onChange={this.handleChange}
                type="text"
                className="border-2 w-[211px] p-4 rounded-xl"
              />
            </div>
          </div>

          <div className="mb-4"><br />
            <label htmlFor="company">Company Name (Optional)</label><br /><br />
            <input
              name="company"
              value={company}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-[453px] p-4 rounded-xl"
            />
          </div>

          <div className="mb-4"><br />
            <label htmlFor="region">Country / Region</label><br /><br />
            <select className='border-2 w-[453px] p-4 pr-2 rounded-xl' name="region" value={region} onChange={this.handleChange}>
              <option disabled selected>Sri Lanka</option>
              <option value="England">England</option>
              <option value="Russia">Russia</option>
              <option value="Iceland">Iceland</option>
              <option value="Palestine">Palestine</option>
              <option value="Israel">Israel</option>
              <option value="Germany">Germany</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Turkey">Turkey</option>
            </select>
          </div>

          <div className="mb-4"><br />
            <label htmlFor="street">Street address</label><br /><br />
            <input
              name="street"
              value={street}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-[453px] p-4 rounded-xl"
            />
          </div>

          <div className="mb-4"><br />
            <label htmlFor="city">Town / City</label><br /><br />
            <input
              name="city"
              value={city}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-[453px] p-4 rounded-xl"
            />
          </div>

          <div className="mb-4"><br />
            <label htmlFor="province">Province</label><br /><br />
            <select className='border-2 w-[453px] p-4 pr-2 rounded-xl' name="province" value={province} onChange={this.handleChange}>
              <option disabled selected>Western Province</option>
              <option value="Bekabad">Bekabad</option>
              <option value="Boʻstonliq">Boʻstonliq</option>
              <option value="Boʻka">Boʻka</option>
              <option value="Chinoz">Chinoz</option>
              <option value="Qibray">Qibray</option>
              <option value="Ohangaron">Ohangaron</option>
              <option value="Oqqoʻrgʻon">Oqqoʻrgʻon</option>
              <option value="Parkent">Parkent</option>
            </select>
          </div>

          <div className="mb-4"><br />
            <label htmlFor="code">ZIP code</label><br /><br />
            <input
              name="code"
              value={code}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-[453px] p-4 rounded-xl"
            />
          </div>

          <div className="mb-4"><br />
            <label htmlFor="phone">Phone</label><br /><br />
            <input
              name="phone"
              value={phone}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-[453px] p-4 rounded-xl"
            />
          </div>

          <div className="mb-4"><br />
            <label htmlFor="email">Email address</label><br /><br />
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              className="border-2 w-[453px] p-4 rounded-xl"
            />
          </div>

          <div className="mb-4"><br />
            <br /><br />
            <input
              name="subject"
              value={subject}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-[453px] p-4 rounded-xl"
              placeholder='Additional information'
            />
          </div>

          <button type="submit" className="btnForm border-2 border-black px-[100px] py-4 rounded-xl">Place order</button>
        </form>
      </div>
    );
  }
}