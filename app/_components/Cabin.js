import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-6 md:gap-20 border border-primary-800 py-3 px-10 mb-24">
        {/* Image Section */}
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill={true}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Cabin Info Section */}
        <div className="space-y-6">
          <h3 className="text-accent-100 font-black text-3xl sm:text-5xl md:text-7xl mb-5 bg-primary-950 p-6 pb-1">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="space-y-4 mb-7">
            <li className="flex items-center gap-3">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>{" "}
      {/* <-- Missing closing div */}
    </div>
  );
}

export default Cabin;
