import Reservation from "@/app/_components/Reservation";
import Cabin from "@/app/_components/Cabin";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// Dinamik metadata
export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { title: `Cabin ${cabin.name}` };
}

// Static params for dynamic routes
export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      {/* Cabin Detail Section */}
      <Cabin cabin={cabin} />

      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-accent-400 mb-10">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
