import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Boarding House Finder</h1>
      <p>
        Discover a wide selection of boarding houses available for booking
        today. Explore various options and secure your accommodations in these
        cozy residences for your upcoming stay.
      </p>
      <div>
        <Link href="/browse">Browse</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default page;
