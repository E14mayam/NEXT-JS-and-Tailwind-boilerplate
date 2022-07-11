import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  let [categories] = useState({
    Included: [
      {
        id: 1,
        title: "Next Js + Tailwind",
        date: "Jul 11",
      },
      {
        id: 2,
        title: "React Js + headlessui/react",
        date: "Jul 11",
      },
    ],
    Creators: [
      {
        id: 1,
        title: "Boilerplate - Emmanuel Alozie",
        date: "Jan 11",
      },
      {
        id: 2,
        title: "HeadlessUI - Next Js",
        date: "Jul 11",
      },
    ],
    Start: [
      {
        id: 1,
        title: "All mini components should be located in the components folder",
        date: "Jul 11",
      },
      {
        id: 2,
        title: "Larger components should be located in the pages folder",
        date: "Jul 11",
      },
    ],
  });

  return (
    <div>
      <h1 className="text-3xl py-4 font-semibold border-b-4 w-2/4 mx-auto text-slate-300 border-slate-300 text-center">
        Next + Tailwind Boilerplate
      </h1>
      <div className="w-full max-w-md mx-auto px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="text-center">
      <a href="https://nextjs.org/docs/getting-started" className="text-blue-500 font-semibold px-4 py-2 bg-slate-300 rounded-md">Read Docs</a>
      </div>
    </div>
  );
};

export default Home;
