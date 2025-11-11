import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlantCart from '../Components/PlantCart';


const Plants = () => {
    const allPlantsData = useLoaderData()
 
    return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <title>Plants</title>
          {allPlantsData.map((data) => (
            <PlantCart key={data.plantId} data={data} />
          ))}
        </div>
    );
};

export default Plants;