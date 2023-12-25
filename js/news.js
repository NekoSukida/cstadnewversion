const url = "https://cms.istad.co/api/cstad-announcements?populate=%2A";
const getData = async () => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
const { data: news } = await getData();
console.log(news);
const new_detail = document.getElementById("news-detail");
new_detail.innerHTML = `
            <div 
              class="duration-300 hover:scale-[1.1] w-full max-w-sm  h-90 rounded-lg bg-white"
            >
              <a class="relative" href="./detail/detail.html">
                <img
                  class="p-0 rounded-t-lg h-72"
                  src="./../asset/svg/Designer girl-rafiki.svg"
                  alt="Programming"
                  />
                  <div class="flex items-center justify-between z-10 p-3 bottom-0">
                    <h5 class="text-lg font-semibold tracking-tight text-black">
                      Programming
                      <span class="block font-normal text-sm">4 courses</span>
                  </h5>
                  </div>
              </a>
            </div>
`;
