'use client';
import { use, useState } from 'react';
import { conservativeAmenities, Amenity } from '@/utils/amenities';
import { Checkbox } from '@/components/ui/checkbox';

import React from 'react';

function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
  const amenitiesWithIcons = defaultValue?.map(({ name, selected }) => {
    return {
      name,
      selected,
      icon: conservativeAmenities.find((amenity) => amenity.name === name)!
        .icon,
    };
  });
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    amenitiesWithIcons || conservativeAmenities
  );

  const handleChange = (conservativeAmenities: Amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((a) => {
        if (a.name === conservativeAmenities.name) {
          return { ...a, selected: !a.selected };
        }
        return a;
      });
    });
  };

  return (
    <section>
      <input
        type='hidden'
        name='amenities'
        value={JSON.stringify(selectedAmenities)}
      />
      <div className='grid grid-cols-2 gap-4'>
        {selectedAmenities.map((conservativeAmenities) => {
          return (
            <div
              key={conservativeAmenities.name}
              className='flex items-center space-x-2'
            >
              <Checkbox
                id={conservativeAmenities.name}
                checked={conservativeAmenities.selected}
                onCheckedChange={() => handleChange(conservativeAmenities)}
              />
              <label
                htmlFor={conservativeAmenities.name}
                className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center'
              >
                {conservativeAmenities.name}
                <conservativeAmenities.icon className='w-4 h-4' />
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AmenitiesInput;
