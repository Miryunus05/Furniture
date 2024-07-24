'use client'
import { useState } from 'react';
import Link from 'next/link';

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

const Page = (): JSX.Element => {
  const [cardData, setCardData] = useState<CardData>({
    title: '',
    description: '',
    imageUrl: ''
  });

  const saveDataToLocalStorage = (): void => {
    localStorage.setItem('savedCardData', JSON.stringify(cardData));
  };

  const handleCardClick = (): void => {
    saveDataToLocalStorage();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCardData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={cardData.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={cardData.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="imageUrl"
        value={cardData.imageUrl}
        onChange={handleInputChange}
        placeholder="Image URL"
      />
      <Link href="/details">
        <a onClick={handleCardClick}>View Details</a>
      </Link>
    </div>
  );
};

export default Page;