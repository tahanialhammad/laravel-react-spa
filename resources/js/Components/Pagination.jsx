import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {links.map((link, index) =>
        link.url ? (
          <Link
            key={index}
            href={link.url}
            className={`px-3 py-1 rounded-md text-sm ${
              link.active
                ? "bg-indigo-500 text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ) : (
          <span
            key={index}
            className="px-3 py-1 rounded-md text-sm text-gray-400"
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        )
      )}
    </div>
  );
}
