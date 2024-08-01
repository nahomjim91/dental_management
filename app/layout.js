"use client";

import SideNav from "@/componet/SideNav";
import TopHeader from "@/componet/TopHeader";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <meta
          name="description"
          content="Prima Eri - Professional wedding photography services. Capturing authentic, unposed moments across Ethiopia , and Eritrea."
        />
        <meta
          name="keywords"
          content="wedding photography, professional photography, authentic moments, Ethiopia, Eritrea, Prima Eri"
        /> */}
        <title>Dental mangement system</title>
      </head>
      <body className="flex bg-gray-100 overflow-hidden">
        <SideNav />
        <main className="w-full mt-2">
          <TopHeader />
          <div className="w-full overflow-x-auto">
            <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
              <div className="w-full flex justify-center mx-auto   overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                <div className="w-full md:max-w-6xl">{children}</div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
