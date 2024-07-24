'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';



// ... Your other imports

interface Item {
  id: number;
  title: string;
  image: string;
  price: string;
  subtitle: string;
  rate: number;

  // ... other properties if needed
}

const MyComponent: React.FC = () => {
  const [data, setData] = useState<Item[]>([]); 

  useEffect(() => {
    // Fetch data from your API or data source
    const fetchData = async () => {
      try {
        // Replace with your actual fetch logic
        const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
        const items: Item[] = await response.json(); 
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // The empty dependency array [] makes this effect run only once

  return (

    <div className="wrapper flex justify-start items-center ">
        <div className='wrapper-child w-[100%] flex justify-center items-center'>

      {data.length > 0 ? ( // Check if data is loaded
        <ul className=' flex gap-10 text-center flex-wrap max-w-[1300px]'>

          {data.map((item) => (
            
            <li className='wrapper-card w-[285px]  bg-[#F4F5F7]' key={item.id}>
                                          <span className='chegirma bg-[#E97171]'>-{item.rate}%</span>
              {item.image && <img src={item.image} alt={item.title} className=' rounded-md'/>}

              <h3 className='ml-5 '>{item.title}</h3>
              <p className='ml-5 '>{item.subtitle}</p>
              <span className=' flex gap-5 leading-[50px] mb-3 ml-5'>
                <small>Rp {item.price}</small>
                <small>Rp {item.price}</small>
              </span>
              <div className='qora-fon'>
     <Link href={`/pages/shop/singleProduct${item.id}`} key={item.id} ><button className='add'>Add to card</button></Link>
              <span className='add1 flex gap-4 absolute top-[240px]'>
                <p >Share</p>
                <p>Compare</p>
                <p>Like</p>
              </span> 
              </div>
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
