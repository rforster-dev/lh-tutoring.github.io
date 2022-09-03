export default function AboutMe() {
  return (
    <div className="container mx-auto">
      <div className="antialiased w-full h-full font-inter p-10">
        <div className="container px-4 mx-auto">
          <div>
            <div id="title" className="text-center my-10">
              <h1 className="font-bold text-4xl">What do I teach?</h1>
              <p className="text-light text-gray-500 text-xl">
                Each subject that I am able to teach
              </p>
            </div>

            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Subject
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Level
                    </th>
                    <th scope="col" className="py-3 px-6">
                      My experience
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      English
                    </th>
                    <td className="py-4 px-6">KS1,KS2</td>
                    <td className="py-4 px-6">Lorem ipsum</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Maths
                    </th>
                    <td className="py-4 px-6">KS1,KS2</td>
                    <td className="py-4 px-6">Lorem ipsum</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Design and Technology
                    </th>
                    <td className="py-4 px-6">KS1,KS2</td>
                    <td className="py-4 px-6">Lorem ipsum</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Geography
                    </th>
                    <td className="py-4 px-6">KS1,KS2</td>
                    <td className="py-4 px-6">Lorem ipsum</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                    >
                      History
                    </th>
                    <td className="py-4 px-6">KS1,KS2</td>
                    <td className="py-4 px-6">Lorem ipsum</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Science
                    </th>
                    <td className="py-4 px-6">KS1,KS2</td>
                    <td className="py-4 px-6">Lorem ipsum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
