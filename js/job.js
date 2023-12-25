const url = "https://cms.istad.co/api/cstad-announcements?populate=%2A";
const getData = async () => {
  const data = await fetch(url);
  const result = await data.json();
  return result;
};
const { data: jobs } = await getData();
console.log(jobs);

const job_wrapper = document.getElementById("job")
for(let job of jobs){
    const job_card = document.createElement("a")
    job_card.setAttribute("href", "./../Job Views/ISTAD-Job.html?id=" + job.id);
    job_card.setAttribute("target", "_self")
    job_card.classList =
      "max-w-xl bg-white overflow-hidden rounded-2xl flex flex-col sm:flex-row hover:scale-[1.1] duration-300";
      job_card.innerHTML = `
      <div class="w-5/6 p-4">
              <h2 class="text-xl font-semibold mb-4 text-blue-800" style="font-size: 24px">${
                job.attributes.title
              }</h2>
              <p class="text-gray-700"> ${job.attributes.content.slice(
                0,
                100
              )}... </p>
              <!-- Icon -->
              <div class="sm:block md:inline-block text-blue-900 text-xs pt-4">
                <!-- Author -->
                <i class="fas fa-user i-style"></i>
                <span class="content-detail-info mr-2">boss</span>
                <!-- End Author -->

                <!-- Publish Date -->
                <i class="fas fa-clock i-style"></i>
                <span class="content-detail-info mr-2">23-Nov-2023</span>
                <!-- End Publish Date -->

                <!-- View -->
                <i class="fas fa-eye i-style"></i>
                <span class="content-detail-info mr-2">919</span>
                <!-- End View -->

                <i class="fa fa-folder i-style mr-1"></i>
                <span class="content-detail-info">Blog</span>
              </div>
            </div>

            <!-- Image on the left side -->
            <div class="w-1/2 flex items-center justify-center">
              <img src=${
                "https://cms.istad.co/uploads/" +
                job.attributes.thumbnail.data.attributes.formats.small.hash +
                ".png"
              } alt="Image" class="w-4/5 object-cover">
            </div>
      `;
      job_wrapper.appendChild(job_card)
}
console.log(job_wrapper)