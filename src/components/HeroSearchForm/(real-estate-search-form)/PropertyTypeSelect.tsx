import React, { Fragment, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ClassOfProperties } from "../type";
import Checkbox from "shared/Checkbox/Checkbox";

const defaultPropertyType: ClassOfProperties[] = [
  {
    name: "Apartment",
    description: "A self-contained living unit within a larger building",
    checked: true,
  },
  {
    name: "House",
    description: "A standalone residential building",
    checked: false,
  },
  {
    name: "Condominium",
    description: "An individually owned unit within a multi-unit building",
    checked: false,
  },
  {
    name: "Townhouse",
    description:
      "A narrow, multi-level property attached to other similar properties",
    checked: false,
  },
  {
    name: "Duplex",
    description: "A property divided into two separate living units",
    checked: false,
  },
  {
    name: "Penthouse",
    description: "A luxury apartment located on the top floor of a building",
    checked: false,
  },
  {
    name: "Studio",
    description: "A small, single-room apartment",
    checked: false,
  },
  {
    name: "Villa",
    description:
      "A large, luxurious house often located in a desirable location",
    checked: false,
  },
  {
    name: "Bungalow",
    description: "A small, single-story house with a low-pitched roof",
    checked: false,
  },
  {
    name: "Farmhouse",
    description:
      "A house located on a farm, typically with shared common spaces",
    checked: false,
  },
];

export interface PropertyTypeSelectProps {
  onChange?: (data: any) => void;
  fieldClassName?: string;
}

const PropertyTypeSelect: FC<PropertyTypeSelectProps> = ({
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
}) => {
  const [typeOfProperty, setTypeOfProperty] =
    React.useState<ClassOfProperties[]>(defaultPropertyType);

  let typeOfPropertyText = "";
  if (typeOfProperty && typeOfProperty.length > 0) {
    typeOfPropertyText = typeOfProperty
      .filter((item) => item.checked)
      .map((item) => {
        return item.name;
      })
      .join(", ");
  }
  return (
    <Popover className="flex relative flex-1">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`flex z-10 text-left w-full flex-shrink-0 items-center ${fieldClassName} space-x-3 focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
            onClickCapture={() => document.querySelector("html")?.click()}
          >
            <div className="text-neutral-300 dark:text-neutral-400">
              <HomeIcon className="w-5 h-5 lg:w-7 lg:h-7" />
            </div>
            <div className="flex-1">
              <span className="block xl:text-lg font-semibold overflow-hidden">
                <span className="line-clamp-1">
                  {typeOfPropertyText || `Type`}
                </span>
              </span>
              <span className="block mt-1 text-sm text-neutral-400 leading-none font-light ">
                Property type
              </span>
            </div>
          </Popover.Button>

          {open && (
            <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white dark:bg-neutral-800"></div>
          )}

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <div className="">
                <div className="relative flex flex-col space-y-5">
                  {typeOfProperty.map((item, index) => (
                    <div key={item.name} className="">
                      <Checkbox
                        name={item.name}
                        label={item.name}
                        subLabel={item.description}
                        defaultChecked={typeOfProperty[index].checked}
                        onChange={(e) => {
                          const newState = typeOfProperty.map((item, i) => {
                            if (i === index) {
                              return { ...item, checked: e };
                            }
                            return item;
                          });
                          setTypeOfProperty(() => {
                            return newState;
                          });
                          onChange && onChange(newState);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PropertyTypeSelect;
