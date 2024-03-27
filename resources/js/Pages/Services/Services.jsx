import React from 'react';
import SiteLayout from "@/Layouts/SiteLayout";

export default function Services() {
  const bg = "./images/candel-no-bg.png";

  return (
    <SiteLayout>
      <div className="flex min-h-screen flex-col items-center justify-between relative">
        <img
          src={bg}
          alt="background-image"
          className="z-50 w-full h-full object-cover opacity-75"
        />
        <div>Services</div>
      </div>
    </SiteLayout>
  );
}


