const url = "https://cms.istad.co/api/cstad-activities";
const getData = async () => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
const { data: activities } = await getData();

const activities_section = document.getElementById("activities")
for(let i = 0; i < 3 ; i++){
    const div = document.createElement("div");
    div.classList = "w-full max-w-sm  h-90 rounded-lg bg-white";
    div.innerHTML = `
    <img
                  class="p-0 rounded-t-lg h-72"
                  src="/asset/Image/12.jpg"
                  alt="Programming"
                  />
                  <div class="flex items-center justify-between z-10 p-3 bottom-0">
                    <h5 class="text-lg font-semibold tracking-tight text-black">
                      ${activities[i].attributes.title}
                      <span class="block font-normal text-sm">${activities[i].attributes.description}</span>
                  </h5>
                  </div>
    `;
    activities_section.appendChild(div)
}


const act_detail = document.getElementById("act_detail")
for(let i = 3; i < 6 ; i++){
    const div = document.createElement("div")
    div.classList =
      "flex flex-col overflow-hidden rounded-md lg:flex-row-reverse duration-300";
      div.innerHTML = `
      <img src="./../asset/Image/scholarship.jpg" alt="" class="h-80 dark:bg-gray-500 aspect-video rounded-md mt-16">
                      <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <h5 class="text-blue-800 font-bold p-2">${activities[i].attributes.title}</h5>
                        <p class=" p-2">${activities[i].attributes.description}</p>
                      </div>
      `;
      act_detail.appendChild(div)
}