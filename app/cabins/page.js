import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import { getCabins } from "../_lib/data-service";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

//export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

// id: 87,
// name: '001',
// maxCapacity: 2,
// regularPrice: 250,
// discount: 0,
// image: 'https://cqwwgiyxeyyozzrbrdui.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg'

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  // apiye bağlı datayı suspense etmek için, data, cabins liste taşındı.
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy natures beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
