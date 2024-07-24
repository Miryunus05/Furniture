'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

// ... Your other imports

interface Item {
  id: number;
  name: string;
  image: string;
  // ... other properties if needed
}

const MyComponent: React.FC = () => {
  const [data, setData] = useState<Item[]>([]); 

  useEffect(() => {
    // Fetch data from your API or data source
    const fetchData = async () => {
      try {
        // Replace with your actual fetch logic
        const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
        const items: Item[] = await response.json(); 
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // The empty dependency array [] makes this effect run only once

  return (

    <div className='cards'>
                  <h2>Browse The Range</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     <div className=' flex justify-center items-center'>             
      {data.length > 0 ? ( // Check if data is loaded
        <ul className=' flex-wrap flex gap-14 text-center  max-w-[1300px]'>
          {data.map((item) => (
            
            <li className='w-[381px] h-[480px] pt-3' key={item.id}>
              {item.image && <img src={item.image} alt={item.name} className=' rounded-md  w-[100%] h-[100%]'/>}

              <h4 className=' font-semibold leading-[80px]'>{item.name}</h4>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
      </div>
    </div>
  );
};

export default MyComponent;
