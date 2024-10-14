import React from 'react';
import { LuUser2 } from 'react-icons/lu';
import Image from 'next/image'; // Import Image from next/image
import { fetchProfileImage } from '@/utils/actions';

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt='User profile picture' // Add meaningful alt text
        width={24} // Specify width
        height={24} // Specify height
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }
  return <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />;
}

export default UserIcon;
