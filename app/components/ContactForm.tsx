'use client'
import React, { ChangeEvent, Component, FormEvent } from 'react';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default class ContactForm extends Component<{}, ContactFormState> {
  constructor(props: {}) {
    super(props);
    this.state = { name: '', email: '', subject: '', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<ContactFormState, keyof ContactFormState>);
  }

  handleSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    alert(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
  }

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="p-8">
        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="name">Your name</label>
          </div>
          <div>
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-3/4 p-4 rounded-xl"
              placeholder="ABC"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="email">Email address</label>
          </div>
          <div>
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-3/4 p-4 rounded-xl"
              placeholder="ABC@def.com"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="subject">Subject</label>
          </div>
          <div>
            <input
              name="subject"
              value={subject}
              onChange={this.handleChange}
              type="text"
              className="border-2 w-3/4 p-4 rounded-xl"
              placeholder="This is optional"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <textarea
              rows={5}
              name="message"
              value={message}
              onChange={this.handleChange}
              className="border-2 w-3/4 p-4 rounded-xl"
              placeholder="Hi! I'd like to ask about"
            />
          </div>
        </div>

        <div className="mb-4">
          <button onClick={this.handleSubmit} className="w-[200px] px-8 py-4 bg-[#B88E2F] rounded-md text-white">
            Send
          </button>
        </div>
      </div>
    );
  }
}