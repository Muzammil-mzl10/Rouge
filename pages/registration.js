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
      <>
        <div className="w-[100vw] h-[100vh] bg-slate-300 flex flex-col justify-center items-center">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-[30vw] md:w-[60vw] w-[90vw] flex flex-col space-y-8 py-2 px-8 bg-[#F5F5F5] rounded-lg"
            >
              <div className="mt-2 font-bold text-xl">Sign up</div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  {...register("First name", { required: true, maxLength: 80 })}
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                  placeholder=" "
                />
                <label
                  for="firstName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                  {...register("Last name", { required: true, maxLength: 100 })}
                  placeholder=" "
                />
                <label
                  for="lastName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder=" "
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  name="mobileNumber"
                  id="mobileNumber"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rouge-Pink focus:outline-none focus:ring-0 focus:border-rouge-Pink peer"
                  {...register("Mobile number", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                  placeholder=" "
                />
                <label
                  for="mobileNumber"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rouge-Pink peer-focus:dark:text-rouge-Pink peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mobile Number
                </label>
              </div>
              
              <Listbox
                {...register("Title", { required: true })}
                value={selected}
                onChange={setSelected}
              >
                {({ open }) => (
                  <div>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">
                      Gender
                    </Listbox.Label>
                    <div className="relative mt-1" >
                      <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-ring-rouge-Pink focus:outline-none focus:ring-1 focus:ring-rouge-Pink sm:text-sm">
                        <span className="flex items-center">
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
                                    ? "text-white bg-rouge-Pink"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-1 block truncate"
                                      )}
                                    >
                                      {person.name}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-rouge-Pink",
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
                  </div>
                )}
              </Listbox>

              <div>
                <input
                  {...register("TOS", { required: true })}
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-rouge-Pink text-rouge-Pink bg-rouge-Pink border-rouge-Pink rounded focus:ring-rouge-Pink  focus:ring-2  "
                />
                <span className="ml-2">
                  By creating your account, you agree to our{" "}
                  <span className="text-rouge-Pink font-bold cursor-pointer">
                    {" "}
                    Term of Use
                  </span>{" "}
                  &{" "}
                  <span className="text-rouge-Pink font-bold cursor-pointer">
                    {" "}
                    Privacy Policy
                  </span>
                </span>
              </div>

              <input
                type="submit"
                value="Let's Go !"
                className="p-2 rounded-lg cursor-pointer border bg-rouge-Pink hover:bg-hover-rouge-Pink text-white font-bold text-lg"
              />
            </form>
          </div>
          <div className="mt-5">
            Already have an account?{" "}
            <span className="text-rouge-Pink font-bold cursor-pointer">
              Login
            </span>
          </div>
        </div>
      </>
    );
}
