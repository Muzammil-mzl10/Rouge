import React, {useState, Fragment} from "react";
import { useForm } from "react-hook-form";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
const people = [
  {
    id: 1,
    name: "Male",

  },
  {
    id: 2,
    name: "Female",

  },
  {
    id: 3,
    name: "He/Him",

  },
  {
    id: 4,
    name: "She/Her",

  },
  {
    id: 5,
    name: "They/Them",
  },
  {
    id: 6,
    name: "Alien",
  },
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function registration() {
     const [selected, setSelected] = useState(people[3]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[30vw] flex flex-col space-y-5 py-2 px-8 bg-[#F5F5F5] rounded-lg"
        >
          <div className="mt-2 font-bold text-xl">Sign up</div>
          <input
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            className=""
            placeholder="Last name"
            {...register("Last name", { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <Listbox
            {...register("Title", { required: true })}
            value={selected}
            onChange={setSelected}
          >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Gender
                </Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="flex items-center">
                      {/* <img
                        src={selected.avatar}
                        alt=""
                        className="h-6 w-6 flex-shrink-0 rounded-full"
                      /> */}
                      <span className="ml-1 block truncate">
                        {selected.name}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                {/* <img
                                  src={person.avatar}
                                  alt=""
                                  className="h-6 w-6 flex-shrink-0 rounded-full"
                                /> */}
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-1 block truncate"
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          {/* <select {...register("Title", { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select> */}

          <div>
            <input
              {...register("TOS", { required: true })}
              type="checkbox"
              value="Yes"
            />
            <span className="ml-2">
              By creating your account, you agree to our{" "}
              <span className="text-purple-700 font-bold"> Term of Use</span> &{" "}
              <span className="text-purple-700 font-bold"> Privacy Policy</span>
            </span>
          </div>

          <input type="submit" value="Let's Go !" className="p-2 border bg-pink-600 text-white font-bold text-lg" />
        </form>
      </div>
    );
}
