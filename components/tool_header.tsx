import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grovixLog from '@/assets/image/grovix-lab.png';


const Header = () => {

    return (
        <>
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
            <div className='toolHeader'>
                <Link href="/terms-and-conditions">Terms and Conditions&nbsp;&nbsp;-</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
        </>
    );
};

export default Header;
